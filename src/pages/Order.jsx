'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  CalendarDays, 
  Download, 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockOrders = [
  { id: 'Order-4467', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'NEW', remaining: '28 mins remaining' },
  { id: 'Order-4468', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'PENDING', remaining: '28 mins remaining' },
  { id: 'Order-4469', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'READY', remaining: '28 mins remaining' },
  { id: 'Order-4470', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'COMPLETED', remaining: '28 mins remaining' },
  { id: 'Order-4471', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'ARRIVED', remaining: '28 mins remaining' },
  { id: 'Order-4472', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'DELIVERED', remaining: '28 mins', delivered: true },
  { id: 'Order-4473', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'DELIVERED', remaining: '28 mins', delivered: true },
  { id: 'Order-4474', name: 'Raheem Inioluwa', email: 'inioluwa@gmail.com', vendor: 'Abula Spot', location: 'Atuwatse Hall', total: '₦ 2,560.00', date: '12/02/2025', time: '10:34AM', status: 'DELIVERED', remaining: '28 mins', delivered: true },
];

const StatusBadge = ({ status }) => {
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

export default function Orders() {
  const navigate = useNavigate();

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Date Range');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDateOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const periods = [
    'Today', 'Yesterday', 'This week', 'This month', 
    'Last month', 'This year', 'All time', 'Custom period'
  ];

  const handleSelectPeriod = (period) => {
    setSelectedPeriod(period);
    setIsDateOpen(false);
  };

  const isCustomRange = selectedPeriod === 'Custom period';

  const handleRowClick = (orderId) => {
    navigate(`/orders/view`);
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-4 sm:p-6 lg:p-8 font-sans antialiased w-full overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4 mb-6 lg:mb-8">
        <h1 className="text-xl lg:text-2xl font-bold tracking-tight shrink-0">Order Management</h1>
        
        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
          {isCustomRange && (
            <div className="flex items-center gap-1.5 lg:gap-2 animate-in fade-in zoom-in duration-200">
              <input 
                type="text" 
                defaultValue="12/02/2025"
                className="bg-[#171717] border border-[#262626] text-[#a3a3a3] px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-[10px] lg:text-xs w-[90px] lg:w-[100px] focus:outline-none focus:border-[#f58b1a] transition-colors" 
              />
              <span className="text-[#525252] text-[10px] lg:text-xs font-medium">To</span>
              <input 
                type="text" 
                placeholder="Select date"
                className="bg-[#171717] border border-[#262626] text-[#a3a3a3] px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-[10px] lg:text-xs w-[90px] lg:w-[100px] focus:outline-none focus:border-[#f58b1a] transition-colors" 
              />
              <button className="bg-[#f58b1a] hover:bg-[#e07b14] text-black font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-[10px] lg:text-xs transition-colors ml-1">
                Apply
              </button>
            </div>
          )}

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDateOpen(!isDateOpen)}
              className={`flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-2 border rounded-md text-[10px] lg:text-xs transition-colors min-w-[110px] lg:min-w-[120px] justify-center ${
                selectedPeriod !== 'Date Range' && !isCustomRange
                  ? 'bg-[#1f1f1f] border-[#404040] text-[#e5e5e5]' 
                  : 'bg-[#171717] border-[#262626] text-[#a3a3a3] hover:bg-[#1f1f1f]'
              }`}
            >
              <CalendarDays size={14} className={selectedPeriod !== 'Date Range' ? 'text-[#f58b1a]' : ''} />
              {selectedPeriod}
            </button>

            {isDateOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-[140px] lg:w-[160px] bg-[#171717] border border-[#262626] rounded-md shadow-2xl py-1 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => handleSelectPeriod(period)}
                    className={`w-full text-center px-3 py-2 lg:px-4 lg:py-2.5 text-[10px] lg:text-xs transition-colors ${
                      selectedPeriod === period 
                        ? 'text-white bg-[#262626] font-medium' 
                        : 'text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-[#e5e5e5]'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#f58b1a] rounded-md text-[10px] lg:text-xs font-bold text-black hover:bg-[#e07b14] transition-colors">
            <Download size={14} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        {[
          { label: 'Total Orders', val: '12,480', sub: 'Orders count' },
          { label: 'Delivered', val: '12,390', sub: 'Completed' },
          { label: 'Active', val: '142', sub: 'In progress' },
          { label: 'Revenue', val: '₦82,780', sub: 'Total vendor revenue' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1F2020] p-3 lg:p-4 rounded-lg border border-[#1f1f1f]">
            <p className="text-[9px] lg:text-[10px] text-[#6B7280] font-bold uppercase tracking-widest mb-1 lg:mb-2 truncate">{stat.label}</p>
            <h2 className="text-lg lg:text-2xl xl:text-3xl font-bold mb-1 truncate">{stat.val}</h2>
            <p className="text-[9px] lg:text-[10px] text-[#6B7280] font-medium truncate">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Table Filters */}
      <div className="flex justify-between items-center mb-4 gap-4">
        <div className="relative w-full max-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" size={14} />
          <input 
            type="text" 
            placeholder="Search orders..." 
            className="w-full bg-transparent border border-[#1f1f1f] text-[10px] lg:text-xs rounded-md pl-9 pr-4 py-1.5 lg:py-2 focus:border-[#404040] outline-none placeholder-[#404040] transition-colors"
          />
        </div>
        <button className="flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:py-2 bg-[#171717] border border-[#262626] rounded-md text-[10px] lg:text-xs text-[#a3a3a3] hover:bg-[#1f1f1f] transition-colors shrink-0">
          <SlidersHorizontal size={14} />
          Status
        </button>
      </div>

      {/* Main Table Container */}
      <div className="bg-black border border-[#1f1f1f] rounded-md w-full flex-1">
        
        <table className="w-full text-left border-collapse table-fixed">
          
          <thead>
            <tr className="bg-[#131313] border-b border-[#1f1f1f] text-[9px] lg:text-[10px] text-[#C7C7C7] font-bold uppercase tracking-wider">
              {/* RE-BALANCED PERCENTAGES: Stolen from shorter columns to give to Delivery */}
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
            {mockOrders.map((order, index) => (
              <tr 
                key={index} 
                className="hover:bg-[#0a0a0a] transition-colors cursor-pointer group"
                onClick={() => handleRowClick(order.id)}
              >
                {/* User Profile */}
                <td className="px-2 py-3 lg:px-3 truncate">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded bg-[#d4d4d4] flex items-center justify-center text-black text-[9px] lg:text-[10px] font-bold shrink-0">IR</div>
                    <div className="flex flex-col min-w-0"> 
                      <p className="text-[10px] lg:text-xs font-bold text-[#e5e5e5] leading-tight truncate">{order.name}</p>
                      <p className="text-[9px] lg:text-[10px] text-[#525252] truncate">{order.email}</p>
                    </div>
                  </div>
                </td>
                
                {/* Order ID */}
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs text-[#e5e5e5] font-medium truncate">
                  {order.id}
                </td>
                
                {/* Vendor */}
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs text-[#a3a3a3] truncate">
                  {order.vendor}
                </td>
                
                {/* Location */}
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs text-[#a3a3a3] truncate">
                  {order.location}
                </td>
                
                {/* Total */}
                <td className="px-2 py-3 lg:px-2 text-[10px] lg:text-xs font-bold text-[#e5e5e5] truncate">
                  {order.total}
                </td>
                
                {/* Time */}
                <td className="px-2 py-3 lg:px-2 truncate">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] lg:text-xs text-[#e5e5e5] font-medium truncate">{order.date}</span>
                    <span className="text-[9px] lg:text-[10px] text-[#525252] truncate">{order.time}</span>
                  </div>
                </td>
                
                {/* Status */}
                <td className="px-2 py-3 lg:px-2 truncate">
                  <StatusBadge status={order.status} />
                </td>
                
                {/* Delivery - Removed truncate so the text is fully visible, and allowed wrap if absolutely forced */}
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

        {/* Pagination Footer */}
        <div className="flex justify-between items-center px-3 lg:px-4 py-3 lg:py-4 border-t border-[#1f1f1f] bg-[#0E0E0E]">
          <span className="text-[9px] lg:text-[11px] text-[#525252] hidden sm:block">Showing 1-10 of 14560</span>
          <div className="flex items-center gap-1 ml-auto">
            <button className="p-1 text-[#525252] hover:text-white transition-colors"><ChevronLeft size={14} className="lg:w-4 lg:h-4" /></button>
            <button className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-[#f58b1a] text-black text-[10px] lg:text-[11px] font-bold">1</button>
            <button className="w-5 h-5 lg:w-6 lg:h-6 text-[#525252] text-[10px] lg:text-[11px] hover:text-white transition-colors">2</button>
            <button className="w-5 h-5 lg:w-6 lg:h-6 text-[#525252] text-[10px] lg:text-[11px] hover:text-white transition-colors">3</button>
            <span className="text-[#525252] px-1 text-[10px] lg:text-[11px]">...</span>
            <button className="px-1 text-[#525252] text-[10px] lg:text-[11px] hover:text-white transition-colors">1458</button>
            <button className="p-1 text-[#525252] hover:text-white transition-colors"><ChevronRight size={14} className="lg:w-4 lg:h-4" /></button>
          </div>
        </div>

      </div>
      
    </div>
  );
}