import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

export default function RidersPagination({
  currentPage,
  totalPages,
  filteredDataLength,
  startIndex,
  endIndex,
  handlePageChange,
}) {
  return (
    <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
      <div>
        Showing {filteredDataLength > 0 ? startIndex + 1 : 0}-
        {Math.min(endIndex, filteredDataLength)} of {filteredDataLength} riders
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 hover:text-white transition-colors disabled:opacity-20"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) < 2)
            .map((p, i, arr) => (
              <React.Fragment key={p}>
                {i > 0 && p - arr[i - 1] > 1 && <span className="px-1">...</span>}
                <button
                  onClick={() => handlePageChange(p)}
                  className={`w-8 h-8 rounded text-xs transition-colors ${
                    currentPage === p ? 'bg-[#f37c22] text-white' : 'hover:bg-[#1A1A1A]'
                  }`}
                >
                  {p}
                </button>
              </React.Fragment>
            ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 hover:text-white transition-colors disabled:opacity-20"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}