import React from 'react';
import { ShieldCheck } from 'lucide-react';

const StatCard = ({ label, value, subtext }) => (
  <div>
    <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</h3>
    <p className="text-2xl font-semibold">{value}</p>
    {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
  </div>
);

const StatisticsCards = ({ 
  totalRevenue = 'N 17,890,090.00',
  revenueGrowth = '~ 12.4% from last month',
  completedOrders = 1565,
  rejectedOrders = 3,
  deliveredEarly = 1132,
  deliveredLate = 433,
  riderBalance = 'N 280,000.00'
}) => {
  return (
    <div className="grid grid-cols-12 gap-6 mb-8">
      {/* Main Revenue Card */}
      <div className="col-span-8 bg-[#1F2020] border border-[#2A2A2A] border-l-4 border-l-[#FF8A00] rounded-xl p-6 flex justify-between items-center">
        <div>
          <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Riders Revenue</h3>
          <p className="text-3xl font-bold mb-1">{totalRevenue}</p>
          <p className="text-xs text-[#00E676]">{revenueGrowth}</p>
        </div>
        <div className="flex gap-8 text-left">
          <StatCard label="Completed Orders" value={completedOrders.toLocaleString()} />
          <StatCard label="Rejected Orders" value={rejectedOrders} />
          <StatCard label="Delivered Early" value={deliveredEarly.toLocaleString()} />
          <StatCard label="Delivered Late" value={deliveredLate.toLocaleString()} />
        </div>
      </div>

      {/* Balance Card */}
      <div className="col-span-4 bg-[#161616] border border-[#2A2A2A] border-l-4 border-l-[#FF8A00] rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
        <h3 className="text-[10px] text-[#FF8A00] font-bold uppercase tracking-widest mb-1 z-10">Rider Balance</h3>
        <p className="text-3xl font-bold z-10">{riderBalance}</p>
        <ShieldCheck size={120} strokeWidth={1} className="absolute -right-6 -bottom-6 text-white opacity-[0.03] z-0" />
      </div>
    </div>
  );
};

export default StatisticsCards;