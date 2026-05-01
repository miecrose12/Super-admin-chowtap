import React from 'react';

export default function SearchFilters() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 bg-[#0A0A0A] rounded-md px-4 py-3 flex items-center">
        <svg className="w-4 h-4 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search by name, email..."
          className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-gray-600"
        />
      </div>

      <button className="bg-[#DC781B] hover:bg-[#e88832] transition-colors text-black font-bold px-5 py-3 rounded-md flex items-center gap-2 text-[13px]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Advanced filters
      </button>
    </div>
  );
}