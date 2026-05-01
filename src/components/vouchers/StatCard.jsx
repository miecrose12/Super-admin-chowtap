import React from 'react';

const StatCard = ({ title, value, subtext }) => {
  return (
    <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">{title}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      {subtext && <div className="text-[11px] text-gray-500">{subtext}</div>}
      {!subtext && <div className="h-[2px] w-12 bg-[#DC781B]"></div>}
    </div>
  );
};

export default StatCard;