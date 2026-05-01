import React from 'react';

export const StatusBadge = ({ status }) => {
  const isDelivered = status === 'DELIVERED';
  return (
    <span className={`px-1.5 py-0.5 lg:px-2 lg:py-0.5 rounded text-[8px] lg:text-[9px] font-bold tracking-tighter border truncate ${
      isDelivered 
        ? 'text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/20' 
        : 'text-[#f58b1a] bg-[#f58b1a]/10 border-[#f58b1a]/20'
    }`}>
      {status}
    </span>
  );
};