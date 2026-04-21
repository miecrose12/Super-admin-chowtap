import React, { useState } from 'react';
import { 
  ArrowLeft, Edit2, Search, Filter, Plus, ChevronLeft, ChevronRight,
  MapPin, CheckCircle2, Clock, Star, Download, MoreVertical, Shield,
  ShieldCheck,
  ShoppingBag,
  ShieldCheckIcon,
  Check,
  ListFilter,
  Calendar,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'menu', label: 'MENU' },
    { id: 'orders', label: 'ORDERS' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'transactions', label: 'TRANSACTIONS' },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 font-sans p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
    <div className="flex items-center justify-between w-full p-4 bg-[#0e0e0e]">
      <div className="flex gap-5 items-center">
        {/* Back Button */}
       <Link to="/vendors">
  <button className="flex items-center justify-center w-[36px] h-[76px] border border-[#d97736]/60 rounded-md bg-[#0f0f0f] hover:bg-[#1a1a1a] text-gray-300 transition-colors shrink-0">
    <ArrowLeft size={18} strokeWidth={1.5} />
  </button>
</Link>

        {/* Logo Container */}
        <div className="w-[84px] h-[84px] bg-white rounded-lg flex items-center justify-center shrink-0">
          <div 
            className="w-[70px] h-[70px] bg-[#141615] flex flex-col items-center justify-center text-center"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            <span className="text-[#00c853] font-serif italic font-bold text-sm leading-none -ml-3">Deli</span>
            <span className="text-[#c6ff00] font-serif italic font-bold text-sm leading-none ml-2">Buds</span>
          </div>
        </div>

        {/* Vendor Information */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <h1 className="text-[28px] leading-none font-bold text-white tracking-wide">Bros John</h1>
            <span className="px-2 py-[3px] text-[10px] font-bold bg-[#062c1d] text-[#10b981] rounded uppercase tracking-wider">
              ACTIVE
            </span>
          </div>
          <p className="text-[15px] text-[#8b8b8b] max-w-[500px] mt-2.5 leading-snug">
            Artisan coffee and organic campus meals serving the student body with sustainable sourcing and fresh ingredients daily.
          </p>
          <div className="flex items-center gap-2 mt-2.5 text-[14px]">
            <Star size={15} className="fill-[#df8153] text-[#df8153]" />
            <span className="text-white font-semibold">4.8</span>
            <span className="text-[#737373]">(1,240 reviews)</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <Link to="/vendors/edit">
  <button className="flex items-center gap-2 px-4 py-2 bg-[#202020] border border-[#303030] rounded-md text-[13px] font-medium text-gray-200 hover:text-white hover:bg-[#2a2a2a] transition-all">
    <Edit2 size={14} strokeWidth={2} /> Edit Vendor
  </button>
</Link>
        <button className="px-4 py-2 bg-[#202020] border border-[#303030] rounded-md text-[13px] font-medium text-gray-200 hover:text-white hover:bg-[#2a2a2a] transition-all">
          Clear Balance
        </button>
        <button className="px-4 py-2 bg-[#2b1613] border border-[#3d1f19] text-[#e07d65] rounded-md text-[13px] font-medium hover:bg-[#351c17] transition-all">
          Suspend Vendor
        </button>
      </div>
    </div>


        {/* Navigation Tabs */}
        <div className="border-b border-neutral-800 flex gap-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-semibold tracking-wider ${
                activeTab === tab.id 
                  ? 'text-[#DC781B] border-b-2 border-[#DC781B]' 
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Rendering */}
        <div className="mt-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'menu' && <MenuTab />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'reviews' && <ReviewsTab />}
          {activeTab === 'transactions' && <TransactionsTab />}
        </div>

      </div>
    </div>
  );
};

/* --- TAB COMPONENTS --- */




const OverviewTab = () => (
  <div className="space-y-8 p-6 bg-[#0e0e0e] min-h-screen font-sans">
    
    {/* Stats Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'NET REVENUE', value: '₦ 25,000.00', icon: <Shield size={18} className="text-neutral-500" /> },
        { label: 'ORDERS VOLUME', value: '8,246', icon: <ShoppingBag size={18} className="text-neutral-500" /> },
        { label: 'TOTAL REFUNDED', value: '₦ 30,000.00', icon: <Shield size={18} className="text-neutral-500" /> },
        { label: 'COMPANY PROFIT', value: '₦ 125,000.00', icon: <Shield size={18} className="text-neutral-500" /> }
      ].map((stat, i) => (
        <div 
          key={i} 
          className="bg-[#141414] border border-neutral-800 border-l-[3px] border-l-orange-500 rounded-md p-5 flex flex-col justify-center h-[104px] relative"
        >
          <div className="text-[10px] font-bold tracking-widest text-[#DC781B] uppercase mb-2">
            {stat.label}
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">
            {stat.value}
          </div>
          <div className="absolute top-5 right-5">
            {stat.icon}
          </div>
        </div>
      ))}
    </div>

    {/* Core Information Section */}
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[3px] h-5 bg-orange-500 rounded-full"></div>
        <h2 className="text-lg font-medium text-white tracking-wide">Core Information</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Owner & Email (Stacked) */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#141414] border border-neutral-800 p-5 rounded-md h-[115px] flex flex-col justify-center">
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">OWNER</div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800 shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" 
                  alt="Sarah Jenkins" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="font-medium text-white text-sm">Sarah Jenkins</span>
            </div>
          </div>
          
          <div className="bg-[#141414] border border-neutral-800 p-5 rounded-md h-[115px] flex flex-col justify-center">
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">PRIMARY EMAIL</div>
            <div className="font-medium text-white text-sm">email@greenleaf.edu</div>
          </div>
        </div>

        {/* Center Column: Verification Status (Taller) */}
        <div className="bg-[#141414] border border-neutral-800 p-6 rounded-md flex flex-col h-[246px]">
          <div className="flex justify-between items-center mb-8">
            <div className="font-medium text-white">Verification Status</div>
            <span className="px-3 py-1 text-[10px] font-bold bg-[#0d2e20] text-emerald-500 rounded-md uppercase tracking-wider">
              VERIFIED
            </span>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-[#0d2e20] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="text-emerald-500" size={14} strokeWidth={3} />
              </div>
              <div>
                <div className="text-white font-medium text-sm mb-1">Account Details Added</div>
                <div className="text-xs text-neutral-500">Verified on Oct 12, 2023</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-[#0d2e20] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="text-emerald-500" size={14} strokeWidth={3} />
              </div>
              <div>
                <div className="text-white font-medium text-sm mb-1">Vendor Location Mapped</div>
                <div className="text-xs text-neutral-500">Coordinate precision within 5m</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Map View */}
        <div className="bg-[#1a2f2b] border border-neutral-800 rounded-md relative overflow-hidden h-[246px] flex flex-col justify-end">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop")',
              filter: 'sepia(1) hue-rotate(110deg) saturate(2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1512] via-transparent to-transparent"></div>
          
          <div className="absolute top-[50%] left-[65%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-[#ff9c5a] rounded-full shadow-[0_0_12px_rgba(255,156,90,1)] border border-orange-200"></div>
          </div>

          <div className="relative z-10 p-6 w-full">
            <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">
              MCPHERSON UNIVERSITY
            </div>
            <div className="text-xl font-bold text-white mb-2 tracking-tight">
              Bros John
            </div>
            <div className="flex items-center gap-1.5 text-sm text-neutral-300 font-medium">
              <MapPin size={14} className="text-neutral-400" /> Ogun, Nigeria
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Phone and Operating Hours Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        
        {/* Phone Field - Matches the width of Column 1 */}
        <div className="bg-[#141414] border border-neutral-800 p-5 rounded-md h-[150px] flex flex-col justify-center">
          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">PHONE</div>
          <div className="font-medium text-white text-sm">+234 (555) 123-4567</div>
        </div>

        {/* Operating Hours - Spans exactly under the Verification and Map columns */}
        <div className="lg:col-span-2 bg-[#141414] border border-neutral-800 p-6 rounded-md flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6">
            <Clock size={14} className="text-orange-500" /> OPERATING HOURS
          </div>
          <div className="space-y-5 text-sm">
            <div className="flex justify-between border-b border-neutral-800/50 pb-2">
              <span className="text-neutral-500">Mon-Fri</span>
              <span className="text-white font-medium">9:30 AM - 8:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Sat-Sun</span>
              <span className="text-white font-medium">9:30 AM - 8:30 PM</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);





const MenuTab = () => {
  // 1. Move the products array into React state
  const [products, setProducts] = useState([
    { 
      id: 'PRD-772', 
      line1: 'Signature', 
      line2: 'Wagyu Burger', 
      cat: 'Main dish', 
      price: '₦2,500.00', 
      status: 'AVAILABLE', 
      available: true, 
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=64&h=64' 
    },
    { 
      id: 'PRD-102', 
      line1: 'Truffle', 
      line2: 'Parmesan Fries', 
      cat: 'Side dish', 
      price: '₦1,500.00', 
      status: 'AVAILABLE', 
      available: true, 
      img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=64&h=64' 
    },
    { 
      id: 'PRD-441', 
      line1: 'Spicy Buffalo', 
      line2: 'Wings', 
      cat: 'Protein', 
      price: '₦1,200.00', 
      status: 'UNAVAILABLE', 
      available: false, 
      img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=64&h=64' 
    },
    { 
      id: 'PRD-219', 
      line1: 'Old Fashioned', 
      line2: 'Milkshake', 
      cat: 'Drink', 
      price: '₦1,500.00', 
      status: 'AVAILABLE', 
      available: true, 
      img: 'https://images.unsplash.com/photo-1572490122747-398b37c7e992?auto=format&fit=crop&w=64&h=64' 
    },
  ]);

  // 2. Create a handler function to toggle availability by product ID
  const handleToggleAvailability = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newAvailability = !product.available;
          return {
            ...product,
            available: newAvailability,
            // Also update the text status so the badge matches the toggle
            status: newAvailability ? 'AVAILABLE' : 'UNAVAILABLE', 
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen p-6 font-sans text-white">
      <div className="max-w-[1100px] mx-auto space-y-6">
        
        {/* Top Actions */}
        <div className="flex justify-between items-center">
          <div className="relative w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input 
              type="text" 
              placeholder="Filter products by name or category..." 
              className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-md py-2.5 pl-11 pr-4 text-sm text-neutral-300 placeholder:text-neutral-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#262626] rounded-md text-sm font-semibold hover:bg-neutral-700 transition-colors">
              <ListFilter size={16} className="text-neutral-400" /> 
              Category Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#e58230] hover:bg-[#d97706] text-white rounded-md text-sm font-semibold transition-colors">
              <Plus size={18} /> 
              Add New Product
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1a1a1a] rounded-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 text-[11px] font-bold text-neutral-500 uppercase tracking-wider bg-[#1a1a1a]">
                <th className="py-4 pl-6 pr-4 font-bold">Product</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Price</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold">Availability</th>
                <th className="p-4 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {products.map((item, i) => (
                <tr key={item.id} className="border-b border-neutral-800/80 hover:bg-neutral-800/30 transition-colors">
                  <td className="py-4 pl-6 pr-4 flex items-center gap-4">
                    <img 
                      src={item.img} 
                      alt={item.line1} 
                      className="w-[42px] h-[42px] rounded object-cover border border-neutral-800" 
                    />
                    <div>
                      <div className="font-semibold text-[15px] text-white leading-tight">{item.line1}</div>
                      <div className="font-semibold text-[15px] text-white leading-tight">{item.line2}</div>
                      <div className="text-[11px] text-neutral-500 mt-1 font-medium tracking-wide">ID: {item.id}</div>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-400">{item.cat}</td>
                  <td className="p-4 font-semibold text-[15px] text-white">{item.price}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded uppercase tracking-wider ${
                      item.available 
                        ? 'bg-[#e58230]/10 text-[#e58230]' 
                        : 'bg-[#2a2a2a] text-neutral-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {/* 3. Attach the onClick handler to your toggle container */}
                    <div 
                      onClick={() => handleToggleAvailability(item.id)}
                      className={`w-[42px] h-[22px] rounded-full relative cursor-pointer transition-colors ${
                        item.available ? 'bg-[#e58230]/80' : 'bg-[#2a2a2a]'
                      }`}
                    >
                      <div className={`absolute top-[3px] w-4 h-4 rounded-full transition-all ${
                        item.available ? 'right-[3px] bg-[#1a1a1a]' : 'left-[3px] bg-[#555555]'
                      }`}></div>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-500">
                    <Link to="/vendors/edit-menu">
                      <Edit2
                        size={18}
                        className="cursor-pointer hover:text-white transition-colors"
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Section */}
        <div className="flex justify-between items-center pt-2">
          <div className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase">
            Showing 1-4 of 56 Products
          </div>
          <div className="flex gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] rounded text-neutral-500 hover:bg-neutral-800 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#e58230] text-white font-semibold rounded">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] text-white font-semibold rounded hover:bg-neutral-800 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] text-white font-semibold rounded hover:bg-neutral-800 transition-colors">
              3
            </button>
            <div className="w-8 h-8 flex items-center justify-center text-neutral-500 font-semibold tracking-widest">
              ...
            </div>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] text-white font-semibold rounded hover:bg-neutral-800 transition-colors">
              14
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] rounded text-neutral-500 hover:bg-neutral-800 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};





const OrdersTab = () => {
  const orders = [
    { id: '#ORD-88219', init: 'JD', name: 'John Doe', date: 'Oct 24, 2023', time: '14:22 PM', items: 'Double BBQ × 2, Truffle Fries', total: '₦12,400.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
    { id: '#ORD-88220', init: 'SC', name: 'Sarah Chen', date: 'Oct 24, 2023', time: '14:45 PM', items: 'Classic Cheese × 1, Milkshake', total: '₦8,500.00', status: 'PENDING', sColor: 'text-orange-500', sBg: 'bg-orange-900/30' },
    { id: '#ORD-88221', init: 'MT', name: 'Mike Tunde', date: 'Oct 24, 2023', time: '15:10 PM', items: 'Zinger Tower × 3', total: '₦15,000.00', status: 'ON ROUTE', sColor: 'text-blue-500', sBg: 'bg-blue-900/30' },
    { id: '#ORD-88222', init: 'AL', name: 'Amara Lawson', date: 'Oct 24, 2023', time: '15:32 PM', items: 'Mushroom Swiss, Soda', total: '₦9,200.00', status: 'DELIVERED', sColor: 'text-emerald-500', sBg: 'bg-emerald-900/30' },
    { id: '#ORD-88223', init: 'KO', name: 'Kola Okoro', date: 'Oct 24, 2023', time: '16:05 PM', items: 'Vegan Burger, Sweet Potato', total: '₦10,800.00', status: 'CANCELLED', sColor: 'text-neutral-400', sBg: 'bg-neutral-800/50' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] text-white p-6 space-y-6">
      {/* Top Filters & Actions */}
      <div className="flex justify-between items-center w-full">
        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 text-neutral-500" size={16} />
          <input 
            type="text" 
            placeholder="Search Order ID..." 
            className="w-full bg-[#141414] border border-neutral-800/60 rounded-md py-2 pl-9 pr-4 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-neutral-800/60 text-neutral-300 hover:text-white rounded-md text-sm font-medium transition-colors">
            <Calendar size={14} className="text-neutral-500" />
            Last 7 Days
            <ChevronDown size={14} className="text-neutral-500" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-neutral-800/60 text-neutral-300 hover:text-white rounded-md text-sm font-medium transition-colors">
            <Filter size={14} className="text-neutral-500" /> 
            All Statuses
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1c1c] border border-neutral-800/60 text-white hover:bg-[#252525] rounded-md text-sm font-bold tracking-wide transition-colors">
            <Download size={14} /> 
            EXPORT CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-widest bg-[#141414]/50">
              <th className="py-4 px-6 font-semibold">Order ID</th>
              <th className="py-4 px-4 font-semibold">Customer</th>
              <th className="py-4 px-4 font-semibold">Date / Time</th>
              <th className="py-4 px-4 font-semibold">Items</th>
              <th className="py-4 px-4 font-semibold">Total</th>
              <th className="py-4 px-4 font-semibold">Status</th>
              <th className="py-4 px-6 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((order, i) => (
              <tr key={i} className="border-b border-neutral-800/50 hover:bg-neutral-800/10 transition-colors group">
                <td className="py-4 px-6 font-medium text-neutral-200">{order.id}</td>
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2a2a2a] text-[#e59850] font-bold text-xs rounded flex items-center justify-center">
                    {order.init}
                  </div>
                  <span className="text-neutral-200 font-medium">{order.name}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-neutral-300 mb-0.5">{order.date}</div>
                  <div className="text-[11px] text-neutral-500">{order.time}</div>
                </td>
                <td className="py-4 px-4 text-neutral-400 w-56 leading-snug">{order.items}</td>
                <td className="py-4 px-4 font-medium text-neutral-200">{order.total}</td>
                <td className="py-4 px-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[10px] font-bold tracking-wider uppercase ${order.sColor} ${order.sBg}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                    {order.status}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-[#e59850] text-[11px] font-bold uppercase tracking-wider hover:text-[#f3ad68] flex items-center gap-1.5 justify-end w-full transition-colors">
                    VIEW DETAILS <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center pt-2">
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
          Showing 1 to 5 of 1,248 orders
        </div>
        
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-transparent border border-neutral-800/60 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#e88836] text-black font-semibold text-xs transition-colors">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-transparent border border-neutral-800/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors text-xs font-medium">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-transparent border border-neutral-800/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors text-xs font-medium">
            3
          </button>
          <div className="w-8 h-8 flex items-center justify-center text-neutral-500 text-xs font-medium tracking-widest">
            ...
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-transparent border border-neutral-800/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors text-xs font-medium">
            24
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-transparent border border-neutral-800/60 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};



const ReviewsTab = () => {
  return (
    <div className="flex gap-6 items-start">
      {/* Left Sidebar */}
      <div className="w-72 space-y-6">
        {/* Analytics Card */}
        <div className="bg-[#141414] border border-neutral-800 rounded-md p-5">
          <h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-5">Review Analytics</h3>
          <div className="space-y-3">
            {[
              { star: '5', pct: '78%', w: 'w-[78%]', color: 'bg-[#DC781B]' },
              { star: '4', pct: '15%', w: 'w-[15%]', color: 'bg-[#DC781B]' },
              { star: '3', pct: '4%', w: 'w-[4%]', color: 'bg-[#DC781B]' },
              { star: '2', pct: '2%', w: 'w-[2%]', color: 'bg-[#DC781B]' },
              { star: '1', pct: '1%', w: 'w-[1%]', color: 'bg-[#DC781B]' },
            ].map(row => (
              <div key={row.star} className="flex items-center gap-3 text-sm">
                <span className="w-3 font-medium text-white text-right">{row.star}</span>
                <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${row.color} ${row.w}`}></div>
                </div>
                <span className="w-8 text-xs text-neutral-500 text-right">{row.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Refine Feed Card */}
        <div className="bg-[#141414] border border-neutral-800 rounded-md p-5">
          <h3 className="text-[11px] font-bold text-[#DC781B]-500 uppercase tracking-wider mb-4">Refine Feed</h3>
          <div className="space-y-4">
            <div className="relative border border-neutral-800 bg-[#1c1c1c] rounded-md px-3 py-2 text-sm flex justify-between items-center text-neutral-300">
              Sort by: Newest First <ChevronRight size={14} className="rotate-90"/>
            </div>
            <div className="relative border border-neutral-800 bg-[#1c1c1c] rounded-md px-3 py-2 text-sm flex justify-between items-center text-neutral-300">
              Rating: All Stars <Filter size={14} className="text-neutral-500"/>
            </div>
            <button className="w-full py-2.5 bg-[#DC781B] hover:bg-orange-500 text-white text-xs font-bold rounded-md tracking-wide">
              APPLY FILTERS
            </button>
          </div>
        </div>
      </div>

      {/* Right Content - Reviews List */}
      <div className="flex-1 space-y-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-[#141414] border border-neutral-800 rounded-md p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2a2a2a] text-[#DC781B] font-bold rounded-md flex items-center justify-center">
                  TO
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Tunde Oladapo</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-[#DC781B] text-[#DC781B]"/>)}
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-neutral-500">October 12, 2023</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed ml-13 pl-13">
              The Double Truffle Burger was exceptional. Delivery was surprisingly fast to the main campus gate. Definitely our new go-to for Friday night coding sessions.
            </p>
          </div>
        ))}
        
        <div className="flex justify-end pt-2">
          <button className="px-5 py-2.5 bg-[#1c1c1c] border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-bold rounded-md tracking-wide uppercase">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};



const TransactionsTab = () => {
  return (
    <div className="w-full bg-[#0a0a0a] text-white font-sans p-6">
      <div className="w-full max-w-6xl mx-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-800/80 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              <th className="py-4 px-2 font-semibold">Transaction</th>
              <th className="py-4 px-2 font-semibold">Customer Name</th>
              <th className="py-4 px-2 font-semibold">Status</th>
              <th className="py-4 px-2 font-semibold">Amount</th>
              <th className="py-4 px-2 font-semibold">Type</th>
              <th className="py-4 px-2 font-semibold">Date Joined</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[...Array(7)].map((_, i) => (
              <tr 
                key={i} 
                className="border-b border-neutral-800/50 hover:bg-neutral-800/20 transition-colors"
              >
                <td className="py-4 px-2">
                  <div className="font-bold text-white text-[13px]">Order-3567</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">trf-Order-3567-hjsdikjbruiqnkdnk</div>
                </td>
                <td className="py-4 px-2 text-[13px] font-bold text-white tracking-wide">
                  JOHN DOE
                </td>
                <td className="py-4 px-2">
                  <span className="px-2 py-1 text-[9px] font-bold bg-[#022c16] text-[#10b981] rounded tracking-wider">
                    SUCCESS
                  </span>
                </td>
                <td className="py-4 px-2 text-[13px] font-bold text-white">
                  ₦ 1,000.00
                </td>
                <td className="py-4 px-2 text-[13px] text-white font-medium">
                  Credit
                </td>
                <td className="py-4 px-2 text-neutral-400 text-[11px] font-medium tracking-wide">
                  13:00PM | 02/03/2026
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination label="Showing 1-5 of 132 transactions" />
      </div>
    </div>
  );
};

// Generic Pagination Component
const Pagination = ({ label }) => (
  <div className="flex justify-between items-center text-[11px] font-medium text-neutral-500 py-6 px-2">
    <span>{label}</span>
    <div className="flex items-center gap-1">
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-600 transition-colors">
        <ChevronLeft size={14} />
      </button>
      <button className="w-6 h-6 flex items-center justify-center rounded bg-[#f97316] text-black font-bold">
        1
      </button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400 transition-colors">
        2
      </button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400 transition-colors">
        3
      </button>
      <span className="px-1 text-neutral-600 tracking-widest">...</span>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400 transition-colors">
        27
      </button>
      <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-600 transition-colors">
        <ChevronRight size={14} />
      </button>
    </div>
  </div>
);



export default VendorOverview;