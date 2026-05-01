import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPaginationData, getPageNumbers } from '../../utils/specialorders';

export const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const { totalPages, startItem, endItem } = getPaginationData(totalItems, itemsPerPage, currentPage);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

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
        
        {pageNumbers.map((pageNum, idx) => (
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