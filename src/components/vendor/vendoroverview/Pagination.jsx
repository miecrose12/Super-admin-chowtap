import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPageNumbers, handlePageChange } from '../../../utils/helpers';

const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems, variant = 'default' }) => {
  const startIdx = (currentPage - 1) * itemsPerPage;

  return (
    <div className={`flex justify-between items-center ${variant === 'compact' ? 'text-[10px]' : 'text-sm'} font-medium`}>
      <div className={`${variant === 'compact' ? 'text-neutral-500' : 'text-neutral-500'}`}>
        Showing {startIdx + 1}-{Math.min(startIdx + itemsPerPage, totalItems)} of {totalItems} {itemsPerPage === 7 ? 'transactions' : itemsPerPage === 4 ? 'products' : 'orders'}
      </div>
      
      <div className="flex items-center gap-1">
        <button 
          onClick={() => handlePageChange(currentPage - 1, totalPages, onPageChange)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            variant === 'compact' 
              ? 'hover:bg-neutral-800 text-neutral-600' 
              : 'bg-[#1a1a1a] rounded text-neutral-500 hover:bg-neutral-800'
          }`}
        >
          <ChevronLeft size={14} />
        </button>
        
        {getPageNumbers(currentPage, totalPages).map((page, idx) => (
          page === '...' ? (
            <div key={`dots-${idx}`} className="w-8 h-8 flex items-center justify-center text-neutral-500 text-xs font-semibold tracking-widest">
              ...
            </div>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page, totalPages, onPageChange)}
              className={`w-8 h-8 flex items-center justify-center rounded text-xs font-semibold transition-colors ${
                currentPage === page
                  ? variant === 'compact'
                    ? 'bg-[#f97316] text-black'
                    : 'bg-[#e88836] text-black'
                  : variant === 'compact'
                    ? 'hover:bg-neutral-800 text-neutral-400'
                    : 'bg-[#1a1a1a] text-white hover:bg-neutral-800'
              }`}
            >
              {page}
            </button>
          )
        ))}
        
        <button 
          onClick={() => handlePageChange(currentPage + 1, totalPages, onPageChange)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            variant === 'compact' 
              ? 'hover:bg-neutral-800 text-neutral-600' 
              : 'bg-[#1a1a1a] rounded text-neutral-500 hover:bg-neutral-800'
          }`}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;