// Constants
export const ITEMS_PER_PAGE = 5;
export const TOTAL_ORDERS = 142;
export const TOTAL_VOUCHERS = 142;
export const TOTAL_ORDER_PAGES = Math.ceil(TOTAL_ORDERS / ITEMS_PER_PAGE);
export const TOTAL_VOUCHER_PAGES = Math.ceil(TOTAL_VOUCHERS / ITEMS_PER_PAGE);

export const PERIODS = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time', 'Custom period'];

// Status styling
export const getStatusStyle = (status) => {
  switch (status) {
    case 'DELIVERED':
      return 'bg-[#0a2717] text-[#10b981]';
    case 'REFUNDED':
      return 'bg-[#2c0e0e] text-[#ef4444]';
    case 'PROCESSING':
      return 'bg-[#2b1708] text-[#FFB782]';
    case 'SUCCESS':
      return 'text-[#22c55e]';
    case 'FAILED':
      return 'text-[#ef4444]';
    case 'PENDING':
      return 'text-[#FFB782]';
    default:
      return 'bg-[#1a1a1a] text-neutral-400';
  }
};

export const getStatusDot = (status) => {
  switch (status) {
    case 'DELIVERED':
    case 'SUCCESS':
      return 'bg-[#10b981]';
    case 'REFUNDED':
    case 'FAILED':
      return 'bg-[#ef4444]';
    case 'PROCESSING':
    case 'PENDING':
      return 'bg-[#FFB782]';
    default:
      return 'bg-neutral-500';
  }
};

// Pagination helper
export const generatePageNumbers = (currentPage, totalPages) => {
  const pages = [];
  const maxVisible = 5;
  
  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    if (currentPage <= 2) {
      endPage = 4;
    } else if (currentPage >= totalPages - 1) {
      startPage = totalPages - 3;
    }
    
    if (startPage > 2) {
      pages.push('...');
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    
    pages.push(totalPages);
  }
  
  return pages;
};

// Sample data
export const ALL_ORDERS_DATA = [
  { id: '#Order-4567', date: 'Oct 24, 2023 • 18:42', vendor: 'Taco Bell - Downtown', total: 'N2,580.00', status: 'DELIVERED', rating: 5, review: '"Food arrived pipin..."' },
  { id: '#Order-4566', date: 'Oct 23, 2023 • 15:30', vendor: 'Pizza Hut - Ikoyi', total: 'N3,150.00', status: 'DELIVERED', rating: 5, review: '"Excellent quality!"' },
  { id: '#Order-8903', date: 'Oct 20, 2023 • 20:10', vendor: 'Burger King', total: 'N2,580.00', status: 'REFUNDED', rating: 0, review: 'No review provided' },
  { id: '#Order-5674', date: 'Oct 18, 2023 • 19:15', vendor: 'The Pasta House', total: 'N2,580.00', status: 'PROCESSING', rating: 0, review: 'Order in progress' },
  { id: '#Order-2891', date: 'Oct 17, 2023 • 14:20', vendor: 'KFC Express', total: 'N1,950.00', status: 'DELIVERED', rating: 4, review: '"Good value for money"' },
  { id: '#Order-7542', date: 'Oct 16, 2023 • 12:45', vendor: 'Subway - V.I', total: 'N1,200.00', status: 'DELIVERED', rating: 5, review: '"Fresh ingredients!"' },
  { id: '#Order-3298', date: 'Oct 15, 2023 • 18:00', vendor: 'Chicken Republic', total: 'N2,100.00', status: 'DELIVERED', rating: 4, review: '"Quick delivery"' },
  { id: '#Order-9145', date: 'Oct 14, 2023 • 16:30', vendor: 'Mr. Bigg\'s', total: 'N2,800.00', status: 'DELIVERED', rating: 5, review: '"Perfect meal!"' },
  { id: '#Order-4829', date: 'Oct 13, 2023 • 11:10', vendor: 'Domino\'s Pizza', total: 'N3,500.00', status: 'DELIVERED', rating: 4, review: '"Hot and fresh"' },
  { id: '#Order-6713', date: 'Oct 12, 2023 • 13:25', vendor: 'Buffalo Wings', total: 'N1,850.00', status: 'DELIVERED', rating: 5, review: '"Spicy and tasty!"' },
];

export const ALL_VOUCHERS_DATA = [
  { type: 'Debit', date: 'Oct 24, 2023 • 18:42', name: '#Order-5674 - Voucher', amount: 'N2,580.00', status: 'SUCCESS', reference: 'trf-Order-5768-785788949' },
  { type: 'Credit', date: 'Oct 24, 2023 • 18:42', name: 'VoucherPurchase', amount: 'N2,580.00', status: 'SUCCESS', reference: 'trf-Order-5768-785788949' },
  { type: 'Debit', date: 'Oct 20, 2023 • 20:10', name: 'Gift Received', amount: 'N2,580.00', status: 'FAILED', reference: 'trf-Order-5768-785788949' },
  { type: 'Credit', date: 'Oct 18, 2023 • 19:15', name: 'Student', amount: 'N2,580.00', status: 'PENDING', reference: 'trf-Order-5768-785788949' },
  { type: 'Credit', date: 'Oct 18, 2023 • 19:15', name: 'Student', amount: 'N2,580.00', status: 'PENDING', reference: 'trf-Order-5768-785788949' },
  { type: 'Debit', date: 'Oct 17, 2023 • 10:30', name: '#Order-1234 - Voucher', amount: 'N1,500.00', status: 'SUCCESS', reference: 'trf-Order-1234-856789012' },
  { type: 'Credit', date: 'Oct 16, 2023 • 14:15', name: 'Referral Bonus', amount: 'N500.00', status: 'SUCCESS', reference: 'trf-Order-5678-923456789' },
  { type: 'Debit', date: 'Oct 15, 2023 • 09:45', name: '#Order-9876 - Voucher', amount: 'N3,200.00', status: 'SUCCESS', reference: 'trf-Order-9876-567890123' },
  { type: 'Credit', date: 'Oct 14, 2023 • 16:20', name: 'Birthday Bonus', amount: 'N1,000.00', status: 'SUCCESS', reference: 'trf-Order-5432-234567890' },
  { type: 'Debit', date: 'Oct 13, 2023 • 12:00', name: '#Order-5555 - Voucher', amount: 'N2,100.00', status: 'SUCCESS', reference: 'trf-Order-5555-345678901' },
];

export const WISHLIST_ITEMS = [
  { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
  { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
  { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
  { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
  { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
];