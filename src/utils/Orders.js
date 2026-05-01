// Mock data generation
export const generateMockOrders = (count) => {
  const statuses = ['NEW', 'PENDING', 'READY', 'COMPLETED', 'ARRIVED', 'DELIVERED'];
  return Array.from({ length: count }, (_, index) => {
    const status = statuses[index % statuses.length];
    const isDelivered = status === 'DELIVERED';
    
    return {
      id: `Order-${4467 + index}`,
      name: `Raheem Inioluwa ${index + 1}`,
      email: `inioluwa${index + 1}@gmail.com`,
      vendor: index % 2 === 0 ? 'Abula Spot' : 'Chicken Republic',
      location: 'Atuwatse Hall',
      total: `₦ ${(2560 + (index * 150)).toLocaleString()}.00`,
      date: '12/02/2025',
      time: '10:34AM',
      status: status,
      remaining: isDelivered ? '28 mins' : `${20 + (index % 15)} mins remaining`,
      delivered: isDelivered
    };
  });
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
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
  if (currentPage <= 3) return [1, 2, 3, '...', totalPages];
  if (currentPage >= totalPages - 2) return [1, '...', totalPages - 2, totalPages - 1, totalPages];
  return [1, '...', currentPage, '...', totalPages];
};

// Stats data
// Stats data
export const statsData = [
  { label: 'Total Orders', val: '12,480' },
  { label: 'Delivered Orders', val: '12,390' },
  { label: 'Active Orders', val: '142' },
  { label: 'Total Revenue', val: 'N82,780.00' },
  { label: 'Delivered Early', val: '12,480' },
  { label: 'Delivered Late', val: '12,390' },
  { label: 'Rejected Orders', val: '142' },
  { label: 'Total Refunded Amount', val: 'N82,780.00' },
];

// Date periods
export const datePeriods = [
  'Today', 'Yesterday', 'This week', 'This month', 
  'Last month', 'This year', 'All time', 'Custom period'
];