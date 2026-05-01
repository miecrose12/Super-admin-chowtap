import React from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';

export const ProductToolbar = () => (
  <div className="flex justify-between items-center mb-4">
    <div className="relative w-[320px]">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b6b6b]" size={16} />
      <input 
        type="text" 
        placeholder="Search product name..." 
        className="w-full bg-[#0b0b0b] border border-[#2a2a2a] text-[#d1d1d1] text-sm pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:border-[#4a4a4a] transition-colors placeholder:text-[#6b6b6b]"
      />
    </div>
    <div className="flex items-center gap-3 text-[13px]">
      <button className="flex justify-between items-center w-44 bg-[#0b0b0b] border border-[#2a2a2a] text-[#6B7280] px-4 py-2.5 rounded-md hover:bg-[#141414] transition-colors">
        All Restaurants <ChevronDown size={14} className="text-[#6b6b6b]" />
      </button>
      <button className="flex justify-between items-center w-36 bg-[#0b0b0b] border border-[#2a2a2a] text-[#6B7280] px-4 py-2.5 rounded-md hover:bg-[#141414] transition-colors">
        Price Range <ChevronDown size={14} className="text-[#6b6b6b]" />
      </button>
      <button className="bg-[#DC781B] text-[#0b0b0b] p-2.5 rounded-md hover:bg-[#d06b1d] transition-colors">
        <Filter size={16} />
      </button>
    </div>
  </div>
);