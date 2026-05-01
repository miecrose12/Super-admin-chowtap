import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPaginationPageNumbers } from '../../utils/tableDatagenerator';

const Pagination = ({ currentPage, totalPages, tableDataLength, itemsPerPage, onPageChange }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageNumbers = getPaginationPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-between px-6 py-5 border-t border-[#222] bg-[#0d0d0d]">
      <p className="text-[11px] text-[#444] font-medium tracking-tight">
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, tableDataLength)} of {tableDataLength} transactions
      </p>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="p-1 text-[#444] hover:text-[#888] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        
        {pageNumbers.map((page, idx) => (
          page === '...' ? (
            <span key={`dots-${idx}`} className="text-[#333] text-[10px]">...</span>
          ) : (
            <button 
              key={page} 
              onClick={() => onPageChange(page)} 
              className={`w-6 h-6 flex items-center justify-center text-[11px] font-bold rounded transition-all ${
                currentPage === page ? 'bg-[#E96B18] text-white' : 'text-[#666] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {page}
            </button>
          )
        ))}
        
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className="p-1 text-[#666] hover:text-[#888] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;