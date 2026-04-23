import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('favorites');
  const [orderHistoryPage, setOrderHistoryPage] = useState(1);
  const [voucherHistoryPage, setVoucherHistoryPage] = useState(1);
  
  // Date filter states for Order History
  const [orderDatePeriod, setOrderDatePeriod] = useState('All time');
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [orderStartDate, setOrderStartDate] = useState(null);
  const [orderEndDate, setOrderEndDate] = useState(null);
  const orderDropdownRef = useRef(null);

  // Date filter states for Voucher History
  const [voucherDatePeriod, setVoucherDatePeriod] = useState('All time');
  const [isVoucherDropdownOpen, setIsVoucherDropdownOpen] = useState(false);
  const [voucherStartDate, setVoucherStartDate] = useState(null);
  const [voucherEndDate, setVoucherEndDate] = useState(null);
  const voucherDropdownRef = useRef(null);
  
  // Pagination config
  const ITEMS_PER_PAGE = 5;
  const TOTAL_ORDERS = 142;
  const TOTAL_VOUCHERS = 142;
  const TOTAL_ORDER_PAGES = Math.ceil(TOTAL_ORDERS / ITEMS_PER_PAGE);
  const TOTAL_VOUCHER_PAGES = Math.ceil(TOTAL_VOUCHERS / ITEMS_PER_PAGE);

  const periods = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time', 'Custom period'];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (orderDropdownRef.current && !orderDropdownRef.current.contains(event.target)) {
        setIsOrderDropdownOpen(false);
      }
      if (voucherDropdownRef.current && !voucherDropdownRef.current.contains(event.target)) {
        setIsVoucherDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sample order history data - in real app this would come from API
  const allOrdersData = [
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

  // Sample voucher history data
  const allVouchersData = [
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

  // Paginate order history
  const paginatedOrders = allOrdersData.slice(
    (orderHistoryPage - 1) * ITEMS_PER_PAGE,
    orderHistoryPage * ITEMS_PER_PAGE
  );

  // Paginate voucher history
  const paginatedVouchers = allVouchersData.slice(
    (voucherHistoryPage - 1) * ITEMS_PER_PAGE,
    voucherHistoryPage * ITEMS_PER_PAGE
  );

  // Helper function to generate page numbers for pagination display
  const generatePageNumbers = (currentPage, totalPages) => {
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

  // Render stars for order review
  const renderStars = (count) => {
    return (
      <div className="flex text-[#FFB782]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${i < count ? 'fill-current' : 'text-neutral-600 fill-current'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Get status color and styling
  const getStatusStyle = (status) => {
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

  const getStatusDot = (status) => {
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

  const Icon = ({ name, className }) => {
    switch (name) {
      case 'arrow-left':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        );
      case 'mail':
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        );
      case 'location':
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        );
      case 'edit':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'suspend':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'search':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'filter':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        );
      case 'chevron-down':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        );
      default:
        return null;
    }
  };

  const wishlistItems = [
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
  ];

  return (
    <>
      <style>{`
        /* Overriding react-datepicker default styles to match your dark theme */
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
          background-color: #e86b35 !important;
          color: #111 !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(232, 107, 53, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#e86b35] selection:text-white pb-20">
        <div className="max-w-[1280px] mx-auto w-full p-6 md:p-8 flex flex-col gap-6">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#151515] p-4 rounded-xl gap-6 shadow-md border border-[#222]">
            <div className="flex items-center gap-4">
              <Link to="/users">
                <button className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#1c1c1c] border border-[#333] rounded-md hover:bg-[#2a2a2a] transition-colors">
                  <Icon name="arrow-left" className="w-4 h-4 text-neutral-400" />
                </button>
              </Link>
              <div className="w-14 h-14 shrink-0 bg-white text-black rounded-lg font-bold text-xl flex items-center justify-center">
                SJ
              </div>
              <div className="flex flex-col">
                <h1 className="text-[22px] font-bold text-white leading-tight mb-1">Sarah Jane</h1>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Icon name="mail" className="w-3.5 h-3.5 text-[#e86b35]" />
                    sarahjane@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="phone" className="w-3.5 h-3.5 text-[#e86b35]" />
                    +234 706-786-7869
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="location" className="w-3.5 h-3.5 text-[#e86b35]" />
                    McPherson University
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                to="/users/edit-customer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-[#333]"
              >
                <Icon name="edit" className="w-4 h-4" />
                Edit Customer
              </Link>

              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#7E2B17] hover:bg-[#5a2020] text-[#ff6b6b] px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-[#6a2020]">
                <Icon name="suspend" className="w-4 h-4" />
                Suspend User
              </button>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#181818] border-r-[3px] border-[#e86b35] p-5 rounded-lg flex flex-col justify-between h-[104px]">
              <h3 className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">Total Orders</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-white">42</span>
                <span className="text-[10px] font-bold text-[#22c55e]">+12% vs LY</span>
              </div>
            </div>
            <div className="bg-[#181818] border-r-[3px] border-[#e86b35] p-5 rounded-lg flex flex-col justify-between h-[104px]">
              <h3 className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">Lifetime Value</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">N21,240.50</span>
              </div>
            </div>
            <div className="bg-[#181818] border-r-[3px] border-[#e86b35] p-5 rounded-lg flex flex-col justify-between h-[104px]">
              <h3 className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">Gross Profit</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">N5,800.00</span>
              </div>
            </div>
            <div className="bg-[#181818] border-r-[3px] border-[#e86b35] p-5 rounded-lg flex flex-col justify-between h-[104px]">
              <h3 className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">Voucher Balance</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">N5,000.00</span>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-8 border-b border-[#2a2a2a] mt-2">
            {['favorites', 'order-history', 'voucher-history'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'order-history') setOrderHistoryPage(1);
                  if (tab === 'voucher-history') setVoucherHistoryPage(1);
                }}
                className={`pb-4 text-xs font-bold uppercase tracking-[0.1em] transition-colors relative top-[1px] ${
                  activeTab === tab
                    ? 'text-[#FFB782] border-b-2 border-[#FFB782]'
                    : 'text-neutral-500 border-b-2 border-transparent hover:text-neutral-300'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-2">

            {/* ====================== FAVORITES TAB ====================== */}
            {activeTab === 'favorites' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Col: Wishlist */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-[19px] font-semibold text-white tracking-wide">Wishlist</h2>
                    <span className="text-xs text-neutral-400 font-medium tracking-wide">5 Items Saved</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {wishlistItems.map((item, idx) => (
                      <div key={idx} className="relative h-44 rounded-xl overflow-hidden border border-white/5 group">
                        <img
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={item.image || "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                        
                        <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col justify-end">
                          <span className="text-white font-semibold text-[13px] mb-1.5">{item.name}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-[#dfa375] font-semibold text-xs">{item.price}</span>
                            <span className="bg-[#1a1a1a]/90 border border-white/10 text-[9px] font-bold text-neutral-300 px-2 py-1 rounded uppercase tracking-[0.08em] backdrop-blur-md">
                              {item.vendor}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Col: Insights */}
                <div className="flex flex-col gap-5">
                  {/* Most Ordered Items */}
                  <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
                    <h3 className="text-[10px] font-bold text-[#dfa375] tracking-[0.2em] uppercase mb-6">Most Ordered Items</h3>
                    <div className="flex flex-col gap-5">
                      {/* Rank 1 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#131313] flex items-center justify-center border border-[#262626]">
                            <span className="text-[#FFA35B] font-bold text-sm">1</span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-medium text-white">Caramel Latte</span>
                            <span className="text-[10px] text-neutral-500 font-medium">Ordered 16 times</span>
                          </div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#22c55e]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                      </div>
                      
                      {/* Rank 2 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#131313] flex items-center justify-center border border-[#262626]">
                            <span className="text-[#FFA35B] font-bold text-sm">2</span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-medium text-white">Garlic Fries</span>
                            <span className="text-[10px] text-neutral-500 font-medium">Ordered 12 times</span>
                          </div>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </div>
                      
                      {/* Rank 3 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#131313] flex items-center justify-center border border-[#262626]">
                            <span className="text-[#FFA35B] font-bold text-sm">3</span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-medium text-white">Avocado Toast</span>
                            <span className="text-[10px] text-neutral-500 font-medium">Ordered 9 times</span>
                          </div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#22c55e]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                      </div>
                    </div>
                  </div>

                  {/* Top Vendors */}
                  <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
                    <h3 className="text-[10px] font-bold text-[#dfa375] tracking-[0.2em] uppercase mb-5">Top Vendors</h3>
                    <div className="flex flex-col gap-3">
                      {/* Vendor 1 */}
                      <div className="bg-[#000000] p-3 rounded-xl flex items-center justify-between border border-[#262626]">
                        <div className="flex items-center gap-3">
                          <div className="w-[42px] h-[42px] rounded-lg bg-[#222] flex items-center justify-center border border-[#2a2a2a]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFA35B]"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-medium text-white">Green Leaf Cafe</span>
                            <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-medium tracking-wide">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              4.8 RATING
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-[#dfa375]">22 orders</span>
                      </div>

                      {/* Vendor 2 */}
                      <div className="bg-[#000000] p-3 rounded-xl flex items-center justify-between border border-[#262626]">
                        <div className="flex items-center gap-3">
                          <div className="w-[42px] h-[42px] rounded-lg bg-[#222] flex items-center justify-center border border-[#2a2a2a]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFA35B]"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-medium text-white">Urban Bites</span>
                            <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-medium tracking-wide">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              4.6 RATING
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-[#dfa375]">14 orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ====================== ORDER HISTORY TAB ====================== */}
            {activeTab === 'order-history' && (
              <div className="flex flex-col text-sm">
                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 relative z-40">
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Search Input */}
                    <div className="relative w-full md:w-64">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon name="search" className="h-4 w-4 text-neutral-500" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 bg-black border border-[#1a1a1a] rounded-md leading-5 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-[#e87b35] sm:text-sm transition-colors"
                        placeholder="Search Order ID or Vendor..."
                      />
                    </div>
                  </div>

                  {/* Date Range Dropdown Section */}
                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    {/* Custom Period Date Pickers */}
                    {orderDatePeriod === 'Custom period' && (
                      <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200 w-full md:w-auto">
                        <div className="relative">
                          <DatePicker
                            selected={orderStartDate}
                            onChange={(date) => setOrderStartDate(date)}
                            selectsStart
                            startDate={orderStartDate}
                            endDate={orderEndDate}
                            dateFormat="dd MMM, yyyy"
                            placeholderText="Start Date"
                            className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
                          />
                        </div>
                        <span className="text-[#666] text-[12px]">To</span>
                        <div className="relative">
                          <DatePicker
                            selected={orderEndDate}
                            onChange={(date) => setOrderEndDate(date)}
                            selectsEnd
                            startDate={orderStartDate}
                            endDate={orderEndDate}
                            minDate={orderStartDate}
                            dateFormat="dd MMM, yyyy"
                            placeholderText="End Date"
                            className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
                          />
                        </div>
                        <button className="bg-[#e86b35] hover:bg-[#c96e21] text-[#2b1707] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                          Apply
                        </button>
                      </div>
                    )}

                    {/* Date Period Dropdown Button */}
                    <div className="relative w-full md:w-auto" ref={orderDropdownRef}>
                      <button 
                        onClick={() => setIsOrderDropdownOpen(!isOrderDropdownOpen)}
                        className="w-full md:w-auto flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[150px]"
                      >
                        <Icon name="calendar" className="w-4 h-4 text-[#888]" />
                        {orderDatePeriod}
                        <Icon name="chevron-down" className="w-4 h-4" />
                      </button>

                      {isOrderDropdownOpen && (
                        <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                          {periods.map((period) => (
                            <button
                              key={period}
                              onClick={() => { 
                                setOrderDatePeriod(period); 
                                setIsOrderDropdownOpen(false);
                                if (period !== 'Custom period') {
                                  setOrderStartDate(null);
                                  setOrderEndDate(null);
                                }
                              }}
                              className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                                orderDatePeriod === period ? 'text-[#e86b35] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                              }`}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Status Filter Button */}
                    <button className="hidden md:flex items-center gap-2 px-3 py-2.5 border border-[#262626] rounded-[4px] bg-[#161616] text-neutral-400 text-[12px] hover:bg-[#1f1f1f] transition-colors whitespace-nowrap">
                      <Icon name="filter" className="w-4 h-4" />
                      Status: All
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-[#050505] rounded-lg overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Order ID</th>
                        <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Date</th>
                        <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Vendor</th>
                        <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Total</th>
                        <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Status</th>
                        <th scope="col" className="px-6 py-5 text-left text-[11px] font-bold text-neutral-500 uppercase tracking-[0.15em]">Review</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black">
                      {paginatedOrders.map((order, idx) => (
                        <tr key={idx} className="hover:bg-[#0a0a0a] transition-colors group border-b border-[#1a1a1a]">
                          <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">{order.id}</td>
                          <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">{order.date}</td>
                          <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">{order.vendor}</td>
                          <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">{order.total}</td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            {['DELIVERED', 'REFUNDED', 'PROCESSING'].includes(order.status) ? (
                              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(order.status)}`}></span>
                                {order.status}
                              </span>
                            ) : (
                              <span>{order.status}</span>
                            )}
                          </td>
                          <td className="px-6 py-5 whitespace-nowrap">
                            {order.rating > 0 ? (
                              <div className="flex items-center gap-3">
                                {renderStars(order.rating)}
                                <span className="text-[11px] text-neutral-500 italic">{order.review}</span>
                              </div>
                            ) : (
                              <span className="text-[11px] text-[#333] italic">{order.review}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-8">
                  <span className="text-xs text-neutral-500 tracking-wide">
                    Showing <span className="font-semibold text-neutral-300">{(orderHistoryPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(orderHistoryPage * ITEMS_PER_PAGE, TOTAL_ORDERS)}</span> of <span className="font-semibold text-neutral-300">{TOTAL_ORDERS}</span> orders
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => setOrderHistoryPage(prev => Math.max(1, prev - 1))}
                      disabled={orderHistoryPage === 1}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        orderHistoryPage === 1
                          ? 'bg-[#0a0a0a] text-neutral-700 border border-[#1a1a1a] cursor-not-allowed'
                          : 'bg-[#111] text-neutral-500 border border-[#1a1a1a] hover:bg-[#1a1a1a]'
                      }`}
                    >
                      &lt;
                    </button>

                    {generatePageNumbers(orderHistoryPage, TOTAL_ORDER_PAGES).map((page, idx) => (
                      page === '...' ? (
                        <span key={`ellipsis-${idx}`} className="w-8 h-8 flex items-center justify-center text-neutral-600 text-xs tracking-widest">...</span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setOrderHistoryPage(page)}
                          className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-xs font-medium ${
                            orderHistoryPage === page
                              ? 'bg-[#e87b35] text-black font-bold'
                              : 'bg-[#111] text-neutral-400 border border-[#1a1a1a] hover:bg-[#1a1a1a]'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}

                    <button 
                      onClick={() => setOrderHistoryPage(prev => Math.min(TOTAL_ORDER_PAGES, prev + 1))}
                      disabled={orderHistoryPage === TOTAL_ORDER_PAGES}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        orderHistoryPage === TOTAL_ORDER_PAGES
                          ? 'bg-[#0a0a0a] text-neutral-700 border border-[#1a1a1a] cursor-not-allowed'
                          : 'bg-[#111] text-neutral-500 border border-[#1a1a1a] hover:bg-[#1a1a1a]'
                      }`}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ====================== VOUCHER HISTORY TAB ====================== */}
            {activeTab === 'voucher-history' && (
              <div className="flex flex-col">
                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 relative z-40">
                  {/* Search (left side) */}
                  <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon name="search" className="h-4 w-4 text-neutral-500" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-[#2a2a2a] rounded-md leading-5 bg-[#0e0e0e] text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-[#e86b35] sm:text-sm transition-colors"
                      placeholder="Search reference..."
                    />
                  </div>

                  {/* Date Range + Status buttons (far right on md+) */}
                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    {/* Custom Period Date Pickers */}
                    {voucherDatePeriod === 'Custom period' && (
                      <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200 w-full md:w-auto">
                        <div className="relative">
                          <DatePicker
                            selected={voucherStartDate}
                            onChange={(date) => setVoucherStartDate(date)}
                            selectsStart
                            startDate={voucherStartDate}
                            endDate={voucherEndDate}
                            dateFormat="dd MMM, yyyy"
                            placeholderText="Start Date"
                            className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
                          />
                        </div>
                        <span className="text-[#666] text-[12px]">To</span>
                        <div className="relative">
                          <DatePicker
                            selected={voucherEndDate}
                            onChange={(date) => setVoucherEndDate(date)}
                            selectsEnd
                            startDate={voucherStartDate}
                            endDate={voucherEndDate}
                            minDate={voucherStartDate}
                            dateFormat="dd MMM, yyyy"
                            placeholderText="End Date"
                            className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#e86b35] outline-none transition-colors"
                          />
                        </div>
                        <button className="bg-[#e86b35] hover:bg-[#c96e21] text-[#2b1707] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                          Apply
                        </button>
                      </div>
                    )}

                    {/* Date Period Dropdown Button */}
                    <div className="relative w-full md:w-auto" ref={voucherDropdownRef}>
                      <button 
                        onClick={() => setIsVoucherDropdownOpen(!isVoucherDropdownOpen)}
                        className="w-full md:w-auto flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[150px]"
                      >
                        <Icon name="calendar" className="w-4 h-4 text-[#888]" />
                        {voucherDatePeriod}
                        <Icon name="chevron-down" className="w-4 h-4" />
                      </button>

                      {isVoucherDropdownOpen && (
                        <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                          {periods.map((period) => (
                            <button
                              key={period}
                              onClick={() => { 
                                setVoucherDatePeriod(period); 
                                setIsVoucherDropdownOpen(false);
                                if (period !== 'Custom period') {
                                  setVoucherStartDate(null);
                                  setVoucherEndDate(null);
                                }
                              }}
                              className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                                voucherDatePeriod === period ? 'text-[#e86b35] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                              }`}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Status Filter Button */}
                    <button className="hidden md:flex items-center gap-2 px-3 py-2.5 border border-[#262626] rounded-[4px] bg-[#161616] text-neutral-400 text-[12px] hover:bg-[#1f1f1f] transition-colors whitespace-nowrap">
                      <Icon name="filter" className="w-4 h-4" />
                      Status: All
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-[#0e0e0e] rounded-xl border border-[#222] overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#222]">
                    <thead className="bg-[#0e0e0e]">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Transaction Type</th>
                        <th scope="col" className="px-6 py-4 text-right text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Date & Time</th>
                        <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Transaction Name</th>
                        <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-4 text-right text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-4 text-left text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222] bg-[#0d0d0d]">
                      {paginatedVouchers.map((voucher, idx) => (
                        <tr key={idx} className="bg-[#000] transition-colors hover:bg-[#0a0a0a]">
                          <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">{voucher.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">{voucher.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">{voucher.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs text-white">{voucher.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <span className={`inline-flex items-center justify-end gap-1.5 text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(voucher.status)}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(voucher.status)}`}></span>
                              {voucher.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">{voucher.reference}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-neutral-400">
                    Showing <span className="font-bold text-white">{(voucherHistoryPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(voucherHistoryPage * ITEMS_PER_PAGE, TOTAL_VOUCHERS)}</span> of <span className="font-bold text-white">{TOTAL_VOUCHERS}</span> orders
                  </span>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setVoucherHistoryPage(prev => Math.max(1, prev - 1))}
                      disabled={voucherHistoryPage === 1}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        voucherHistoryPage === 1
                          ? 'bg-[#0a0a0a] text-neutral-700 border border-[#333] cursor-not-allowed'
                          : 'bg-[#1a1a1a] text-neutral-500 border border-[#333] hover:bg-[#222]'
                      }`}
                    >
                      &lt;
                    </button>

                    {generatePageNumbers(voucherHistoryPage, TOTAL_VOUCHER_PAGES).map((page, idx) => (
                      page === '...' ? (
                        <span key={`ellipsis-${idx}`} className="w-8 h-8 flex items-center justify-center text-neutral-500 text-xs">...</span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setVoucherHistoryPage(page)}
                          className={`w-8 h-8 flex items-center justify-center rounded transition-colors text-xs font-medium ${
                            voucherHistoryPage === page
                              ? 'bg-[#e86b35] text-black font-bold'
                              : 'bg-[#1a1a1a] text-neutral-400 border border-[#333] hover:bg-[#222]'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}

                    <button 
                      onClick={() => setVoucherHistoryPage(prev => Math.min(TOTAL_VOUCHER_PAGES, prev + 1))}
                      disabled={voucherHistoryPage === TOTAL_VOUCHER_PAGES}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        voucherHistoryPage === TOTAL_VOUCHER_PAGES
                          ? 'bg-[#0a0a0a] text-neutral-700 border border-[#333] cursor-not-allowed'
                          : 'bg-[#1a1a1a] text-neutral-500 border border-[#333] hover:bg-[#222]'
                      }`}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;