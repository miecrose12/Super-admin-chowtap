import React from 'react';

export default function StatusBadge({ status }) {
  const isActive = status === "ACTIVE";

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-[9px] font-extrabold tracking-widest ${
      isActive 
        ? "bg-[#00c564]/10 text-[#00c564]" 
        : "bg-red-500/10 text-red-500"
    }`}>
      {status}
    </span>
  );
}