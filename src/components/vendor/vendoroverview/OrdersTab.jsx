import React, { useState } from 'react';
import { Search, Calendar, Filter, Download, ChevronDown, ArrowRight } from 'lucide-react';
import Pagination from './Pagination';
import { ORDERS_DATA } from '../../../utils/vendorData';

const OrdersTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(ORDERS_DATA.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentOrders = ORDERS_DATA.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="flex flex-col h-full bg-[#0e0e0e] text-white p-6 space-y-6">
      {/* Top Filters & Actions */}
      <OrderFilters />

      {/* Table */}
      <div className="w-full overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-widest bg-[#141414]/50">
              <th className="py-4 px-6 font-semibold">Order ID</th>
              <th className="py-4 px-4 font-semibold">Customer</th>
              <th className="py-4 px-4 font-semibold">Date / Time</th>
              <th className="py-4 px-4 font-semibold">Items</th>
              <th className="py-4 px-4 font-semibold">Total</th>
              <th className="py-4 px-4 font-semibold">Status</th>
              <th className="py-4 px-6 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentOrders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={ORDERS_DATA.length}
      />
    </div>
  );
};

const OrderFilters = () => (
  <div className="flex justify-between items-center w-full">
    <div className="relative w-72">
      <Search className="absolute left-3 top-2.5 text-neutral-500" size={16} />
      <input 
        type="text" 
        placeholder="Search Order ID..." 
        className="w-full bg-[#141414] border border-neutral-800/60 rounded-md py-2 pl-9 pr-4 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
      />
    </div>
    <div className="flex gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-neutral-800/60 text-neutral-300 hover:text-white rounded-md text-sm font-medium transition-colors">
        <Calendar size={14} className="text-neutral-500" />
        Last 7 Days
        <ChevronDown size={14} className="text-neutral-500" />
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-neutral-800/60 text-neutral-300 hover:text-white rounded-md text-sm font-medium transition-colors">
        <Filter size={14} className="text-neutral-500" /> 
        All Statuses
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-[#1c1c1c] border border-neutral-800/60 text-white hover:bg-[#252525] rounded-md text-sm font-bold tracking-wide transition-colors">
        <Download size={14} /> 
        EXPORT CSV
      </button>
    </div>
  </div>
);

const OrderRow = ({ order }) => (
  <tr className="border-b border-neutral-800/50 hover:bg-neutral-800/10 transition-colors group">
    <td className="py-4 px-6 font-medium text-neutral-200">{order.id}</td>
    <td className="py-4 px-4 flex items-center gap-3">
      <div className="w-8 h-8 bg-[#2a2a2a] text-[#e59850] font-bold text-xs rounded flex items-center justify-center">
        {order.init}
      </div>
      <span className="text-neutral-200 font-medium">{order.name}</span>
    </td>
    <td className="py-4 px-4">
      <div className="text-neutral-300 mb-0.5">{order.date}</div>
      <div className="text-[11px] text-neutral-500">{order.time}</div>
    </td>
    <td className="py-4 px-4 text-neutral-400 w-56 leading-snug">{order.items}</td>
    <td className="py-4 px-4 font-medium text-neutral-200">{order.total}</td>
    <td className="py-4 px-4">
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[10px] font-bold tracking-wider uppercase ${order.sColor} ${order.sBg}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
        {order.status}
      </div>
    </td>
    <td className="py-4 px-6 text-right">
      <button className="text-[#e59850] text-[11px] font-bold uppercase tracking-wider hover:text-[#f3ad68] flex items-center gap-1.5 justify-end w-full transition-colors">
        VIEW DETAILS <ArrowRight size={14} />
      </button>
    </td>
  </tr>
);

export default OrdersTab;