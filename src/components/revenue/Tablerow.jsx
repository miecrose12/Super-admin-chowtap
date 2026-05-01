import React from 'react';

const TableRow = ({ item }) => {
  const getStatusStyles = (status) => {
    const baseClasses = 'text-[9px] font-black px-2 py-1 rounded border tracking-tighter';
    
    if (status === 'SUCCESS') return `${baseClasses} bg-[#032512] text-[#10B981] border-[#063F1E]`;
    if (status === 'PENDING') return `${baseClasses} bg-[#332200] text-[#E96B18] border-[#663d00]`;
    return `${baseClasses} bg-[#3d0b0b] text-[#f87171] border-[#7a1a1a]`;
  };

  return (
    <tr className="hover:bg-[#111] transition-colors">
      <td className="px-6 py-5">
        <div className="text-[13px] font-bold text-[#eee] mb-0.5">{item.id}</div>
        <div className="text-[10px] text-[#71717A] font-mono">{item.ref}</div>
      </td>
      <td className="px-6 py-5 text-[13px] font-bold text-[#eee]">{item.customer}</td>
      <td className="px-6 py-5">
        <span className={getStatusStyles(item.status)}>
          {item.status}
        </span>
      </td>
      <td className="px-6 py-5 text-[13px] font-bold text-white">{item.amount}</td>
      <td className="px-6 py-5 text-[13px] text-[#888]">{item.type}</td>
      <td className="px-6 py-5 text-[12px] text-[#555] font-medium">{item.date}</td>
    </tr>
  );
};

export default TableRow;