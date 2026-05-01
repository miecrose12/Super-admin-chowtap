// Constants
export const ITEMS_PER_PAGE = 5;
export const MAX_PAGINATION_BUTTONS = 7;

// Colors & Styling
export const COLORS = {
  primary: '#FF8A00',
  success: '#00E676',
  error: '#FF5252',
  warning: '#FFB300',
  dark: '#0E0E0E',
  darkCard: '#1F2020',
  darkInput: '#161616',
  darkBorder: '#2A2A2A',
  gold: '#C69269',
  accent: '#FFB782',
};

// Order Statuses
export const ORDER_STATUS = {
  DELIVERED: 'DELIVERED',
  REFUNDED: 'REFUNDED',
  PROCESSING: 'PROCESSING',
};

// Status Colors
export const STATUS_STYLES = {
  DELIVERED: { bg: '#0A2E1F', text: '#00E676', dot: '#00E676' },
  REFUNDED: { bg: '#3A1212', text: '#FF5252', dot: '#FF5252' },
  PROCESSING: { bg: '#332200', text: '#FFB300', dot: '#FFB300' },
};

// Dummy Data
export const allOrders = [
  { id: '#Order-4567', date: 'Oct 24, 2023 • 18:42', vendor: 'Taco Bell - Downtown', total: 'N2,580.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Food arrived pipin...' },
  { id: '#Order-4566', date: 'Oct 23, 2023 • 19:15', vendor: 'Pizza Hut - Main Street', total: 'N3,200.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Perfect order...' },
  { id: '#Order-4565', date: 'Oct 22, 2023 • 20:30', vendor: 'KFC - Central', total: 'N2,100.00', status: 'DELIVERED', review: '⭐⭐⭐⭐ *Good service...' },
  { id: '#Order-8903', date: 'Oct 20, 2023 • 20:10', vendor: 'Burger King', total: 'N2,580.00', status: 'REFUNDED', review: 'No review provided' },
  { id: '#Order-5674', date: 'Oct 18, 2023 • 19:15', vendor: 'The Pasta House', total: 'N2,580.00', status: 'PROCESSING', review: 'Order in progress' },
  { id: '#Order-5673', date: 'Oct 17, 2023 • 18:20', vendor: 'Dominos - Campus', total: 'N1,950.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Fast delivery...' },
  { id: '#Order-5672', date: 'Oct 16, 2023 • 21:00', vendor: 'Chicken Republic', total: 'N2,300.00', status: 'DELIVERED', review: '⭐⭐⭐⭐ *Great food...' },
  { id: '#Order-5671', date: 'Oct 15, 2023 • 19:45', vendor: 'Mr. Biggs - East', total: 'N1,800.00', status: 'PROCESSING', review: 'Order in progress' },
  { id: '#Order-5670', date: 'Oct 14, 2023 • 20:15', vendor: 'Tantalizers - West', total: 'N2,650.00', status: 'REFUNDED', review: 'No review provided' },
  { id: '#Order-5669', date: 'Oct 13, 2023 • 18:50', vendor: 'Nando\'s - Downtown', total: 'N3,100.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Best delivery...' },
  { id: '#Order-5668', date: 'Oct 12, 2023 • 19:30', vendor: 'Thai Express', total: 'N2,900.00', status: 'DELIVERED', review: '⭐⭐⭐⭐ *Good...' },
  { id: '#Order-5667', date: 'Oct 11, 2023 • 20:00', vendor: 'Sushi Bar', total: 'N4,200.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Excellent...' },
  { id: '#Order-5666', date: 'Oct 10, 2023 • 18:25', vendor: 'Grill House', total: 'N3,500.00', status: 'PROCESSING', review: 'Order in progress' },
  { id: '#Order-5665', date: 'Oct 9, 2023 • 19:10', vendor: 'Café Mocha', total: 'N1,200.00', status: 'DELIVERED', review: '⭐⭐⭐⭐ *Quick...' },
  { id: '#Order-5664', date: 'Oct 8, 2023 • 21:30', vendor: 'Ice Cream Parlor', total: 'N800.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Yummy...' },
];

export const allReviews = [
  { initials: 'JD', name: 'Jameson Dunn', date: 'May 24, 2024', rating: 5, text: '"Super fast delivery! The food arrived while it was still piping hot. Alex always takes the most efficient routes. Best rider in the campus area hands down."' },
  { initials: 'SM', name: 'Sarah Mitchell', date: 'May 22, 2024', rating: 4, text: '"Rider was polite and followed all instructions for the contactless drop-off. A bit of a wait near the restaurant, but the rider kept me updated via chat throughout."' },
  { initials: 'AB', name: 'Alex Brown', date: 'May 20, 2024', rating: 5, text: '"Outstanding service! Delivered exactly on time and communicated every step of the way. Highly recommend!"' },
  { initials: 'CD', name: 'Catherine Davis', date: 'May 18, 2024', rating: 4, text: '"Good delivery experience, though there was a minor delay. The rider apologized and made up for it with great service."' },
  { initials: 'EF', name: 'Emma Foster', date: 'May 16, 2024', rating: 5, text: '"Fantastic! This is my third order and every single delivery has been perfect. Consistent quality and speed."' },
  { initials: 'GH', name: 'George Harris', date: 'May 14, 2024', rating: 3, text: '"Average delivery. Food was fine but took longer than expected. Could be better."' },
  { initials: 'IJ', name: 'Isabella Johnson', date: 'May 12, 2024', rating: 5, text: '"Amazing rider! Very courteous and professional. Will definitely order again!"' },
  { initials: 'KL', name: 'Kevin Lee', date: 'May 10, 2024', rating: 4, text: '"Great service overall. Minor issue with order accuracy but rider handled it professionally."' },
  { initials: 'MN', name: 'Maria Neves', date: 'May 8, 2024', rating: 5, text: '"Perfect delivery experience. Rider was friendly and the food arrived hot."' },
  { initials: 'OP', name: 'Oliver Parks', date: 'May 6, 2024', rating: 4, text: '"Good delivery, met expectations. Would have appreciated a quick check-in though."' },
  { initials: 'QR', name: 'Quinn Roberts', date: 'May 4, 2024', rating: 5, text: '"Exceptional service! This rider goes above and beyond. Truly outstanding!"' },
  { initials: 'ST', name: 'Sophie Taylor', date: 'May 2, 2024', rating: 4, text: '"Solid delivery. Food was fresh and arrived on time. Good experience."' },
];

// Helper Functions
export const generatePaginationButtons = (currentPage, totalPages, maxButtons = MAX_PAGINATION_BUTTONS) => {
  const buttons = [];

  if (totalPages <= maxButtons) {
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(i);
    }
  } else {
    buttons.push(1);
    
    if (currentPage > 3) buttons.push('...');
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!buttons.includes(i)) buttons.push(i);
    }
    
    if (currentPage < totalPages - 2) buttons.push('...');
    buttons.push(totalPages);
  }

  return buttons;
};

export const filterOrders = (orders, searchId, statusFilter) => {
  return orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchId.toLowerCase());
    const matchesStatus = statusFilter === 'All Statuses' || order.status === statusFilter.toUpperCase();
    return matchesSearch && matchesStatus;
  });
};

export const filterAndSortReviews = (reviews, ratingFilter, sortType) => {
  let filtered = [...reviews];
  
  if (ratingFilter !== 'All Stars') {
    const rating = parseInt(ratingFilter.split(' ')[0]);
    filtered = filtered.filter(r => r.rating === rating);
  }
  
  if (sortType === 'Newest First') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortType === 'Oldest First') {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortType === 'Highest Rated') {
    filtered.sort((a, b) => b.rating - a.rating);
  }
  
  return filtered;
};

export const paginateData = (data, page, itemsPerPage = ITEMS_PER_PAGE) => {
  const startIdx = (page - 1) * itemsPerPage;
  return data.slice(startIdx, startIdx + itemsPerPage);
};

export const getTotalPages = (dataLength, itemsPerPage = ITEMS_PER_PAGE) => {
  return Math.ceil(dataLength / itemsPerPage);
};