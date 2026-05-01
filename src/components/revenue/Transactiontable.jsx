import React from 'react';
import { Search, ListFilter } from 'lucide-react';
import TableRow from './Tablerow';
import Pagination from './Pagination';

const TransactionTable = ({ currentData, currentPage, totalPages, tableDataLength, itemsPerPage, onPageChange }) => {
  return (
    <div className="w-full">
      {/* Top Bar: Search and Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80"> {/* Fixed width instead of stretching */}
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555]" />
          <input 
            type="text" 
            placeholder="Search by reference..." 
            className="w-full bg-[#050505] border border-transparent rounded-md py-2.5 pl-11 pr-4 text-[13px] text-[#E0E0E0] placeholder-[#555] focus:outline-none focus:border-[#333] transition-all" 
          />
        </div>
        <button className="flex items-center gap-2 bg-[#111111] border border-transparent text-[#E0E0E0] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#1a1a1a] transition-all whitespace-nowrap">
          <ListFilter size={16} className="text-[#888]" />
          Status
        </button>
      </div>
      
      {/* Table Container */}
      <div className="w-full bg-[#0A0A0A] border border-[#222]/50 rounded-lg overflow-hidden relative z-10">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#222] bg-[#0A0A0A]">
              <th className="px-6 py-5 text-[10px] font-bold text-[#888888] uppercase tracking-[0.2em]">Transaction</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#888888] uppercase tracking-[0.2em]">Customer Name</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#888888] uppercase tracking-[0.2em]">Status</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#888888] uppercase tracking-[0.2em]">Amount</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#888888] uppercase tracking-[0.2em]">Type</th>
              <th className="px-6 py-5 text-[10px] font-bold text-[#888888] uppercase tracking-[0.2em]">Date Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#181818]">
            {currentData.map((item, i) => (
              <TableRow key={i} item={item} />
            ))}
          </tbody>
        </table>

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          tableDataLength={tableDataLength}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default TransactionTable;