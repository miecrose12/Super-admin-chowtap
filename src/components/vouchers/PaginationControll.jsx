import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationControl = ({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex justify-between items-center py-6 px-4 border-t border-[#1a1a1a] mt-4">
      <div className="text-[11px] text-gray-500 uppercase font-semibold tracking-wider">
        Showing {startItem} to {endItem} of {totalItems} items
      </div>
      <div className="flex gap-1 items-center">
        <button 
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={14} />
        </button>

        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-7 h-7 flex items-center justify-center rounded text-xs font-semibold transition-colors ${
                currentPage === pageNum
                  ? 'bg-[#DC781B] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="text-gray-600">...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white text-xs font-semibold"
            >
              {totalPages}
            </button>
          </>
        )}

        <button 
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default PaginationControl;