import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TransactionModal from './TransactionModal';
import { 
  ALL_VOUCHERS_DATA, 
  ITEMS_PER_PAGE, 
  TOTAL_VOUCHERS, 
  TOTAL_VOUCHER_PAGES, 
  PERIODS, 
  getStatusStyle, 
  getStatusDot, 
  generatePageNumbers 
} from '../../../utils/Editcustomer';

// --- ICONS FOR MAIN VIEW ---
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

// --- MAIN TAB COMPONENT ---
const VoucherHistoryTab = () => {
  const [voucherHistoryPage, setVoucherHistoryPage] = useState(1);
  const [voucherDatePeriod, setVoucherDatePeriod] = useState('All time');
  const [isVoucherDropdownOpen, setIsVoucherDropdownOpen] = useState(false);
  const [voucherStartDate, setVoucherStartDate] = useState(null);
  const [voucherEndDate, setVoucherEndDate] = useState(null);
  const voucherDropdownRef = useRef(null);

  // Modal State
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (voucherDropdownRef.current && !voucherDropdownRef.current.contains(event.target)) {
        setIsVoucherDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const paginatedVouchers = ALL_VOUCHERS_DATA.slice(
    (voucherHistoryPage - 1) * ITEMS_PER_PAGE,
    voucherHistoryPage * ITEMS_PER_PAGE
  );

  const handleRowClick = (voucher) => {
    setSelectedTransaction(voucher);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 relative z-40">
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="h-4 w-4 text-neutral-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-[#2a2a2a] rounded-md leading-5 bg-[#0e0e0e] text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-[#e86b35] sm:text-sm transition-colors"
            placeholder="Search reference..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {voucherDatePeriod === 'Custom period' && (
            <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200 w-full md:w-auto">
              <DatePicker
                selected={voucherStartDate}
                onChange={(date) => setVoucherStartDate(date)}
                selectsStart
                startDate={voucherStartDate}
                endDate={voucherEndDate}
                dateFormat="dd MMM, yyyy"
                placeholderText="Start Date"
                className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
              />
              <span className="text-[#666] text-[12px]">To</span>
              <DatePicker
                selected={voucherEndDate}
                onChange={(date) => setVoucherEndDate(date)}
                selectsEnd
                startDate={voucherStartDate}
                endDate={voucherEndDate}
                minDate={voucherStartDate}
                dateFormat="dd MMM, yyyy"
                placeholderText="End Date"
                className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
              />
              <button className="bg-[#e86b35] hover:bg-[#c96e21] text-[#2b1707] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                Apply
              </button>
            </div>
          )}

          <div className="relative w-full md:w-auto" ref={voucherDropdownRef}>
            <button 
              onClick={() => setIsVoucherDropdownOpen(!isVoucherDropdownOpen)}
              className="w-full md:w-auto flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[150px]"
            >
              <Icon name="calendar" className="w-4 h-4 text-[#888]" />
              {voucherDatePeriod}
              <Icon name="chevron-down" className="w-4 h-4" />
            </button>

            {isVoucherDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                {PERIODS.map((period) => (
                  <button
                    key={period}
                    onClick={() => { 
                      setVoucherDatePeriod(period); 
                      setIsVoucherDropdownOpen(false);
                      if (period !== 'Custom period') {
                        setVoucherStartDate(null);
                        setVoucherEndDate(null);
                      }
                    }}
                    className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                      voucherDatePeriod === period ? 'text-[#e86b35] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
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
      <div className="bg-[#0e0e0e] rounded-xl border border-[#222] overflow-x-auto">
        <table className="min-w-full divide-y divide-[#222]">
          <thead className="bg-[#0e0e0e]">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Transaction Type</th>
              <th scope="col" className="px-6 py-4 text-right text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Date & Time</th>
              <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Transaction Name</th>
              <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="px-6 py-4 text-right text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Reference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#222] bg-[#0d0d0d]">
            {paginatedVouchers.map((voucher, idx) => (
              <tr 
                key={idx} 
                onClick={() => handleRowClick(voucher)}
                className="bg-[#000] transition-colors hover:bg-[#111] cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">{voucher.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">{voucher.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">{voucher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-white">{voucher.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className={`inline-flex items-center justify-end gap-1.5 text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(voucher.status)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(voucher.status)}`}></span>
                    {voucher.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">{voucher.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-neutral-400">
          Showing <span className="font-bold text-white">{(voucherHistoryPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(voucherHistoryPage * ITEMS_PER_PAGE, TOTAL_VOUCHERS)}</span> of <span className="font-bold text-white">{TOTAL_VOUCHERS}</span> orders
        </span>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setVoucherHistoryPage(prev => Math.max(1, prev - 1))}
            disabled={voucherHistoryPage === 1}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              voucherHistoryPage === 1
                ? 'bg-[#0a0a0a] text-neutral-700 border border-[#333] cursor-not-allowed'
                : 'bg-[#1a1a1a] text-neutral-500 border border-[#333] hover:bg-[#222]'
            }`}
          >
            &lt;
          </button>

          {generatePageNumbers(voucherHistoryPage, TOTAL_VOUCHER_PAGES).map((page, idx) => (
            page === '...' ? (
              <span key={`ellipsis-${idx}`} className="w-8 h-8 flex items-center justify-center text-neutral-500 text-xs">...</span>
            ) : (
              <button
                key={page}
                onClick={() => setVoucherHistoryPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-xs font-medium ${
                  voucherHistoryPage === page
                    ? 'bg-[#e86b35] text-black font-bold'
                    : 'bg-[#1a1a1a] text-neutral-400 border border-[#333] hover:bg-[#222]'
                }`}
              >
                {page}
              </button>
            )
          ))}

          <button 
            onClick={() => setVoucherHistoryPage(prev => Math.min(TOTAL_VOUCHER_PAGES, prev + 1))}
            disabled={voucherHistoryPage === TOTAL_VOUCHER_PAGES}
            className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
              voucherHistoryPage === TOTAL_VOUCHER_PAGES
                ? 'bg-[#0a0a0a] text-neutral-700 border border-[#333] cursor-not-allowed'
                : 'bg-[#1a1a1a] text-neutral-500 border border-[#333] hover:bg-[#222]'
            }`}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Render Modal */}
      <TransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        transaction={selectedTransaction} 
      />
    </div>
  );
};

export default VoucherHistoryTab;