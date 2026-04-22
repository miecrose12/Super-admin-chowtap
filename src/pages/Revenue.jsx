import React, { useState } from 'react';
import { Calendar, Search, ListFilter, ShieldCheck, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const Revenue = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCustomRange, setShowCustomRange] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All Time');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filterOptions = [
    'Today', 'Yesterday', 'This week', 'This month', 
    'Last month', 'This year', 'All time', 'Custom period'
  ];

  const handleFilterSelect = (option) => {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
    setShowCustomRange(option === 'Custom period');
  };

  // Generate full dataset
  const generateTableData = () => {
    const data = [];
    for (let i = 0; i < 132; i++) {
      data.push({
        id: `Order-${3567 + i}`,
        ref: `trf-Order-${3567 + i}-hjsdlkjbruiqnkdnk`,
        customer: ['JOHN DOE', 'JANE SMITH', 'MIKE JOHNSON', 'SARAH WILLIAMS', 'ALEX BROWN'][i % 5],
        status: ['SUCCESS', 'PENDING', 'FAILED', 'SUCCESS', 'SUCCESS'][i % 5],
        amount: `N ${(1000 + i * 500).toLocaleString('en-NG')}.00`,
        type: ['Credit', 'Debit'][i % 2],
        date: `${String((i % 28) + 1).padStart(2, '0')}:${String((i % 60).toString()).padStart(2, '0')}PM | ${String((i % 12) + 1).padStart(2, '0')}/03/2026`
      });
    }
    return data;
  };

  const tableData = generateTableData();
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = tableData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (currentPage < totalPages - 2) pages.push('...');
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F2F2F2] p-6 md:p-10 font-sans selection:bg-[#E96B18]/30">
      
      {/* HEADER & FILTERS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Revenue Management</h1>
        
        <div className="flex items-center gap-3 self-end">
          {showCustomRange && (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2">
              <div className="bg-[#121212] border border-[#222] rounded px-3 py-1.5 text-[12px] text-[#888] w-28">
                03 Mar, 2026
              </div>
              <span className="text-[#444] text-[12px]">To</span>
              <div className="bg-[#121212] border border-[#222] rounded px-3 py-1.5 text-[12px] text-[#444] w-28">
                Select date
              </div>
              <button className="bg-[#E96B18] hover:bg-[#ff7a21] text-white text-[12px] font-bold px-4 py-1.5 rounded transition-all">
                Apply
              </button>
            </div>
          )}

          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-[#121212] border border-[#222] text-[#E0E0E0] text-[12px] px-4 py-2 rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              <Calendar size={14} className="text-[#666]" />
              {selectedFilter}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#121212] border border-[#222] rounded-md shadow-2xl z-50 py-1">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleFilterSelect(option)}
                    className="w-full text-left px-4 py-2 text-[12px] text-[#888] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
        
        {/* Main Card: Revenue */}
        <div className="lg:col-span-2 bg-[#18181A] rounded-lg border border-[#27272A] border-l-[4px] border-l-[#DC781B] relative flex flex-col justify-between h-[280px]">
          {/* Header content */}
          <div className="p-6 md:p-8 flex justify-between z-10 w-full relative">
            <div className="flex flex-col">
              <p className="text-[#A1A1AA] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Total Net Revenue</p>
              <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-none tracking-tight mb-3">N 17,890,090.00</h2>
              <p className="text-[13px] text-[#10B981] font-semibold tracking-wide flex items-center gap-1.5">
                ~ 12.4% <span className="font-medium text-[#10B981]/80">from last month</span>
              </p>
            </div>
            
            {/* Adjusted Total Orders section */}
            <div className="text-right flex flex-col items-end mt-1">
              <div className="pr-4 border-r border-[#3F3F46]/60 mb-2">
                <p className="text-[#71717A] text-[10px] font-bold tracking-[0.15em] uppercase text-right leading-[1.3]">
                  Total<br/>Orders
                </p>
              </div>
              <p className="text-[28px] md:text-[32px] font-bold text-white leading-none">7,132</p>
            </div>
          </div>

          {/* Chart Area with dark background panel */}
          <div className="absolute bottom-5 left-6 right-6 h-[110px] bg-[#222225]/40 rounded-md overflow-hidden z-0">
            <svg viewBox="0 0 1000 110" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E96B18" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E96B18" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,90 C300,90 400,95 600,75 C800,55 900,30 1000,15 L1000,110 L0,110 Z" fill="url(#areaGrad)" />
              <path d="M0,90 C300,90 400,95 600,75 C800,55 900,30 1000,15" fill="none" stroke="#E96B18" strokeWidth="4" />
            </svg>
          </div>
        </div>

        {/* Right Column Stack */}
        <div className="flex flex-col gap-5 h-[280px]">
          {/* Net Profit */}
          <div className="bg-[#18181A] rounded-lg p-6 md:p-7 border border-[#27272A] border-l-[4px] border-l-[#DC781B] relative overflow-hidden flex-1 flex flex-col justify-center">
            {/* Background Icon */}
            <ShieldCheck className="absolute -right-4 -bottom-4 text-[#27272A] w-[110px] h-[110px] opacity-40 pointer-events-none z-0" strokeWidth={1.5} />
            
            {/* Foreground Content */}
            <div className="relative z-10">
              <p className="text-[#DC781B] text-[10px]  tracking-[0.15em] uppercase mb-4">Total Net Profit</p>
              <h2 className="text-[32px] font-bold text-white mb-3 leading-none tracking-tight">N 280,000.00</h2>
              <p className="text-[13px] text-[#10B981] font-semibold tracking-wide flex items-center gap-1.5">
                ~ 12.4% <span className="font-medium text-[#10B981]/80">from last month</span>
              </p>
            </div>
          </div>

          {/* Average Order - Changed border to Right Side */}
          <div className="bg-[#18181A] rounded-lg p-6 md:p-7 border border-[#27272A] border-r-[4px] border-r-[#DC781B] relative overflow-hidden flex-1 flex flex-col justify-center">
            <div className="relative z-10 w-full flex flex-col h-full justify-center">
              <div className="mb-auto mt-2">
                <p className="text-[#A1A1AA] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Average Order Value</p>
                <h2 className="text-[32px] font-bold text-white leading-none tracking-tight">N 2,560.00</h2>
              </div>
              
              <div className="w-full mt-4">
                <p className="text-[11px] mb-2 font-medium tracking-wide">
                  <span className="text-[#71717A]">Target: </span><span className="text-[#A1A1AA]">N 3,000.00</span>
                </p>
                <div className="w-full bg-[#3F3F46]/40 h-[3px] rounded-full overflow-hidden">
                  <div className="bg-[#DC781B] w-[85%] h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* TABLE SECTION */}
      <div className="flex justify-between items-center mb-5">
        <div className="relative w-80">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
          <input 
            type="text" 
            placeholder="Search by reference..." 
            className="w-full bg-[#0d0d0d] border border-[#222] rounded-md py-2.5 pl-10 pr-4 text-[13px] text-[#E0E0E0] placeholder-[#444] focus:outline-none focus:border-[#444] transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#121212] border border-[#222] text-[#E0E0E0] text-[12px] font-bold px-4 py-2.5 rounded hover:bg-[#1a1a1a]">
          <ListFilter size={14} className="text-[#888]" />
          Status
        </button>
      </div>

      <div className="w-full bg-[#0A0A0A] border border-[#222]/50 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#222] bg-[#0d0d0d]">
              <th className="px-6 py-5 text-[10px] font-bold text-[#C7C7C7] uppercase tracking-[0.2em]">Transaction</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#C7C7C7] uppercase tracking-[0.2em]">Customer Name</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#C7C7C7] uppercase tracking-[0.2em]">Status</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#C7C7C7] uppercase tracking-[0.2em]">Amount</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#C7C7C7] uppercase tracking-[0.2em]">Type</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#C7C7C7] uppercase tracking-[0.2em]">Date Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#181818]">
            {currentData.map((item, i) => (
              <tr key={i} className="hover:bg-[#111] transition-colors group">
                <td className="px-6 py-5">
                  <div className="text-[13px] font-bold text-[#eee] mb-0.5">{item.id}</div>
                  <div className="text-[10px] text-[#71717A] font-mono">{item.ref}</div>
                </td>
                <td className="px-6 py-5 text-[13px] font-bold text-[#eee]">{item.customer}</td>
                <td className="px-6 py-5">
                  <span className={`text-[9px] font-black px-2 py-1 rounded border tracking-tighter ${
                    item.status === 'SUCCESS' 
                      ? 'bg-[#032512] text-[#10B981] border-[#063F1E]'
                      : item.status === 'PENDING'
                      ? 'bg-[#332200] text-[#DC781B] border-[#663d00]'
                      : 'bg-[#3d0b0b] text-[#f87171] border-[#7a1a1a]'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-[13px] font-bold text-white">{item.amount}</td>
                <td className="px-6 py-5 text-[13px] text-[#888]">{item.type}</td>
                <td className="px-6 py-5 text-[12px] text-[#555] font-medium">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="flex items-center justify-between px-6 py-5 border-t border-[#222] bg-[#0d0d0d]">
          <p className="text-[11px] text-[#444] font-medium tracking-tight">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, tableData.length)} of {tableData.length} transactions
          </p>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 text-[#444] hover:text-[#888] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            
            {getPageNumbers().map((page, idx) => (
              page === '...' ? (
                <span key={`dots-${idx}`} className="text-[#333] text-[10px]">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-6 h-6 flex items-center justify-center text-[11px] font-bold rounded transition-all ${
                    currentPage === page
                      ? 'bg-[#E96B18] text-white'
                      : 'text-[#666] hover:text-white hover:bg-[#1a1a1a]'
                  }`}
                >
                  {page}
                </button>
              )
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 text-[#666] hover:text-[#888] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;