import React, { useMemo } from 'react';
import PaginationButton from './Paginationbutton';


export default function PaginationControl({
  currentPage,
  totalPages,
  totalItems,
  indexOfFirstItem,
  indexOfLastItem,
  onNextPage,
  onPrevPage,
  onPageClick
}) {
  // Generate pagination group with ellipses
  const paginationGroup = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage, '...', totalPages];
  }, [currentPage, totalPages]);

  return (
    <div className="px-6 py-5 flex items-center justify-between text-[12px]">
      {/* Info Text */}
      <p className="text-gray-500">
        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems} users
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5">
        {/* Prev Button */}
        <PaginationButton
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="text-lg pb-0.5"
        >
          &lt;
        </PaginationButton>

        {/* Page Numbers */}
        {paginationGroup.map((item, index) => (
          item === '...' ? (
            <span 
              key={`dots-${index}`} 
              className="w-7 h-7 flex items-center justify-center text-gray-600 tracking-widest"
            >
              ...
            </span>
          ) : (
            <PaginationButton
              key={item}
              onClick={() => onPageClick(item)}
              isActive={currentPage === item}
              disabled={false}
            >
              {item}
            </PaginationButton>
          )
        ))}

        {/* Next Button */}
        <PaginationButton
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="text-lg pb-0.5"
        >
          &gt;
        </PaginationButton>
      </div>
    </div>
  );
}