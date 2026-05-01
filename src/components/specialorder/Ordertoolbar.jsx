import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

export const OrderToolbar = () => (
  <div className="flex justify-between items-center mb-4">
    <div className="relative w-[320px]">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b6b6b]" size={16} />
      <input 
        type="text" 
        placeholder="Search order-id..." 
        className="w-full bg-[#0b0b0b] border border-[#2a2a2a] text-[#d1d1d1] text-sm pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:border-[#4a4a4a] transition-colors placeholder:text-[#6b6b6b]"
      />
    </div>
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 bg-[#18181a] border border-[#2a2a2a] text-[#6B7280] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#2a2a2a] hover:text-white transition-colors">
        <Filter size={14} /> STATUS: ALL
      </button>
      <button className="bg-[#DC781B] text-[#0b0b0b] text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-[#d06b1d] transition-colors uppercase tracking-wide">
        Release For Delivery
      </button>
      <button className="flex items-center gap-2 border border-[#2a2a2a] text-[#d1d1d1] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#18181a] transition-colors">
        <Download size={14} /> Export CSV
      </button>
    </div>
  </div>
);