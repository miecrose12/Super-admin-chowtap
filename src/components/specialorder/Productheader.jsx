import React from 'react';
import { Link } from 'react-router-dom';

export const ProductHeader = () => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-[28px] font-semibold text-white tracking-tight">Products Management</h1>
    <div className="flex items-center gap-3">
      <button className="bg-[#1c1c1c] border border-[#2a2a2a] text-[#9CA3AF] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#2a2a2a] hover:text-white transition-colors uppercase tracking-wide">
        Open Products
      </button>
      <button className="border border-[#2a2a2a] text-[#9CA3AF] text-[13px] font-medium px-4 py-2.5 rounded-md hover:bg-[#1c1c1c] hover:text-white transition-colors">
        Shutdown Products
      </button>
     <Link to="/add-special">
  <button className="flex items-center gap-2 px-4 py-2 bg-[#f27a24] text-black rounded-md hover:bg-[#e56d1f] transition">
    <span className="text-lg leading-none mb-[2px]">+</span>
    ADD PRODUCT
  </button>
</Link>
    </div>
  </div>
);