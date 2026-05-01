import React from 'react';

export default function VendorToolbar() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="relative group">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search by merchant name..." 
          className="w-[320px] bg-[#0A0A0A] border border-[#000] text-white text-sm rounded-md pl-11 pr-4 py-2.5 focus:outline-none focus:border-gray-600 placeholder-gray-600"
        />
      </div>
      <button className="flex items-center space-x-2 bg-[#1A1A1A] hover:bg-[#222222] text-white text-sm px-4 py-2.5 rounded-md border border-gray-800 transition-colors">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M7 12h10M10 18h4" />
        </svg>
        <span className="text-gray-300 font-medium">Status</span>
      </button>
    </div>
  );
}