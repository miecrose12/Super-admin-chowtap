import React from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatusBadge } from './Statusbadge';
import { getPaginationGroup, calculatePaginationValues } from '../../utils/Orders';

export default function Orderstable({ currentOrders, currentPage, onPageChange, totalItems, itemsPerPage }) {
  const navigate = useNavigate();
  const { totalPages, indexOfFirstItem, indexOfLastItem } = calculatePaginationValues(totalItems, currentPage, itemsPerPage);

  const handleRowClick = (orderId) => {
    navigate(`/orders/view`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="bg-black border border-[#1f1f1f] rounded-md w-full flex-1 flex flex-col min-h-[450px] relative z-10">
      
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse table-fixed">
          
          <thead>
            <tr className="bg-[#131313] border-b border-[#1f1f1f] text-[9px] lg:text-[10px] text-[#C7C7C7] font-bold uppercase tracking-wider">
              <th className="w-[20%] px-2 py-3 lg:px-3">User Profile</th>
              <th className="w-[11%] px-2 py-3 lg:px-2">Order ID</th>
              <th className="w-[11%] px-2 py-3 lg:px-2">Vendor</th>
              <th className="w-[11%] px-2 py-3 lg:px-2">Location</th>
              <th className="w-[10%] px-2 py-3 lg:px-2">Total</th>
              <th className="w-[10%] px-2 py-3 lg:px-2">Time</th>
              <th className="w-[10%] px-2 py-3 lg:px-2">Status</th>
              <th className="w-[17%] px-2 py-3 lg:px-3 text-right">Delivery</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-[#1f1f1f]/50">
            {currentOrders.map((order) => (
              <tr 
                key={order.id} 
                className="hover:bg-[#0a0a0a] transition-colors cursor-pointer group"
                onClick={() => handleRowClick(order.id)}
              >
                <td className="px-2 py-3 lg:px-3 truncate">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded bg-[#d4d4d4] flex items-center justify-center text-black text-[9px] lg:text-[10px] font-bold shrink-0">IR</div>
                    <div className="flex flex-col min-w-0"> 
                      <p className="text-[10px] lg:text-xs font-bold text-[#e5e5e5] leading-tight truncate">{order.name}</p>
                      <p className="text-[9px] lg:text-[10px] text-[#525252] truncate">{order.email}</p>
                    </div>
                  </div>
                </td>
                
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs text-[#e5e5e5] font-medium truncate">
                  {order.id}
                </td>
                
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs text-[#a3a3a3] truncate">
                  {order.vendor}
                </td>
                
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs text-[#a3a3a3] truncate">
                  {order.location}
                </td>
                
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs font-bold text-[#e5e5e5] truncate">
                  {order.total}
                </td>
                
                <td className="px-2 py-3 lg:px-2 truncate">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] lg:text-xs text-[#e5e5e5] font-medium truncate">{order.date}</span>
                    <span className="text-[9px] lg:text-[10px] text-[#525252] truncate">{order.time}</span>
                  </div>
                </td>
                
                <td className="px-2 py-3 lg:px-2 truncate">
                  <StatusBadge status={order.status} />
                </td>
                
                <td className="px-2 py-3 lg:px-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-[9px] lg:text-[11px] font-bold text-[#e5e5e5] whitespace-nowrap leading-tight">
                      {order.remaining}
                    </span>
                    {order.delivered && <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#22c55e] shrink-0" />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center px-3 lg:px-4 py-3 lg:py-4 border-t border-[#1f1f1f] bg-[#0E0E0E] mt-auto">
        <span className="text-[9px] lg:text-[11px] text-[#525252] hidden sm:block">
          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems}
        </span>
        <div className="flex items-center gap-1 ml-auto">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-1 transition-colors ${
              currentPage === 1 ? "text-[#333333] cursor-not-allowed" : "text-[#525252] hover:text-white"
            }`}
          >
            <ChevronLeft size={14} className="lg:w-4 lg:h-4" />
          </button>

          {getPaginationGroup(currentPage, totalPages).map((item, index) => (
            item === '...' ? (
              <span key={`dots-${index}`} className="text-[#525252] px-1 text-[10px] lg:text-[11px]">...</span>
            ) : (
              <button 
                key={item}
                onClick={() => onPageChange(item)}
                className={`w-5 h-5 lg:w-6 lg:h-6 rounded text-[10px] lg:text-[11px] font-bold transition-colors ${
                  currentPage === item 
                    ? "bg-[#f58b1a] text-black" 
                    : "text-[#525252] hover:text-white"
                }`}
              >
                {item}
              </button>
            )
          ))}

          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-1 transition-colors ${
              currentPage === totalPages ? "text-[#333333] cursor-not-allowed" : "text-[#525252] hover:text-white"
            }`}
          >
            <ChevronRight size={14} className="lg:w-4 lg:h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}