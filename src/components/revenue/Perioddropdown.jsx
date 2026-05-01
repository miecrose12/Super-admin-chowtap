import React from 'react';
import { ChevronDown } from 'lucide-react';

const PeriodDropdown = ({ isOpen, selectedPeriod, periods, onToggle, onSelect, dropdownRef }) => {
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={onToggle}
        className="flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[140px]"
      >
        {selectedPeriod}
        <ChevronDown size={16} className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => onSelect(period)}
              className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                selectedPeriod === period ? 'text-[#E96B18] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeriodDropdown;