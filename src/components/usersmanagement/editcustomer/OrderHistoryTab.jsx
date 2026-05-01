import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ALL_ORDERS_DATA, ITEMS_PER_PAGE, TOTAL_ORDERS, TOTAL_ORDER_PAGES, PERIODS, getStatusStyle, getStatusDot, generatePageNumbers } from '../../../utils/Editcustomer';

const Icon = ({ name, className }) => {
  switch (name) {
    case 'search':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      );
    case 'filter':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      );
    default:
      return null;
  }
};

const OrderHistoryTab = () => {
  const [orderHistoryPage, setOrderHistoryPage] = useState(1);
  const [orderDatePeriod, setOrderDatePeriod] = useState('All time');
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [orderStartDate, setOrderStartDate] = useState(null);
  const [orderEndDate, setOrderEndDate] = useState(null);
  const orderDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (orderDropdownRef.current && !orderDropdownRef.current.contains(event.target)) {
        setIsOrderDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const paginatedOrders = ALL_ORDERS_DATA.slice(
    (orderHistoryPage - 1) * ITEMS_PER_PAGE,
    orderHistoryPage * ITEMS_PER_PAGE
  );

  const renderStars = (count) => (
    <div className="flex text-[#FFB782]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'fill-current' : 'text-neutral-600 fill-current'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col text-sm">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 relative z-40">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="search" className="h-4 w-4 text-neutral-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 bg-black border border-[#1a1a1a] rounded-md leading-5 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-[#e87b35] sm:text-sm transition-colors"
              placeholder="Search Order ID or Vendor..."
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {orderDatePeriod === 'Custom period' && (
            <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200 w-full md:w-auto">
              <DatePicker
                selected={orderStartDate}
                onChange={(date) => setOrderStartDate(date)}
                selectsStart
                startDate={orderStartDate}
                endDate={orderEndDate}
                dateFormat="dd MMM, yyyy"
                placeholderText="Start Date"
                className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
              />
              <span className="text-[#666] text-[12px]">To</span>
              <DatePicker
                selected={orderEndDate}
                onChange={(date) => setOrderEndDate(date)}
                selectsEnd
                startDate={orderStartDate}
                endDate={orderEndDate}
                minDate={orderStartDate}
                dateFormat="dd MMM, yyyy"
                placeholderText="End Date"
                className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
              />
              <button className="bg-[#e86b35] hover:bg-[#c96e21] text-[#2b1707] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                Apply
              </button>
            </div>
          )}

          <div className="relative w-full md:w-auto" ref={orderDropdownRef}>
            <button 
              onClick={() => setIsOrderDropdownOpen(!isOrderDropdownOpen)}
              className="w-full md:w-auto flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[150px]"
            >
              <Icon name="calendar" className="w-4 h-4 text-[#888]" />
              {orderDatePeriod}
              <Icon name="chevron-down" className="w-4 h-4" />
            </button>

            {isOrderDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                {PERIODS.map((period) => (
                  <button
                    key={period}
                    onClick={() => { 
                      setOrderDatePeriod(period); 
                      setIsOrderDropdownOpen(false);
                      if (period !== 'Custom period') {
                        setOrderStartDate(null);
                        setOrderEndDate(null);
                      }
                    }}
                    className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                      orderDatePeriod === period ? 'text-[#e86b35] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="hidden md:flex items-center gap-2 px-3 py-2.5 border border-[#262626] rounded-[4px] bg-[#161616] text-neutral-400 text-[12px] hover:bg-[#1f1f1f] transition-colors whitespace-nowrap">
            <Icon name="filter" className="w-4 h-4" />
            Status: All
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#050505] rounded-lg overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Order ID</th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Date</th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Vendor</th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Total</th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Status</th>
              <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Review</th>
            </tr>
          </thead>
          <tbody className="bg-black">
            {paginatedOrders.map((order, idx) => (
              <tr key={idx} className="hover:bg-[#0a0a0a] transition-colors group border-b border-[#1a1a1a]">
                <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">{order.id}</td>
                <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">{order.date}</td>
                <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">{order.vendor}</td>
                <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">{order.total}</td>
                <td className="px-6 py-5 whitespace-nowrap">
                  {['DELIVERED', 'REFUNDED', 'PROCESSING'].includes(order.status) ? (
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(order.status)}`}></span>
                      {order.status}
                    </span>
                  ) : (
                    <span>{order.status}</span>
                  )}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  {order.rating > 0 ? (
                    <div className="flex items-center gap-3">
                      {renderStars(order.rating)}
                      <span className="text-[11px] text-neutral-500 italic">{order.review}</span>
                    </div>
                  ) : (
                    <span className="text-[11px] text-[#333] italic">{order.review}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8">
        <span className="text-xs text-neutral-500 tracking-wide">
          Showing <span className="font-semibold text-neutral-300">{(orderHistoryPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(orderHistoryPage * ITEMS_PER_PAGE, TOTAL_ORDERS)}</span> of <span className="font-semibold text-neutral-300">{TOTAL_ORDERS}</span> orders
        </span>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => setOrderHistoryPage(prev => Math.max(1, prev - 1))}
            disabled={orderHistoryPage === 1}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              orderHistoryPage === 1
                ? 'bg-[#0a0a0a] text-neutral-700 border border-[#1a1a1a] cursor-not-allowed'
                : 'bg-[#111] text-neutral-500 border border-[#1a1a1a] hover:bg-[#1a1a1a]'
            }`}
          >
            &lt;
          </button>

          {generatePageNumbers(orderHistoryPage, TOTAL_ORDER_PAGES).map((page, idx) => (
            page === '...' ? (
              <span key={`ellipsis-${idx}`} className="w-8 h-8 flex items-center justify-center text-neutral-600 text-xs tracking-widest">...</span>
            ) : (
              <button
                key={page}
                onClick={() => setOrderHistoryPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-xs font-medium ${
                  orderHistoryPage === page
                    ? 'bg-[#e87b35] text-black font-bold'
                    : 'bg-[#111] text-neutral-400 border border-[#1a1a1a] hover:bg-[#1a1a1a]'
                }`}
              >
                {page}
              </button>
            )
          ))}

          <button 
            onClick={() => setOrderHistoryPage(prev => Math.min(TOTAL_ORDER_PAGES, prev + 1))}
            disabled={orderHistoryPage === TOTAL_ORDER_PAGES}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              orderHistoryPage === TOTAL_ORDER_PAGES
                ? 'bg-[#0a0a0a] text-neutral-700 border border-[#1a1a1a] cursor-not-allowed'
                : 'bg-[#111] text-neutral-500 border border-[#1a1a1a] hover:bg-[#1a1a1a]'
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryTab;