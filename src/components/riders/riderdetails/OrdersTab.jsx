import React, { useState, useMemo } from 'react';
import { Search, Calendar, Filter, Download, ChevronDown } from 'lucide-react';
import { allOrders, filterOrders, paginateData, getTotalPages, ITEMS_PER_PAGE } from '../../../utils/RiderDetailsUtils';
import OrderStatusBadge from './OrderStatusBadge';
import PaginationControls from './PaginationControls';


const OrdersTab = () => {
  const [searchOrderId, setSearchOrderId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [orderDateFilter, setOrderDateFilter] = useState('Last 7 Days');
  const [orderStatusFilter, setOrderStatusFilter] = useState('All Statuses');

  const filteredOrders = useMemo(() => {
    return filterOrders(allOrders, searchOrderId, orderStatusFilter);
  }, [searchOrderId, orderStatusFilter]);

  const paginatedOrders = paginateData(filteredOrders, currentPage);
  const totalPages = getTotalPages(filteredOrders.length);

  const handleSearch = (value) => {
    setSearchOrderId(value);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search Order ID..."
            value={searchOrderId}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-[#161616] border border-[#2A2A2A] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gray-500 text-white placeholder-gray-500" 
          />
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
            <Calendar size={16} /> {orderDateFilter} <ChevronDown size={14} />
          </button>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
            <Filter size={16} /> {orderStatusFilter} <ChevronDown size={14} />
          </button>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-bold tracking-wider rounded-lg flex items-center gap-2 hover:bg-[#2A2A2A] transition">
            <Download size={16} /> EXPORT CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#000000] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-gray-500 uppercase bg-[#1F202080] tracking-wider border-b border-[#2A2A2A]">
              <th className="p-4 font-bold">Order ID</th>
              <th className="p-4 font-bold">Date</th>
              <th className="p-4 font-bold">Vendor</th>
              <th className="p-4 font-bold">Total</th>
              <th className="p-4 font-bold">Status</th>
              <th className="p-4 font-bold">Review</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginatedOrders.map((order, idx) => (
              <tr key={idx} className="border-b border-[#2A2A2A] last:border-0">
                <td className="p-4 font-semibold text-white">{order.id}</td>
                <td className="p-4 text-gray-400">{order.date}</td>
                <td className="p-4 font-medium text-white">{order.vendor}</td>
                <td className="p-4 font-medium text-white">{order.total}</td>
                <td className="p-4">
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className="p-4 text-gray-400">{order.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <PaginationControls 
        currentPage={currentPage}
        totalItems={filteredOrders.length}
        onPageChange={setCurrentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default OrdersTab;