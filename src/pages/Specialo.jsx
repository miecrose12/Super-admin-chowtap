import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { 
  Briefcase, 
  List, 
  Calendar, 
  Search, 
  Filter, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Check,
  ChevronRight as ChevronRightIcon,
  Image as ImageIcon
} from 'lucide-react';

// --- MOCK DATA ---

const initialOrdersData = Array.from({ length: 24 * 5 }, (_, i) => ({
  id: `#CT-${9921 - i}`,
  name: ['Alexandrea Laurent', 'Marcus Knight', 'Sarah Connor', 'John Doe', 'Bruce Wayne'][i % 5],
  restaurant: ['Gourmet Burger Kitchen', 'Sushi Master Elite', 'The Italian Bistro', 'Pizza Palace', 'Gotham Steaks'][i % 5],
  status: ['PROCESSING', 'DELIVERED', 'CONFIRMED', 'REFUNDED', 'DELIVERED'][i % 5],
  amount: ['$142.50', '$84.20', '$210.00', '$45.00', '$532.18'][i % 5],
  day: 'Wednesday',
  checked: false,
}));

const initialProductsData = Array.from({ length: 50 * 5 }, (_, i) => ({
  id: i,
  name: ['Signature Truffle Burger', 'Tuna Power Bowl', 'Lava Melt Cake', 'Artisan Carbonara', 'Artisan Carbonara'][i % 5],
  sku: `CHW-${8821 + i}`,
  price: ['N200.00', 'N10,000.00', 'N3,500.00', 'N12,00.00', 'N12,00.00'][i % 5],
  restaurant: ['The Burger Hub', 'Green Bowl Co.', 'Sweet Bites', 'Pasta Express', 'Pasta Express'][i % 5],
  isActive: [true, true, false, true, true][i % 5]
}));

// --- REUSABLE COMPONENTS ---

const StatCard = ({ title, value, subtext }) => (
  <div className="bg-[#18181a] p-5 rounded-lg border border-[#2a2a2a] flex flex-col justify-center">
    <h3 className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest mb-3">{title}</h3>
    <div className="text-[28px] font-semibold text-white mb-2 leading-none">{value}</div>
    <p className="text-[#6b6b6b] text-xs">{subtext}</p>
  </div>
);

const CustomCheckbox = ({ checked, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-[18px] h-[18px] rounded flex items-center justify-center transition-colors border ${
      checked ? 'bg-[#DC781B] border-[#DC781B]' : 'border-[#4a4a4a] bg-transparent hover:border-[#6B7280]'
    }`}
  >
    {checked && <Check size={14} className="text-[#0b0b0b] stroke-[3]" />}
  </button>
);

const ToggleSwitch = ({ isActive, onToggle }) => (
  <button 
    onClick={onToggle}
    className={`w-10 h-[22px] rounded-full relative transition-colors duration-200 ease-in-out ${
      isActive ? 'bg-[#DC781B]' : 'bg-[#333333]'
    }`}
  >
    <div className={`w-[14px] h-[14px] rounded-full absolute top-1 transition-transform duration-200 ease-in-out ${
      isActive ? 'bg-white translate-x-[22px]' : 'bg-[#6B7280] translate-x-1'
    }`} />
  </button>
);

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-between items-center py-6 text-sm text-[#6B7280]">
      <div>Showing <span className="text-white font-medium">{startItem}-{endItem}</span> of <span className="text-white font-medium">{totalItems.toLocaleString()}</span> results</div>
      <div className="flex items-center gap-1.5">
        <button 
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-1 hover:text-white disabled:opacity-50 disabled:hover:text-[#6B7280] transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        
        {getPageNumbers().map((pageNum, idx) => (
          pageNum === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-2">...</span>
          ) : (
            <button 
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded text-[13px] font-medium flex items-center justify-center transition-colors ${
                currentPage === pageNum ? 'bg-[#DC781B] text-[#0b0b0b]' : 'hover:bg-[#2a2a2a] hover:text-white'
              }`}
            >
              {pageNum}
            </button>
          )
        ))}

        <button 
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-1 hover:text-white disabled:opacity-50 disabled:hover:text-[#8a8a8a] transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

// --- TAB VIEWS ---

const OrdersView = () => {
  const [orders, setOrders] = useState(initialOrdersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  const [startDate, setStartDate] = useState(new Date("2026-03-03"));
  const [endDate, setEndDate] = useState(null);
  const dropdownRef = useRef(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const periods = ['Last 30 Days', 'Quarterly', 'Custom Range'];

  // Pagination logic
  const currentOrders = orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
  const handleCheckOrder = (id) => {
    setOrders(orders.map(order => order.id === id ? { ...order, checked: !order.checked } : order));
  };

  const handleCheckAll = () => {
    const allCurrentChecked = currentOrders.every(order => order.checked);
    const updatedOrders = [...orders];
    
    currentOrders.forEach(currentOrder => {
      const index = updatedOrders.findIndex(o => o.id === currentOrder.id);
      if (index !== -1) {
        updatedOrders[index].checked = !allCurrentChecked;
      }
    });
    setOrders(updatedOrders);
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'PROCESSING': return 'text-[#e87922] border-[#e87922]/20 bg-[#e87922]/10';
      case 'DELIVERED': return 'text-[#10b981] border-[#10b981]/20 bg-[#10b981]/10';
      case 'CONFIRMED': return 'text-[#3b82f6] border-[#3b82f6]/20 bg-[#3b82f6]/10';
      case 'REFUNDED': return 'text-[#ef4444] border-[#ef4444]/20 bg-[#ef4444]/10';
      default: return 'text-gray-500 border-gray-500/20 bg-gray-500/10';
    }
  };

  return (
    <div className="animate-in fade-in duration-300">
      <style>{`
        .react-datepicker {
          background-color: #161616 !important;
          border-color: #262626 !important;
          font-family: inherit !important;
          color: #d4d4d4 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
        }
        .react-datepicker__header {
          background-color: #111111 !important;
          border-bottom-color: #262626 !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
          color: #f5f5f5 !important;
        }
        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          color: #a0a0a0 !important;
        }
        .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
          background-color: #222 !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
        .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range {
          background-color: #DC781B !important;
          color: #0b0b0b !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(220, 120, 27, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[28px] font-semibold text-white tracking-tight">Special Orders Management</h1>
        <div className="flex items-center gap-3 relative z-40">
          {selectedPeriod === 'Custom Range' && (
            <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200">
              <div className="relative">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd MMM, yyyy"
                  placeholderText="Start Date"
                  className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#DC781B] outline-none transition-colors"
                />
              </div>
              <span className="text-[#666] text-[12px]">To</span>
              <div className="relative">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd MMM, yyyy"
                  placeholderText="End Date"
                  className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#DC781B] outline-none transition-colors"
                />
              </div>
              <button className="bg-[#DC781B] hover:bg-[#c96e21] text-[#0b0b0b] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                Apply
              </button>
            </div>
          )}

          <div className="relative" ref={dropdownRef}>
           <button 
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  className="flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[150px]"
>
  <Calendar size={16} className="text-[#888]" />
  {selectedPeriod}
  <ChevronDown size={16} />
</button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => { setSelectedPeriod(period); setIsDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                      selectedPeriod === period ? 'text-[#DC781B] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <StatCard title="Total Orders" value="12,480" subtext="Orders count" />
        <StatCard title="Delivered Orders" value="12,390" subtext="Orders delivered to customers" />
        <StatCard title="Active Orders" value="142" subtext="Orders yet to be delivered" />
        <StatCard title="Total Revenue" value="N82,780.00" subtext="Total revenue for vendors" />
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-[320px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b6b6b]" size={16} />
          <input 
            type="text" 
            placeholder="Search order-id..." 
            className="w-full bg-[#0b0b0b] border border-[#2a2a2a] text-[#d1d1d1] text-sm pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:border-[#4a4a4a] transition-colors placeholder:text-[#6b6b6b]"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#18181a] border border-[#2a2a2a] text-[#6B7280] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#2a2a2a] hover:text-white transition-colors">
            <Filter size={14} /> STATUS: ALL
          </button>
          <button className="bg-[#DC781B] text-[#0b0b0b] text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-[#d06b1d] transition-colors uppercase tracking-wide">
            Release For Delivery
          </button>
          <button className="flex items-center gap-2 border border-[#2a2a2a] text-[#d1d1d1] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#18181a] transition-colors">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-[#000000] rounded-lg border border-[#2a2a2a] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a] bg-[#131313]">
              <th className="py-4 px-6 w-12">
                <CustomCheckbox 
                  checked={currentOrders.length > 0 && currentOrders.every(o => o.checked)} 
                  onChange={handleCheckAll} 
                />
              </th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Order ID</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Customer Name</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Restaurant</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Status</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Total Amount</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Pickup Day</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e1e1e]">
            {currentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-[#141414] transition-colors group">
                <td className="py-4 px-6">
                  <CustomCheckbox checked={order.checked} onChange={() => handleCheckOrder(order.id)} />
                </td>
                <td className="py-4 px-6 text-[#DC781B] font-semibold text-[13px]">{order.id}</td>
                <td className="py-4 px-6 text-[#d1d1d1] text-[13px] font-medium">{order.name}</td>
                <td className="py-4 px-6 text-[#6B7280] text-[13px]">{order.restaurant}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-white font-semibold text-[13px]">{order.amount}</td>
                <td className="py-4 px-6 text-[#d1d1d1] text-[13px]">{order.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination 
        totalItems={1284} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

const ProductsView = () => {
  const [products, setProducts] = useState(initialProductsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleToggleStatus = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
  };

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[28px] font-semibold text-white tracking-tight">Products Management</h1>
        <div className="flex items-center gap-3">
          <button className="bg-[#1c1c1c] border border-[#2a2a2a] text-[#9CA3AF] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#2a2a2a] hover:text-white transition-colors uppercase tracking-wide">
            Open Products
          </button>
          <button className="border border-[#2a2a2a] text-[#9CA3AF] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#1c1c1c] hover:text-white transition-colors">
            Shutdown Products
          </button>
          <button className="bg-[#DC781B] text-[#0b0b0b] text-[13px] font-semibold px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-[#d06b1d] transition-colors uppercase tracking-wide">
            <span className="text-lg leading-none mb-[2px]">+</span> ADD PRODUCT
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <StatCard title="Total Products" value="12,480" subtext="Products count" />
        <StatCard title="Available Products" value="12,390" subtext="Products visible to customers" />
        <StatCard title="Unavailable Products" value="142" subtext="Products not visible to customers" />
        <StatCard title="Total Restaurants" value="120" subtext="Number of partnered restaurants" />
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-[320px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b6b6b]" size={16} />
          <input 
            type="text" 
            placeholder="Search product name..." 
            className="w-full bg-[#0b0b0b] border border-[#2a2a2a] text-[#d1d1d1] text-sm pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:border-[#4a4a4a] transition-colors placeholder:text-[#6b6b6b]"
          />
        </div>
        <div className="flex items-center gap-3 text-[13px]">
          <button className="flex justify-between items-center w-44 bg-[#0b0b0b] border border-[#2a2a2a] text-[#6B7280] px-4 py-2.5 rounded-md hover:bg-[#141414] transition-colors">
            All Restaurants <ChevronDown size={14} className="text-[#6b6b6b]" />
          </button>
          <button className="flex justify-between items-center w-36 bg-[#0b0b0b] border border-[#2a2a2a] text-[#6B7280] px-4 py-2.5 rounded-md hover:bg-[#141414] transition-colors">
            Price Range <ChevronDown size={14} className="text-[#6b6b6b]" />
          </button>
          <button className="bg-[#DC781B] text-[#0b0b0b] p-2.5 rounded-md hover:bg-[#d06b1d] transition-colors">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-[#0b0b0b] rounded-lg border border-[#2a2a2a] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a] bg-[#0f0f0f]">
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest w-20">Image</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Product Name</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Price</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Restaurant</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Status</th>
              <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e1e1e]">
            {currentProducts.map((product) => (
              <tr key={product.id} className="hover:bg-[#141414] transition-colors group">
                <td className="py-3 px-6">
                  <div className="w-11 h-11 bg-[#1c1c1c] rounded flex items-center justify-center border border-[#2a2a2a]">
                     <ImageIcon size={18} className="text-[#4a4a4a]" />
                  </div>
                </td>
                <td className="py-3 px-6">
                  <div className="text-[#E7E5E5] font-semibold text-[13px]">{product.name}</div>
                  <div className="text-[#ACABAA] text-[11px] mt-0.5">SKU: {product.sku}</div>
                </td>
                <td className="py-3 px-6 text-[#a1a1a1] text-[13px]">{product.price}</td>
                <td className="py-3 px-6">
                  <span className="bg-[#1c1c1c] border border-[#2a2a2a] text-[#9CA3AF] text-[11px] px-3 py-1.5 rounded-full font-medium">
                    {product.restaurant}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <div className="flex items-center gap-2.5">
                    <ToggleSwitch 
                      isActive={product.isActive} 
                      onToggle={() => handleToggleStatus(product.id)} 
                    />
                    <span className={`text-[13px] font-semibold ${product.isActive ? 'text-[#DC781B]' : 'text-[#6b6b6b]'}`}>
                      {product.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="text-[#6b6b6b] hover:text-[#d1d1d1] transition-colors p-1">
                    <ChevronRightIcon size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination 
        totalItems={248} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function Speialo() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen bg-[#0e0e0e] font-sans p-8 selection:bg-[#e87922]/30">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Top Navigation Tabs */}
        <div className="flex gap-8 border-b border-[#2a2a2a] mb-8">
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 pb-3.5 px-1 border-b-[3px] text-[13px] font-semibold transition-colors ${
              activeTab === 'orders' 
                ? 'border-[#DC781B] text-[#DC781B]' 
                : 'border-transparent text-[#6B7280] hover:text-[#d1d1d1]'
            }`}
          >
            <Briefcase size={16} className={activeTab === 'orders' ? 'text-[#DC781B]' : 'text-[#6b6b6b]'} /> 
            Special Orders
          </button>
          
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 pb-3.5 px-1 border-b-[3px] text-[13px] font-semibold transition-colors ${
              activeTab === 'products' 
                ? 'border-[#DC781B] text-[#DC781B]' 
                : 'border-transparent text-[#6B7280] hover:text-[#d1d1d1]'
            }`}
          >
            <List size={16} className={activeTab === 'products' ? 'text-[#e87922]' : 'text-[#6b6b6b]'} /> 
            Product Inventory
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' ? <OrdersView /> : <ProductsView />}
        
      </div>
    </div>
  );
}