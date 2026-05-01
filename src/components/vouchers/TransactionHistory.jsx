import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TRANSACTIONS_DATA = [
  { type: 'Debit', date: 'Oct 24, 2023 • 18:42', name: '#Order-5674 - Voucher', amount: 'N2,580.00', status: 'SUCCESS', ref: 'trf-Order-5768-785788949' },
  { type: 'Credit', date: 'Oct 24, 2023 • 18:42', name: 'VoucherPurchase', amount: 'N2,580.00', status: 'SUCCESS', ref: 'trf-Order-5768-785788949' },
  { type: 'Debit', date: 'Oct 20, 2023 • 20:10', name: 'Gift Received', amount: 'N2,580.00', status: 'FAILED', ref: 'trf-Order-5768-785788949' },
  { type: 'Credit', date: 'Oct 18, 2023 • 19:15', name: 'Student', amount: 'N2,580.00', status: 'PENDING', ref: 'trf-Order-5768-785788949' },
  { type: 'Credit', date: 'Oct 18, 2023 • 19:15', name: 'Student', amount: 'N2,580.00', status: 'PENDING', ref: 'trf-Order-5768-785788949' },
];

const getStatusStyles = (status) => {
  const styles = {
    SUCCESS: { bg: 'bg-[#0a2918]', text: 'text-[#2ebd59]', dot: 'bg-[#2ebd59]' },
    FAILED: { bg: 'bg-[#2b1111]', text: 'text-[#e04343]', dot: 'bg-[#e04343]' },
    PENDING: { bg: 'bg-[#291e0a]', text: 'text-[#d99830]', dot: 'bg-[#d99830]' },
  };
  return styles[status] || styles.PENDING;
};

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = useMemo(() => {
    return TRANSACTIONS_DATA.filter(t => 
      t.ref.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="bg-[#0f0f0f] pt-4">
      {/* Transaction History Section */}
      <div className="mb-4">
        <h2 className="text-[#e07a3e] text-sm font-bold tracking-wider uppercase mb-2 inline-block border-b-2 border-[#e07a3e] pb-2">
          Transaction History
        </h2>
        <div className="w-full h-px bg-gray-800 -mt-[2px]"></div>
      </div>

      {/* Table Filters */}
      <div className="flex justify-between items-center mb-6 mt-6">
        <div className="relative w-80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute inset-y-0 left-0 pl-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search reference..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161616] border-none text-sm text-white pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 placeholder-gray-500"
          />
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1c1c] text-xs font-medium text-gray-400 rounded-md hover:bg-[#252525]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Date Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1c1c] text-xs font-medium text-gray-400 rounded-md hover:bg-[#252525]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Status: All
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-800 bg-[#0f0f0f]">
              <th className="py-4 px-4 font-semibold">Transaction<br/>Type</th>
              <th className="py-4 px-4 font-semibold">Date & Time</th>
              <th className="py-4 px-4 font-semibold">Transaction Name</th>
              <th className="py-4 px-4 font-semibold">Amount</th>
              <th className="py-4 px-4 font-semibold">Status</th>
              <th className="py-4 px-4 font-semibold">Reference</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedTransactions.map((row, i) => {
              const statusStyle = getStatusStyles(row.status);
              return (
                <tr key={i} className="border-b border-[#181818] hover:bg-[#141414] transition-colors">
                  <td className="py-5 px-4 font-medium">{row.type}</td>
                  <td className="py-5 px-4 text-gray-400">{row.date}</td>
                  <td className="py-5 px-4">{row.name}</td>
                  <td className="py-5 px-4 font-medium">{row.amount}</td>
                  <td className="py-5 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${statusStyle.bg} ${statusStyle.text}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></div>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-gray-400 text-xs">{row.ref}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <div>
          Showing <span className="font-bold text-white">1-5</span> of <span className="font-bold text-white">142</span> transactions
        </div>
        <div className="flex items-center gap-1">
          <button className="h-8 w-8 flex items-center justify-center rounded bg-[#1c1c1c] hover:bg-[#252525]">&lt;</button>
          <button className="h-8 w-8 flex items-center justify-center rounded bg-[#e07a3e] text-white font-medium">1</button>
          <button className="h-8 w-8 flex items-center justify-center rounded bg-[#1c1c1c] hover:bg-[#252525]">2</button>
          <button className="h-8 w-8 flex items-center justify-center rounded bg-[#1c1c1c] hover:bg-[#252525]">3</button>
          <span className="px-1 text-gray-500">...</span>
          <button className="h-8 w-8 flex items-center justify-center rounded bg-[#1c1c1c] hover:bg-[#252525]">29</button>
          <button className="h-8 w-8 flex items-center justify-center rounded bg-[#1c1c1c] hover:bg-[#252525]">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;