import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('favorites');

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
      case 'trend-up':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'trend-flat':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        );
      case 'star':
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      case 'search':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'filter':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        );
      case 'coffee':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h13M4 8v10a2 2 0 002 2h7a2 2 0 002-2V8M4 8a2 2 0 012-2h9a2 2 0 012 2m-3-4v4m-4-4v4m-4-4v4" />
          </svg>
        );
      case 'utensils':
        return (
          <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderStars = (count) => {
    return (
      <div className="flex text-[#FF8A00] gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Icon key={i} name="star" className={`w-3 h-3 ${i < count ? 'text-[#e86b35]' : 'text-neutral-600'}`} />
        ))}
      </div>
    );
  };

  const wishlistItems = [
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
    { name: 'Jollof Rice', price: 'N200.00', vendor: 'Abula Spot' },
  ];

  return (
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
            {/* EDIT CUSTOMER BUTTON NOW LINKS TO /edit-customer */}
            <Link
              to="/users/edit-customer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-[#333]"
            >
              <Icon name="edit" className="w-4 h-4" />
              Edit Customer
            </Link>

            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#4a1c1c] hover:bg-[#5a2020] text-[#ff6b6b] px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-[#6a2020]">
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
              onClick={() => setActiveTab(tab)}
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
    {/* Left Col: Wishlist — spans 2 cols */}
    <div className="lg:col-span-2 flex flex-col gap-5">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-[19px] font-semibold text-white tracking-wide">Wishlist</h2>
        <span className="text-xs text-neutral-400 font-medium tracking-wide">5 Items Saved</span>
      </div>

      {/* 3-column grid matching the screenshot */}
      <div className="grid grid-cols-3 gap-4">
        {wishlistItems.map((item, idx) => (
          <div key={idx} className="relative h-44 rounded-xl overflow-hidden border border-white/5 group">
            <img
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image || "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600"}
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
            
            {/* Aligned Footer Content */}
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
              <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] flex items-center justify-center border border-[#262626]">
                <span className="text-[#dfa375] font-bold text-sm">1</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-white">Caramel Latte</span>
                <span className="text-[10px] text-neutral-500 font-medium">Ordered 16 times</span>
              </div>
            </div>
            {/* Trend Up Arrow */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#22c55e]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          </div>
          
          {/* Rank 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] flex items-center justify-center border border-[#262626]">
                <span className="text-[#dfa375] font-bold text-sm">2</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-white">Garlic Fries</span>
                <span className="text-[10px] text-neutral-500 font-medium">Ordered 12 times</span>
              </div>
            </div>
            {/* Flat Line */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          
          {/* Rank 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] flex items-center justify-center border border-[#262626]">
                <span className="text-[#dfa375] font-bold text-sm">3</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-white">Avocado Toast</span>
                <span className="text-[10px] text-neutral-500 font-medium">Ordered 9 times</span>
              </div>
            </div>
            {/* Trend Up Arrow */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#22c55e]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          </div>
        </div>
      </div>

      {/* Top Vendors */}
      <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
        <h3 className="text-[10px] font-bold text-[#dfa375] tracking-[0.2em] uppercase mb-5">Top Vendors</h3>
        <div className="flex flex-col gap-3">
          {/* Vendor 1 */}
          <div className="bg-[#1a1a1a] p-3 rounded-xl flex items-center justify-between border border-[#262626]">
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#222] flex items-center justify-center border border-[#2a2a2a]">
                {/* Coffee Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#dfa375]"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-white">Green Leaf Cafe</span>
                <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-medium tracking-wide">
                  {/* Star Icon */}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  4.8 RATING
                </div>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-[#dfa375]">22 orders</span>
          </div>

          {/* Vendor 2 */}
          <div className="bg-[#1a1a1a] p-3 rounded-xl flex items-center justify-between border border-[#262626]">
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#222] flex items-center justify-center border border-[#2a2a2a]">
                {/* Utensils Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#dfa375]"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-medium text-white">Urban Bites</span>
                <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-medium tracking-wide">
                  {/* Star Icon */}
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
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 bg-black border border-[#1a1a1a] rounded-md leading-5 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-[#e87b35] sm:text-sm transition-colors"
            placeholder="Search Order ID or Vendor..."
          />
        </div>
        
        {/* Date Range Button */}
        <button className="hidden md:flex items-center gap-2 px-3 py-2 border border-[#1a1a1a] rounded-md bg-[#111111] text-neutral-400 text-sm hover:bg-[#1a1a1a] transition-colors whitespace-nowrap">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Date Range
        </button>

        {/* Status Filter Button */}
        <button className="hidden md:flex items-center gap-2 px-3 py-2 border border-[#1a1a1a] rounded-md bg-[#111111] text-neutral-400 text-sm hover:bg-[#1a1a1a] transition-colors whitespace-nowrap">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Status: All
        </button>
      </div>
      
      {/* Clear Filters */}
      <button className="text-[#FFB782] text-sm font-semibold hover:text-[#ff9c5e] transition-colors w-full md:w-auto text-right">
        Clear Filters
      </button>
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
          {/* Row 1 */}
          <tr className="hover:bg-[#0a0a0a] transition-colors group">
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">#Order-4567</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">Oct 24, 2023 • 18:42</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">Taco Bell - Downtown</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">N2,580.00</td>
            <td className="px-6 py-5 whitespace-nowrap">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a2717] text-[10px] font-bold text-[#10b981] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
                DELIVERED
              </span>
            </td>
            <td className="px-6 py-5 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <div className="flex text-[#FFB782]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] text-neutral-500 italic">"Food arrived pipin..."</span>
              </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="hover:bg-[#0a0a0a] transition-colors group">
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">#Order-4567</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">Oct 24, 2023 • 18:42</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">Taco Bell - Downtown</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">N2,580.00</td>
            <td className="px-6 py-5 whitespace-nowrap">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a2717] text-[10px] font-bold text-[#10b981] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></span>
                DELIVERED
              </span>
            </td>
            <td className="px-6 py-5 whitespace-nowrap">
              <div className="flex items-center gap-3">
                <div className="flex text-[#FFB782]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] text-neutral-500 italic">"Food arrived pipin..."</span>
              </div>
            </td>
          </tr>

          {/* Row 3 */}
          <tr className="hover:bg-[#0a0a0a] transition-colors group">
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">#Order-8903</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">Oct 20, 2023 • 20:10</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">Burger King</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">N2,580.00</td>
            <td className="px-6 py-5 whitespace-nowrap">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2c0e0e] text-[10px] font-bold text-[#ef4444] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
                REFUNDED
              </span>
            </td>
            <td className="px-6 py-5 whitespace-nowrap text-[11px] text-[#333] italic">No review provided</td>
          </tr>

          {/* Row 4 */}
          <tr className="hover:bg-[#0a0a0a] transition-colors group">
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">#Order-5674</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">Oct 18, 2023 • 19:15</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">The Pasta House</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">N2,580.00</td>
            <td className="px-6 py-5 whitespace-nowrap">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2b1708] text-[10px] font-bold text-[#FFB782] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#FFB782] rounded-full"></span>
                PROCESSING
              </span>
            </td>
            <td className="px-6 py-5 whitespace-nowrap text-[11px] text-[#333] italic">Order in progress</td>
          </tr>

          {/* Row 5 */}
          <tr className="hover:bg-[#0a0a0a] transition-colors group">
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">#Order-5674</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs text-neutral-400">Oct 18, 2023 • 19:15</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">The Pasta House</td>
            <td className="px-6 py-5 whitespace-nowrap text-xs font-semibold text-neutral-200">N2,580.00</td>
            <td className="px-6 py-5 whitespace-nowrap">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2b1708] text-[10px] font-bold text-[#FFB782] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-[#FFB782] rounded-full"></span>
                PROCESSING
              </span>
            </td>
            <td className="px-6 py-5 whitespace-nowrap text-[11px] text-[#333] italic">Order in progress</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex items-center justify-between mt-8">
      <span className="text-xs text-neutral-500 tracking-wide">
        Showing <span className="font-semibold text-neutral-300">1-5</span> of <span className="font-semibold text-neutral-300">142</span> orders
      </span>
      <div className="flex items-center gap-1.5">
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#111] text-neutral-500 border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors text-xs font-medium">&lt;</button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#e87b35] text-black font-bold text-xs">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#111] text-neutral-400 border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors text-xs font-medium">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#111] text-neutral-400 border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors text-xs font-medium">3</button>
        <span className="w-8 h-8 flex items-center justify-center text-neutral-600 text-xs tracking-widest">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#111] text-neutral-400 border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors text-xs font-medium">29</button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#111] text-neutral-500 border border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors text-xs font-medium">&gt;</button>
      </div>
    </div>
  </div>
)}

          {/* ====================== VOUCHER HISTORY TAB ====================== */}
          {activeTab === 'voucher-history' && (
            <div className="flex flex-col">
              {/* Filter Bar – Search on left, Date Range + Status buttons pushed to far right */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                
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
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button className="hidden md:flex items-center gap-2 px-3 py-2 border border-[#2a2a2a] rounded-md bg-[#181818] text-neutral-400 text-sm hover:bg-[#222] transition-colors whitespace-nowrap">
                    <Icon name="calendar" className="h-4 w-4" />
                    Date Range
                  </button>
                  <button className="hidden md:flex items-center gap-2 px-3 py-2 border border-[#2a2a2a] rounded-md bg-[#181818] text-neutral-400 text-sm hover:bg-[#222] transition-colors whitespace-nowrap">
                    <Icon name="filter" className="h-4 w-4" />
                    Status: All
                  </button>
                </div>
              </div>

              {/* Table remains unchanged */}
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
                    {/* Row 1 */}
                    <tr className="bg-[#000] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">Debit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">Oct 24, 2023 • 18:42</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">#Order-5674 - Voucher</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white">N2,580.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="inline-flex items-center justify-end gap-1.5 text-[10px] font-bold text-[#22c55e] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span>
                          SUCCESS
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">trf-Order-5768-785788949</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="bg-[#000] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">Credit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">Oct 24, 2023 • 18:42</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">VoucherPurchase</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white">N2,580.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="inline-flex items-center justify-end gap-1.5 text-[10px] font-bold text-[#22c55e] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span>
                          SUCCESS
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">trf-Order-5768-785788949</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="bg-[#000] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">Debit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">Oct 20, 2023 • 20:10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">Gift Received</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white">N2,580.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="inline-flex items-center justify-end gap-1.5 text-[10px] font-bold text-[#ef4444] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[#ef4444] rounded-full"></span>
                          FAILED
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">trf-Order-5768-785788949</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="bg-[#000] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">Credit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">Oct 18, 2023 • 19:15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">Student</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white">N2,580.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="inline-flex items-center justify-end gap-1.5 text-[10px] font-bold text-[#FFB782] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[#FFB782] rounded-full"></span>
                          PENDING
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">trf-Order-5768-785788949</td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="bg-[#000] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-white">Credit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400 text-right">Oct 18, 2023 • 19:15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white font-medium">Student</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-white">N2,580.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="inline-flex items-center justify-end gap-1.5 text-[10px] font-bold text-[#FFB782] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[#FFB782] rounded-full"></span>
                          PENDING
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-[#E7E5E5]">trf-Order-5768-785788949</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination remains unchanged */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-neutral-400">Showing <span className="font-bold text-white">1-5</span> of <span className="font-bold text-white">142</span> orders</span>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1a1a1a] text-neutral-500 border border-[#333] hover:bg-[#222]">&lt;</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#e86b35] text-black font-bold">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1a1a1a] text-neutral-400 border border-[#333] hover:bg-[#222]">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1a1a1a] text-neutral-400 border border-[#333] hover:bg-[#222]">3</button>
                  <span className="w-8 h-8 flex items-center justify-center text-neutral-500">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1a1a1a] text-neutral-400 border border-[#333] hover:bg-[#222]">29</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1a1a1a] text-neutral-500 border border-[#333] hover:bg-[#222]">&gt;</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;