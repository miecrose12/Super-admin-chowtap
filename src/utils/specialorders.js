// ===== DATA GENERATORS =====

export const generateOrdersData = () => 
  Array.from({ length: 24 * 5 }, (_, i) => ({
    id: `#CT-${9921 - i}`,
    name: ['Alexandrea Laurent', 'Marcus Knight', 'Sarah Connor', 'John Doe', 'Bruce Wayne'][i % 5],
    restaurant: ['Gourmet Burger Kitchen', 'Sushi Master Elite', 'The Italian Bistro', 'Pizza Palace', 'Gotham Steaks'][i % 5],
    status: ['PROCESSING', 'DELIVERED', 'CONFIRMED', 'REFUNDED', 'DELIVERED'][i % 5],
    amount: ['$142.50', '$84.20', '$210.00', '$45.00', '$532.18'][i % 5],
    day: 'Wednesday',
    checked: false,
  }));

export const generateProductsData = () =>
  Array.from({ length: 50 * 5 }, (_, i) => ({
    id: i,
    name: ['Signature Truffle Burger', 'Tuna Power Bowl', 'Lava Melt Cake', 'Artisan Carbonara', 'Artisan Carbonara'][i % 5],
    sku: `CHW-${8821 + i}`,
    price: ['N200.00', 'N10,000.00', 'N3,500.00', 'N12,00.00', 'N12,00.00'][i % 5],
    restaurant: ['The Burger Hub', 'Green Bowl Co.', 'Sweet Bites', 'Pasta Express', 'Pasta Express'][i % 5],
    isActive: [true, true, false, true, true][i % 5]
  }));

// ===== STATUS STYLES =====

export const getStatusStyle = (status) => {
  const styles = {
    'PROCESSING': 'text-[#e87922] border-[#e87922]/20 bg-[#e87922]/10',
    'DELIVERED': 'text-[#10b981] border-[#10b981]/20 bg-[#10b981]/10',
    'CONFIRMED': 'text-[#3b82f6] border-[#3b82f6]/20 bg-[#3b82f6]/10',
    'REFUNDED': 'text-[#ef4444] border-[#ef4444]/20 bg-[#ef4444]/10',
  };
  return styles[status] || 'text-gray-500 border-gray-500/20 bg-gray-500/10';
};

// ===== PAGINATION LOGIC =====

export const getPaginationData = (totalItems, itemsPerPage, currentPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  return { totalPages, startItem, endItem };
};

export const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage, '...', totalPages);
    }
  }
  return pages;
};

// ===== DATEPICKER STYLES =====

export const datePickerStyles = `
  .react-datepicker {
    background-color: #161616 !important;
    border-color: #262626 !important;
    font-family: inherit !important;
    color: #d4d4d4 !important;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  }
  .react-datepicker__header {
    background-color: #111111 !important;
    border-bottom-color: #262626 !important;
  }
  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    color: #f5f5f5 !important;
  }
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    color: #a0a0a0 !important;
  }
  .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
    background-color: #222 !important;
  }
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range {
    background-color: #DC781B !important;
    color: #0b0b0b !important;
    font-weight: bold;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: rgba(220, 120, 27, 0.3) !important;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

// ===== CONSTANTS =====

export const ITEMS_PER_PAGE = 5;
export const PERIOD_OPTIONS = ['Last 30 Days', 'Quarterly', 'Custom Range'];

export const STAT_CARDS = {
  orders: [
    { title: 'Total Orders', value: '12,480', subtext: 'Orders count' },
    { title: 'Delivered Orders', value: '12,390', subtext: 'Orders delivered to customers' },
    { title: 'Active Orders', value: '142', subtext: 'Orders yet to be delivered' },
    { title: 'Total Revenue', value: 'N82,780.00', subtext: 'Total revenue for vendors' },
  ],
  products: [
    { title: 'Total Products', value: '12,480', subtext: 'Products count' },
    { title: 'Available Products', value: '12,390', subtext: 'Products visible to customers' },
    { title: 'Unavailable Products', value: '142', subtext: 'Products not visible to customers' },
    { title: 'Total Restaurants', value: '120', subtext: 'Number of partnered restaurants' },
  ],
};

// ===== PAGINATION HELPERS =====

export const getSlicedData = (data, currentPage, itemsPerPage) => 
  data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

export const toggleItemInArray = (array, id, key) =>
  array.map(item => item.id === id ? { ...item, [key]: !item[key] } : item);

export const toggleAllInPage = (allItems, pageItems, pageKey, shouldToggle) => {
  const updatedItems = [...allItems];
  pageItems.forEach(pageItem => {
    const index = updatedItems.findIndex(item => item.id === pageItem.id);
    if (index !== -1) {
      updatedItems[index][pageKey] = shouldToggle;
    }
  });
  return updatedItems;
};