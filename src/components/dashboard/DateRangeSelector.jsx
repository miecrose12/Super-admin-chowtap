import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, ChevronDown } from 'lucide-react';

const DateRangeSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Today');
  const dropdownRef = useRef(null);
  
  const [startDate, setStartDate] = useState(new Date("2026-03-03"));
  const [endDate, setEndDate] = useState(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const periods = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time', 'Custom period'];

  return (
    <>
      <style>{`
        /* Overriding react-datepicker default styles to match your dark theme */
        .react-datepicker {
          background-color: #161616 !important;
          border-color: #262626 !important;
          font-family: inherit !important;
          color: #d4d4d4 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
        }
        .react-datepicker__header {
          background-color: #111111 !important;
          border-bottom-color: #262626 !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
          color: #f5f5f5 !important;
        }
        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          color: #a0a0a0 !important;
        }
        .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
          background-color: #222 !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
        .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range {
          background-color: #df7d27 !important;
          color: #111 !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(223, 125, 39, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none; /* Looks cleaner without the pointer triangle */
        }
      `}</style>

      <div className="flex flex-wrap items-center gap-3 relative z-40">
        
        {/* Custom Period Component with DatePicker */}
        {selectedPeriod === 'Custom period' && (
          <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200">
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd MMM, yyyy"
                placeholderText="Start Date"
                className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#df7d27] outline-none transition-colors"
              />
            </div>
            <span className="text-[#666] text-[12px]">To</span>
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
                className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#df7d27] outline-none transition-colors"
              />
            </div>
            <button className="bg-[#df7d27] hover:bg-[#c96e21] text-[#2b1707] font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
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
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => { setSelectedPeriod(period); setIsDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                    selectedPeriod === period ? 'text-[#df7d27] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DateRangeSelector;