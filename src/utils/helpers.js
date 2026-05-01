export const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
  }
  return pages;
};

export const handlePageChange = (page, totalPages, setCurrentPage) => {
  setCurrentPage(Math.max(1, Math.min(page, totalPages)));
};

export const getStatusStyles = (status) => {
  const statusMap = {
    DELIVERED: { color: 'text-emerald-500', bg: 'bg-emerald-900/30' },
    PENDING: { color: 'text-orange-500', bg: 'bg-orange-900/30' },
    'ON ROUTE': { color: 'text-blue-500', bg: 'bg-blue-900/30' },
    CANCELLED: { color: 'text-neutral-400', bg: 'bg-neutral-800/50' },
    SUCCESS: { color: 'text-emerald-500', bg: 'bg-[#022c16]' },
  };
  return statusMap[status] || { color: 'text-neutral-400', bg: 'bg-neutral-800/50' };
};