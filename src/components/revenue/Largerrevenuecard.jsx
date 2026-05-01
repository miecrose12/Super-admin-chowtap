import React from 'react';

const LargeRevenueCard = () => {
  return (
    <div className="lg:col-span-2 bg-[#18181A] rounded-lg border border-[#27272A] border-l-[4px] border-l-[#E96B18] relative flex flex-col justify-between h-auto lg:h-[320px]">
      <div className="p-6 md:p-8 flex justify-between z-10 w-full relative">
        <div className="flex flex-col">
          <p className="text-[#A1A1AA] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Total Net Revenue</p>
          <h2 className="text-[40px] md:text-[48px] font-bold text-white leading-none tracking-tight mb-3">N 17,890,090.00</h2>
          <p className="text-[13px] text-[#10B981] font-semibold tracking-wide">~ 12.4% <span className="font-medium text-[#10B981]/80">from last month</span></p>
        </div>
        <div className="text-right flex flex-col items-end mt-1">
          <div className="pr-4 border-r border-[#3F3F46]/60 mb-2">
            <p className="text-[#71717A] text-[10px] font-bold tracking-[0.15em] uppercase text-right leading-[1.3]">Total<br/>Orders</p>
          </div>
          <p className="text-[28px] md:text-[32px] font-bold text-white leading-none">7,132</p>
        </div>
      </div>
      <div className="absolute bottom-5 left-6 right-6 h-[110px] bg-[#222225]/40 rounded-md overflow-hidden z-0">
        <svg viewBox="0 0 1000 110" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E96B18" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E96B18" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,90 C300,90 400,95 600,75 C800,55 900,30 1000,15 L1000,110 L0,110 Z" fill="url(#areaGrad)" />
          <path d="M0,90 C300,90 400,95 600,75 C800,55 900,30 1000,15" fill="none" stroke="#E96B18" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
};

export default LargeRevenueCard;