import React from 'react';

export default function TotalUsersCard({ totalItems }) {
  return (
    <div className="bg-[#1C1C1C] rounded-lg px-5 py-5 xl:px-6 xl:py-6 border-l-[3px] border-[#DC781B] flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
      <div className="flex-shrink-0">
        <p className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#A1A1AA] mb-2 uppercase">
          TOTAL USERS
        </p>
        <div className="flex flex-col">
          <span className="text-[2rem] lg:text-[2.25rem] font-bold leading-none mb-1.5 text-white">
            {totalItems.toLocaleString()}
          </span>
          <span className="text-[#10B981] text-[10px] lg:text-xs font-semibold tracking-wide flex items-center gap-1">
            ~ 12.4% <span className="text-[#00c564]/80 font-medium">from last month</span>
          </span>
        </div>
      </div>

      {/* Right Side Stats */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 xl:gap-8 pr-0 xl:pr-2">
        <div className="flex flex-col">
          <p className="text-[9px] lg:text-[10px] font-bold tracking-widest text-[#A1A1AA] mb-2 uppercase">
            Completed<br />Registration
          </p>
          <span className="text-[1.5rem] lg:text-[1.75rem] font-bold leading-none text-white">
            2,132
          </span>
        </div>
        
        <div className="hidden sm:block w-px h-10 lg:h-12 bg-gray-700/60"></div>
        
        <div className="flex flex-col">
          <p className="text-[9px] lg:text-[10px] font-bold tracking-widest text-[#A1A1AA] mb-2 uppercase">
            Incomplete<br />Registration
          </p>
          <span className="text-[1.5rem] lg:text-[1.75rem] font-bold leading-none text-white">
            124
          </span>
        </div>
      </div>
    </div>
  );
}