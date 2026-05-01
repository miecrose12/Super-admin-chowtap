import React from 'react';

export const StatCard = ({ title, value, subtext }) => (
  <div className="bg-[#18181a] p-5 rounded-lg border border-[#2a2a2a] flex flex-col justify-center">
    <h3 className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest mb-3">{title}</h3>
    <div className="text-[28px] font-semibold text-white mb-2 leading-none">{value}</div>
    <p className="text-[#6b6b6b] text-xs">{subtext}</p>
  </div>
);