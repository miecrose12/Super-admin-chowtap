import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { generatePaginationButtons, ITEMS_PER_PAGE } from '../../../utils/RiderDetailsUtils';

const PaginationControls = ({ 
  currentPage, 
  totalItems, 
  onPageChange, 
  itemsPerPage = ITEMS_PER_PAGE 
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
      <p>
        Showing <span className="text-white font-medium">{startItem}-{endItem}</span> of {totalItems} items
      </p>
      
      <div className="flex gap-1">
        {/* Previous Button */}
        <button 
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A] disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Page Buttons */}
        {generatePaginationButtons(currentPage, totalPages).map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`w-8 h-8 flex items-center justify-center rounded transition ${
              page === currentPage
                ? 'bg-[#FF8A00] text-black font-bold'
                : page === '...'
                ? 'bg-transparent text-gray-400 cursor-default'
                : 'bg-[#1A1A1A] hover:bg-[#2A2A2A]'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button 
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A] disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;