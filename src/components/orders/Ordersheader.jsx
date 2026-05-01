import React, { useState, useRef, useEffect } from 'react';
import { CalendarDays, Download } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { datePeriods } from '../../utils/Orders';


export default function Ordersheader() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Date Range');
  const [startDate, setStartDate] = useState(new Date("2025-02-12"));
  const [endDate, setEndDate] = useState(null);
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

  const handleSelectPeriod = (period) => {
    setSelectedPeriod(period);
    setIsDateOpen(false);
  };

  const isCustomRange = selectedPeriod === 'Custom period';

  return (
    <>
      <style>{`
        .react-datepicker {
          background-color: #171717 !important;
          border-color: #262626 !important;
          font-family: inherit !important;
          color: #d4d4d4 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
        }
        .react-datepicker__header {
          background-color: #131313 !important;
          border-bottom-color: #262626 !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
          color: #f5f5f5 !important;
        }
        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          color: #a3a3a3 !important;
        }
        .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
          background-color: #262626 !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
        .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range {
          background-color: #f58b1a !important;
          color: #000 !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(245, 139, 26, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4 mb-6 lg:mb-8">
        <h1 className="text-xl lg:text-2xl font-bold tracking-tight shrink-0">Order Management</h1>
        
        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
          {isCustomRange && (
            <div className="flex items-center gap-1.5 lg:gap-2 animate-in fade-in zoom-in duration-200 relative z-40">
              <div className="relative">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd MMM, yyyy"
                  placeholderText="Start Date"
                  className="bg-[#171717] border border-[#262626] text-[#a3a3a3] px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-[10px] lg:text-xs w-[100px] lg:w-[115px] focus:outline-none focus:border-[#f58b1a] transition-colors"
                />
              </div>
              <span className="text-[#525252] text-[10px] lg:text-xs font-medium">To</span>
              <div className="relative">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd MMM, yyyy"
                  placeholderText="End Date"
                  className="bg-[#171717] border border-[#262626] text-[#a3a3a3] px-2 py-1.5 lg:px-3 lg:py-2 rounded-md text-[10px] lg:text-xs w-[100px] lg:w-[115px] focus:outline-none focus:border-[#f58b1a] transition-colors"
                />
              </div>
              <button className="bg-[#f58b1a] hover:bg-[#e07b14] text-black font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-[10px] lg:text-xs transition-colors ml-1 shadow-md">
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
                {datePeriods.map((period) => (
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
    </>
  );
}