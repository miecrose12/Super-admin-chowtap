import React from 'react';
import StatusBadge from './Statusbadge';


export default function UserTableRow({ row, onRowClick }) {
  return (
    <tr 
      onClick={onRowClick}
      className="hover:bg-[#151515] transition-colors group cursor-pointer"
    >
      {/* User Profile */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#E5E5E5] text-black font-bold rounded flex items-center justify-center text-[11px] tracking-tight">
            IR
          </div>
          <div>
            <p className="font-semibold text-[13px] text-gray-200">{row.name}</p>
            <p className="text-[11px] text-gray-500 mt-0.5">{row.email}</p>
          </div>
        </div>
      </td>

      {/* Phone Number */}
      <td className="px-6 py-4 text-[12px] font-medium text-gray-300">
        {row.phone}
      </td>

      {/* Orders */}
      <td className="px-6 py-4 text-[12px] font-medium text-gray-300">
        {row.orders}
      </td>

      {/* Total Spent */}
      <td className="px-6 py-4 text-[12px] font-semibold text-gray-200">
        {row.spent}
      </td>

      {/* Last Activity */}
      <td className="px-6 py-4">
        <p className="text-[12px] text-gray-300 font-medium">{row.date}</p>
        <p className="text-[11px] text-gray-500 mt-0.5">{row.time}</p>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <StatusBadge status={row.status} />
      </td>
    </tr>
  );
}