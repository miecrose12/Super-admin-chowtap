// Mock data generation
export const generateMockVendors = (count) => {
  const statuses = ['ACTIVE', 'SUSPENDED', 'PENDING'];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `BROS JOHN ${i + 1}`,
    avatar: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=64&h=64&fit=crop',
    email: `brosjohn${i + 1}@gmail.com`,
    rating: (Math.random() * (5 - 3) + 3).toFixed(1),
    campus: 'MCPHERSON UNIVERSITY',
    status: statuses[i % statuses.length],
    revenue: `N ${(Math.random() * 2000000).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
    orders: Math.floor(Math.random() * 2000).toLocaleString(),
    date: '12 February, 2026'
  }));
};

// Pagination helper
export const calculatePaginationValues = (totalItems, currentPage, itemsPerPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  return {
    totalPages,
    indexOfFirstItem,
    indexOfLastItem
  };
};

// Get pagination group
export const getPaginationGroup = (currentPage, totalPages) => {
  const pages = [];
  const showEllipsis = totalPages > 5;

  if (!showEllipsis) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
  }
  return pages;
};

// Status styles
export const getStatusStyles = (status) => {
  const styles = {
    ACTIVE: 'bg-[#0D2A18] text-[#1EC95E]',
    SUSPENDED: 'bg-[#3B1717] text-[#D83B3B]',
    PENDING: 'bg-[#3A2810] text-[#D4891C]',
  };
  return styles[status] || 'bg-gray-800';
};

// Analytics data
// Analytics data
export const analyticsData = {
  totalVendors: '12,480',
  approvedVendors: '12,390',
  suspendedVendors: '142',
  totalOrders: '12,480',
  totalRevenue: 'N280,390.00',
  totalRefunded: 'N142,078.00',
  pendingApprovals: 3
};