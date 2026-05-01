import React from 'react';

import { getStatusStyle } from '../../utils/specialorders';
import { CustomCheckbox } from './Customcheckbox';

export const OrdersTable = ({ orders, currentOrders, onCheckOrder, onCheckAll }) => {
  const allCurrentChecked = currentOrders.length > 0 && currentOrders.every(o => o.checked);

  return (
    <div className="bg-[#000000] rounded-lg border border-[#2a2a2a] overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[#2a2a2a] bg-[#131313]">
            <th className="py-4 px-6 w-12">
              <CustomCheckbox 
                checked={allCurrentChecked} 
                onChange={onCheckAll} 
              />
            </th>
            <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Order ID</th>
            <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Customer Name</th>
            <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Restaurant</th>
            <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Status</th>
            <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Total Amount</th>
            <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Pickup Day</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1e1e1e]">
          {currentOrders.map((order) => (
            <tr key={order.id} className="hover:bg-[#141414] transition-colors group">
              <td className="py-4 px-6">
                <CustomCheckbox checked={order.checked} onChange={() => onCheckOrder(order.id)} />
              </td>
              <td className="py-4 px-6 text-[#DC781B] font-semibold text-[13px]">{order.id}</td>
              <td className="py-4 px-6 text-[#d1d1d1] text-[13px] font-medium">{order.name}</td>
              <td className="py-4 px-6 text-[#6B7280] text-[13px]">{order.restaurant}</td>
              <td className="py-4 px-6">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  {order.status}
                </span>
              </td>
              <td className="py-4 px-6 text-white font-semibold text-[13px]">{order.amount}</td>
              <td className="py-4 px-6 text-[#d1d1d1] text-[13px]">{order.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};