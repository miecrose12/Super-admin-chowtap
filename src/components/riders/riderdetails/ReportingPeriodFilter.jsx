import React from 'react';
import { ChevronDown } from 'lucide-react';

const ReportingPeriodFilter = ({ selectedPeriod = 'Last 30 Days' }) => {
  return (
    <div className="mb-6 inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-2 rounded-lg text-xs font-semibold text-gray-400">
      REPORTING PERIOD 
      <span className="text-white ml-1 flex items-center gap-1 cursor-pointer hover:text-[#FF8A00] transition">
        {selectedPeriod} <ChevronDown size={14} className="ml-1" />
      </span>
    </div>
  );
};

export default ReportingPeriodFilter;