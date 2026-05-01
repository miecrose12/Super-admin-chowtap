import React from 'react';
import { getPaginationGroup, calculatePaginationValues } from '../../utils/Vendors';

export default function VendorPagination({ currentPage, onPageChange, totalItems, itemsPerPage, indexOfFirstItem }) {
  const { totalPages, indexOfLastItem } = calculatePaginationValues(totalItems, currentPage, itemsPerPage);

  const paginationGroup = getPaginationGroup(currentPage, totalPages);

  return (
    <div className="flex justify-between items-center py-6 px-2">
      <p className="text-[12px] text-gray-500 font-medium">
        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems} vendors
      </p>
      
      <div className="flex items-center space-x-1">
        {/* Prev Button */}
        <button 
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`w-8 h-8 flex items-center justify-center transition-colors ${
            currentPage === 1 ? 'text-gray-800 cursor-not-allowed' : 'text-gray-600 hover:text-white'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Page Numbers */}
        {paginationGroup.map((page, index) => (
          page === '...' ? (
            <span key={`dots-${index}`} className="text-gray-600 px-1 text-xs tracking-widest">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-7 h-7 flex items-center justify-center font-bold rounded-[4px] text-xs transition-colors ${
                currentPage === page 
                  ? 'bg-[#F28C28] text-black' 
                  : 'text-gray-400 hover:bg-[#1A1A1A]'
              }`}
            >
              {page}
            </button>
          )
        ))}
        
        {/* Next Button */}
        <button 
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`w-8 h-8 flex items-center justify-center transition-colors ${
            currentPage === totalPages ? 'text-gray-800 cursor-not-allowed' : 'text-gray-500 hover:text-white'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}