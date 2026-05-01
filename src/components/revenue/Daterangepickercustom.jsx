import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePickerCustom = ({ startDate, endDate, onStartChange, onEndChange, onApply }) => {
  return (
    <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200">
      <div className="relative">
        <DatePicker
          selected={startDate}
          onChange={onStartChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd MMM, yyyy"
          placeholderText="Start Date"
          className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#E96B18] outline-none transition-colors"
        />
      </div>
      <span className="text-[#666] text-[12px]">To</span>
      <div className="relative">
        <DatePicker
          selected={endDate}
          onChange={onEndChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd MMM, yyyy"
          placeholderText="End Date"
          className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#E96B18] outline-none transition-colors"
        />
      </div>
      <button onClick={onApply} className="bg-[#E96B18] hover:bg-[#cc5910] text-white font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
        Apply
      </button>
    </div>
  );
};

export default DateRangePickerCustom;