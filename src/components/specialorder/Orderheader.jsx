import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { PERIOD_OPTIONS, datePickerStyles } from '../../utils/specialorders';

export const OrderHeader = ({ 
  selectedPeriod, 
  setSelectedPeriod, 
  isDropdownOpen, 
  setIsDropdownOpen, 
  startDate, 
  setStartDate, 
  endDate, 
  setEndDate,
  dropdownRef 
}) => (
  <>
    <style>{datePickerStyles}</style>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-[28px] font-semibold text-white tracking-tight">Special Orders Management</h1>
      <div className="flex items-center gap-3 relative z-40">
        {selectedPeriod === 'Custom Range' && (
          <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd MMM, yyyy"
              placeholderText="Start Date"
              className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#DC781B] outline-none transition-colors"
            />
            <span className="text-[#666] text-[12px]">To</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd MMM, yyyy"
              placeholderText="End Date"
              className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#DC781B] outline-none transition-colors"
            />
            <button className="bg-[#DC781B] hover:bg-[#c96e21] text-[#0b0b0b] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
              Apply
            </button>
          </div>
        )}

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[150px]"
          >
            <Calendar size={16} className="text-[#888]" />
            {selectedPeriod}
            <ChevronDown size={16} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
              {PERIOD_OPTIONS.map((period) => (
                <button
                  key={period}
                  onClick={() => { setSelectedPeriod(period); setIsDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                    selectedPeriod === period ? 'text-[#DC781B] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </>
);