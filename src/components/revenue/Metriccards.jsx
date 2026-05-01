import React from 'react';
import { ShieldCheck } from 'lucide-react';
import LargeRevenueCard from './Largerrevenuecard';
import MetricCard from './Metricard';


const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 relative z-10">
      <LargeRevenueCard />

      <div className="flex flex-col gap-5 h-auto lg:h-[320px]">
        <MetricCard
          label="Total Net Profit"
          value="N 280,000.00"
          subtext="~ 12.4% from last month"
          icon={ShieldCheck}
          fullHeight
        />

        <div className="bg-[#18181A] rounded-lg p-6 md:p-7 border border-[#27272A] border-r-[4px] border-r-[#E96B18] relative overflow-hidden flex-1 flex flex-col justify-center min-h-[140px]">
          <div className="relative z-10 w-full flex flex-col h-full justify-between">
            <div>
              <p className="text-[#A1A1AA] text-[11px] font-bold tracking-[0.15em] uppercase mb-3">Average Order Value</p>
              <h2 className="text-[32px] font-bold text-white leading-none tracking-tight">N 2,560.00</h2>
            </div>
            <div className="w-full mt-2">
              <p className="text-[11px] mb-3 font-medium tracking-wide"><span className="text-[#71717A]">Target: </span><span className="text-[#A1A1AA]">N 3,000.00</span></p>
              <div className="w-full bg-[#3F3F46]/40 h-[6px] rounded-full overflow-hidden">
                <div className="bg-[#FFB782] w-[65%] h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;