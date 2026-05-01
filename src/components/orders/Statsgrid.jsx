import React from 'react';
import { statsData } from '../../utils/Orders';

export default function Statsgrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 lg:mb-8 relative z-10">
      {statsData.map((stat, i) => (
        <div 
          key={i} 
          className="bg-[#1C1C1C] p-5 lg:p-6 rounded-lg border border-[#2D2D2D] shadow-sm flex flex-col justify-center"
        >
          <p className="text-[10px] text-[#7A7A7A] font-bold uppercase tracking-widest mb-3 truncate">
            {stat.label}
          </p>
          <h2 className="text-xl lg:text-2xl font-bold text-[#F3F3F3] truncate tracking-wide">
            {stat.val}
          </h2>
        </div>
      ))}
    </div>
  );
}