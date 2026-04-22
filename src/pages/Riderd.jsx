import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Pencil, 
  ChevronDown, 
  Info, 
  List, 
  MessageSquare, 
  MapPin, 
  Search, 
  Calendar, 
  Filter, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Riderd = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [searchOrderId, setSearchOrderId] = useState('');
  const [currentOrderPage, setCurrentOrderPage] = useState(1);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [orderDateFilter, setOrderDateFilter] = useState('Last 7 Days');
  const [orderStatusFilter, setOrderStatusFilter] = useState('All Statuses');
  const [reviewSort, setReviewSort] = useState('Newest First');
  const [reviewRating, setReviewRating] = useState('All Stars');

  const itemsPerPage = 5;

  // Extended dummy data
  const allOrders = [
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

  const allReviews = [
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

  // Filter and search orders
  const filteredOrders = useMemo(() => {
    return allOrders.filter(order => {
      const matchesSearch = order.id.toLowerCase().includes(searchOrderId.toLowerCase());
      const matchesStatus = orderStatusFilter === 'All Statuses' || order.status === orderStatusFilter.toUpperCase();
      return matchesSearch && matchesStatus;
    });
  }, [searchOrderId, orderStatusFilter]);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    let filtered = allReviews;
    
    if (reviewRating !== 'All Stars') {
      const rating = parseInt(reviewRating.split(' ')[0]);
      filtered = filtered.filter(r => r.rating === rating);
    }
    
    if (reviewSort === 'Newest First') {
      filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (reviewSort === 'Oldest First') {
      filtered = [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (reviewSort === 'Highest Rated') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }
    
    return filtered;
  }, [reviewRating, reviewSort]);

  // Paginate orders
  const totalOrderPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentOrderPage - 1) * itemsPerPage,
    currentOrderPage * itemsPerPage
  );

  // Paginate reviews
  const totalReviewPages = Math.ceil(filteredReviews.length / itemsPerPage);
  const paginatedReviews = filteredReviews.slice(
    (currentReviewPage - 1) * itemsPerPage,
    currentReviewPage * itemsPerPage
  );

  // Generate pagination buttons
  const generatePaginationButtons = (currentPage, totalPages) => {
    const buttons = [];
    const maxButtons = 7;

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

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-8 font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <Link to="/riders">
            <button className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:bg-[#2A2A2A] transition">
              <ArrowLeft size={20} className="text-gray-300" />
            </button>
          </Link>
          <div className="w-16 h-16 bg-[#F4F4F4] text-black font-bold text-xl flex items-center justify-center rounded-xl">
            MJ
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-wide">Marcus Joe</h1>
              <span className="px-2 py-1 text-xs font-bold bg-[#0A2E1F] text-[#00E676] rounded uppercase tracking-wider">Active</span>
            </div>
            <div className="text-gray-400 mt-1 text-sm flex items-center gap-1">
              <Star size={16} className="text-[#FFB300] fill-[#FFB300]" />
              <span className="text-white font-medium">4.8</span>
              <span>(1,240 reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link to="/riders/edit-rider">
            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition flex items-center gap-2">
              <Pencil size={16} /> Edit Rider
            </button>
          </Link>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition">
            Clear Balance
          </button>
          <button className="px-4 py-2 bg-[#7E2B1733] text-[#ED7F64] border border-[#3A1A1A] text-sm font-medium rounded-lg hover:bg-[#3A1A1A] transition">
            Suspend Rider
          </button>
        </div>
      </div>

      {/* Reporting Period Filter */}
      <div className="mb-6 inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-2 rounded-lg text-xs font-semibold text-gray-400">
        REPORTING PERIOD 
        <span className="text-white ml-1 flex items-center gap-1 cursor-pointer">
          Last 30 Days <ChevronDown size={14} className="ml-1" />
        </span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-8 bg-[#1F2020] border border-[#2A2A2A] border-l-4 border-l-[#FF8A00] rounded-xl p-6 flex justify-between items-center">
          <div>
            <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Riders Revenue</h3>
            <p className="text-3xl font-bold mb-1">N 17,890,090.00</p>
            <p className="text-xs text-[#00E676]">~ 12.4% from last month</p>
          </div>
          <div className="flex gap-8 text-left">
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Completed<br/>Orders</h3>
              <p className="text-2xl font-semibold">1,565</p>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Rejected<br/>Orders</h3>
              <p className="text-2xl font-semibold">3</p>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Delivered<br/>Early</h3>
              <p className="text-2xl font-semibold">1,132</p>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Delivered<br/>Late</h3>
              <p className="text-2xl font-semibold">433</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-[#161616] border border-[#2A2A2A] border-l-4 border-l-[#FF8A00] rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
          <h3 className="text-[10px] text-[#FF8A00] font-bold uppercase tracking-widest mb-1 z-10">Rider Balance</h3>
          <p className="text-3xl font-bold z-10">N 280,000.00</p>
          <ShieldCheck size={120} strokeWidth={1} className="absolute -right-6 -bottom-6 text-white opacity-[0.03] z-0" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-8 border-b border-[#000] mb-8">
        {['Overview', 'Orders', 'Reviews'].map((tab) => {
          let Icon;
          if (tab === 'Overview') Icon = Info;
          if (tab === 'Orders') Icon = List;
          if (tab === 'Reviews') Icon = MessageSquare;

          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === 'Orders') setCurrentOrderPage(1);
                if (tab === 'Reviews') setCurrentReviewPage(1);
              }}
              className={`pb-3 text-sm font-medium flex items-center gap-2 transition-colors ${
                activeTab === tab 
                  ? 'text-[#FF8A00] border-b-2 border-[#FF8A00]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon size={16} />
              {tab}
            </button>
          );
        })}
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'Overview' && (
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-4">
            <h2 className="text-xs text-[#C69269] font-bold uppercase tracking-widest mb-4">Personal Identity</h2>
            
            <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Full Legal Name</p>
              <p className="text-lg">Marcus Thorne</p>
            </div>
            
            <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Address</p>
              <p className="text-lg">m.thorne@chowtap.com</p>
            </div>
            
            <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Mobile Number</p>
              <p className="text-lg">+1 (555) 902-3482</p>
            </div>
          </div>
          
          <div className="col-span-8">
            <h2 className="text-xs text-[#C69269] font-bold uppercase tracking-widest mb-4">Operating Campus</h2>
            
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#223d38]">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-color-dodge"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop")' }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent z-10"></div>
              
              <div className="absolute top-[45%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-10 h-10 bg-[#FFB300]/20 rounded-xl flex items-center justify-center animate-pulse">
                  <div className="w-2.5 h-2.5 bg-[#FFB300] rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-[10px] text-[#C69269] font-bold uppercase tracking-widest mb-1">McPherson University</p>
                <h3 className="text-2xl font-bold mb-1 text-white">McPherson Main Campus</h3>
                <p className="text-sm text-gray-400 flex items-center gap-1.5">
                  <MapPin size={14} className="text-gray-400" /> Ogun, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: ORDERS */}
      {activeTab === 'Orders' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-80">
              <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search Order ID..."
                value={searchOrderId}
                onChange={(e) => {
                  setSearchOrderId(e.target.value);
                  setCurrentOrderPage(1);
                }}
                className="w-full bg-[#161616] border border-[#2A2A2A] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gray-500 text-white placeholder-gray-500" 
              />
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                <Calendar size={16} /> {orderDateFilter} <ChevronDown size={14} />
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                <Filter size={16} /> {orderStatusFilter} <ChevronDown size={14} />
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-bold tracking-wider rounded-lg flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                <Download size={16} /> EXPORT CSV
              </button>
            </div>
          </div>

          <div className="bg-[#000000] border border-[#2A2A2A] rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs text-gray-500 uppercase bg-[#1F202080] tracking-wider border-b border-[#2A2A2A]">
                  <th className="p-4 font-bold">Order ID</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Vendor</th>
                  <th className="p-4 font-bold">Total</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Review</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {paginatedOrders.map((order, idx) => (
                  <tr key={idx} className="border-b border-[#2A2A2A] last:border-0">
                    <td className="p-4 font-semibold text-white">{order.id}</td>
                    <td className="p-4 text-gray-400">{order.date}</td>
                    <td className="p-4 font-medium text-white">{order.vendor}</td>
                    <td className="p-4 font-medium text-white">{order.total}</td>
                    <td className="p-4">
                      {order.status === 'DELIVERED' && <span className="px-2 py-1 text-[10px] font-bold bg-[#0A2E1F] text-[#00E676] rounded uppercase tracking-wider inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00E676]"></span>{order.status}</span>}
                      {order.status === 'REFUNDED' && <span className="px-2 py-1 text-[10px] font-bold bg-[#3A1212] text-[#FF5252] rounded uppercase tracking-wider inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FF5252]"></span>{order.status}</span>}
                      {order.status === 'PROCESSING' && <span className="px-2 py-1 text-[10px] font-bold bg-[#332200] text-[#FFB300] rounded uppercase tracking-wider inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FFB300]"></span>{order.status}</span>}
                    </td>
                    <td className="p-4 text-gray-400">{order.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <p>Showing <span className="text-white font-medium">{Math.min((currentOrderPage - 1) * itemsPerPage + 1, filteredOrders.length)}-{Math.min(currentOrderPage * itemsPerPage, filteredOrders.length)}</span> of {filteredOrders.length} orders</p>
            <div className="flex gap-1">
              <button 
                onClick={() => setCurrentOrderPage(prev => Math.max(prev - 1, 1))}
                disabled={currentOrderPage === 1}
                className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A] disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={16} />
              </button>
              {generatePaginationButtons(currentOrderPage, totalOrderPages).map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' && setCurrentOrderPage(page)}
                  disabled={page === '...'}
                  className={`w-8 h-8 flex items-center justify-center rounded transition ${
                    page === currentOrderPage
                      ? 'bg-[#FF8A00] text-black font-bold'
                      : page === '...'
                      ? 'bg-transparent text-gray-400 cursor-default'
                      : 'bg-[#1A1A1A] hover:bg-[#2A2A2A]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentOrderPage(prev => Math.min(prev + 1, totalOrderPages))}
                disabled={currentOrderPage === totalOrderPages}
                className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A] disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB: REVIEWS */}
      {activeTab === 'Reviews' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                Sort by: <span className="text-white">{reviewSort}</span> <ChevronDown size={14} />
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                Rating: <span className="text-white">{reviewRating}</span> <ChevronDown size={14} />
              </button>
            </div>
            <p className="text-sm text-[#6B7280]">Showing {Math.min((currentReviewPage - 1) * itemsPerPage + 1, filteredReviews.length)}-{Math.min(currentReviewPage * itemsPerPage, filteredReviews.length)} of {filteredReviews.length} reviews</p>
          </div>

          <div className="space-y-4">
            {paginatedReviews.map((review, idx) => (
              <div key={idx} className="bg-[#1F2020] border border-[#2A2A2A] rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 text-[#FFB782] font-bold text-sm flex items-center justify-center rounded-full shrink-0 bg-[#2A2A2A]">
                  {review.initials}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < review.rating ? 'text-[#FFB300] fill-[#FFB300]' : 'text-gray-600 fill-gray-600'} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
            <p>Showing <span className="text-white font-medium">{Math.min((currentReviewPage - 1) * itemsPerPage + 1, filteredReviews.length)}-{Math.min(currentReviewPage * itemsPerPage, filteredReviews.length)}</span> of {filteredReviews.length} reviews</p>
            <div className="flex gap-1">
              <button 
                onClick={() => setCurrentReviewPage(prev => Math.max(prev - 1, 1))}
                disabled={currentReviewPage === 1}
                className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A] disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={16} />
              </button>
              {generatePaginationButtons(currentReviewPage, totalReviewPages).map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' && setCurrentReviewPage(page)}
                  disabled={page === '...'}
                  className={`w-8 h-8 flex items-center justify-center rounded transition ${
                    page === currentReviewPage
                      ? 'bg-[#FF8A00] text-black font-bold'
                      : page === '...'
                      ? 'bg-transparent text-gray-400 cursor-default'
                      : 'bg-[#1A1A1A] hover:bg-[#2A2A2A]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentReviewPage(prev => Math.min(prev + 1, totalReviewPages))}
                disabled={currentReviewPage === totalReviewPages}
                className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A] disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Riderd;