import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Generate 1,284 mock transactions
const allTransactionsData = Array.from({ length: 1284 }, (_, i) => ({
  id: i,
  amount: "12,450.00",
  vendor: "Gourmet Burger Co.",
  refId: `REF-${923840 + i}-B`,
  orderId: `ORD-${String(i + 1).padStart(5, '0')}`,
  date: "Oct 24, 2023 • 14:22",
  status: "SUCCESS"
}));

const Transactions = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPeriod, setSelectedPeriod] = useState('All time');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date('2026-03-03'));
  const [endDate, setEndDate] = useState(null);
  const dropdownRef = useRef(null);

  const itemsPerPage = 12;
  const periods = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time', 'Custom period'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Pagination Logic
  const totalItems = allTransactionsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = allTransactionsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages];
    if (currentPage >= totalPages - 2) return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <>
      <style>{`
        .react-datepicker {
          background-color: #161616 !important;
          border-color: #262626 !important;
          font-family: inherit !important;
          color: #d4d4d4 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }
        .react-datepicker__header {
          background-color: #111111 !important;
          border-bottom-color: #262626 !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header {
          color: #f5f5f5 !important;
        }
        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          color: #a0a0a0 !important;
        }
        .react-datepicker__day:hover, .react-datepicker__month-text:hover {
          background-color: #222 !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
          background-color: #DEAA79 !important;
          color: #0E0E0E !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(222, 170, 121, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#0E0E0E] text-gray-300 p-8 font-sans">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold text-white">Transactions</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Date Range Selector */}
            <div className="flex flex-wrap items-center gap-3 relative z-40">
              {selectedPeriod === 'Custom period' && (
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
                  <button className="bg-[#DC781B] hover:bg-[#d4a070] text-[#0E0E0E] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                    Apply
                  </button>
                </div>
              )}

              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[140px]"
                >
                  {selectedPeriod}
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => { setSelectedPeriod(period); setIsDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                          selectedPeriod === period ? 'text-[#DEAA79] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Search by reference..." 
                className="bg-[#161616] border border-transparent focus:border-[#2A2A2A] focus:outline-none focus:ring-0 rounded-md py-2 pl-9 pr-4 text-sm text-[#52525B] placeholder-[#52525B] w-[240px]"
              />
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-transparent overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1C1C1C] text-xs text-gray-500 uppercase tracking-wider font-semibold">
                <th className="px-6 py-4 rounded-tl-md">Amount</th>
                <th className="px-6 py-4">Vendor Name</th>
                <th className="px-6 py-4">Reference ID</th>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4 rounded-tr-md">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C1C1C]">
              {currentTransactions.map((tx) => (
                <tr 
                  key={tx.id} 
                  onClick={() => navigate('/transactions/view-transactions')}
                  className="hover:bg-[#161616] transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[#FFB782] font-medium">₦ {tx.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#E7E5E5] text-sm font-medium">
                    {tx.vendor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#ACABAA] text-sm">
                    {tx.refId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#ACABAA] text-sm">
                    {tx.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#ACABAA] text-sm">
                    {tx.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold tracking-wider bg-[#0A2E1F] text-[#29C27F] uppercase">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <div>
            Showing <span className="text-white font-medium">{startIndex + 1}-{Math.min(endIndex, totalItems)}</span> of <span className="text-white font-medium">{totalItems.toLocaleString()}</span> results
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 hover:text-white transition-colors disabled:opacity-30 disabled:hover:text-gray-500 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            
            {getPageNumbers().map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis-${index}`} className="w-8 h-8 flex items-center justify-center">
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                    currentPage === page 
                      ? 'bg-[#DEAA79] text-[#0E0E0E] font-semibold' 
                      : 'hover:bg-[#1C1C1C] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 hover:text-white transition-colors disabled:opacity-30 disabled:hover:text-gray-500 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Transactions;