// RidersHeader.jsx
import { Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateOptions } from '../../utils/riders';

export default function RidersHeader({
  selectedDateRange,
  isCustomPeriod,
  startDate,
  endDate,
  dateDropdownOpen,
  setDateDropdownOpen,
  setSelectedDateRange,
  setIsCustomPeriod,
  setStartDate,
  setEndDate,
}) {
  const handleDateSelection = (option) => {
    setSelectedDateRange(option);
    setDateDropdownOpen(false);
    setIsCustomPeriod(option === 'Custom period');
  };

  return (
    <div className="flex justify-between items-center mb-8">
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
      <h1 className="text-3xl font-bold">Rider Management</h1>
      
      <div className="flex items-center space-x-4">
        <button className="bg-[#f37c22] hover:bg-[#e06d1d] transition-colors text-white px-6 py-2 rounded-md font-medium">
          Leaderboard
        </button>

        {/* Date Filter Section - Exactly as in your original */}
        <div className="flex items-center space-x-2">
          {/* Custom Date Pickers - Shown only when "Custom period" is selected */}
          {isCustomPeriod && (
            <div className="flex items-center space-x-2 animate-in fade-in slide-in-from-right-4 duration-300">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="bg-[#141414] border border-gray-800 text-gray-300 text-sm rounded-md px-4 py-2 w-32 focus:outline-none focus:border-[#f37c22]"
              />
              <span className="text-gray-600">To</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                className="bg-[#141414] border border-gray-800 text-gray-300 text-sm rounded-md px-4 py-2 w-32 focus:outline-none focus:border-[#f37c22]"
              />
              <button className="bg-[#f37c22] hover:bg-[#e06d1d] text-white px-4 py-2 rounded-md text-sm font-medium">
                Apply
              </button>
            </div>
          )}

          {/* Date Dropdown Button + Menu - FIXED to match original exactly */}
          <div className="relative">
            <button
              onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
              className="bg-[#141414] border border-gray-800 hover:bg-[#1f1f1f] transition-colors text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2 min-w-[140px] justify-between"
            >
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-400" />
                <span>{selectedDateRange}</span>
              </div>
              {/* Small chevron indicator (optional but improves UX) */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu - Exact styling from your original */}
            {dateDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#1A1A1A] border border-gray-800 rounded-md shadow-2xl py-2 z-50">
                {dateOptions.map((option) => (
                  <button
                    key={option}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors"
                    onClick={() => handleDateSelection(option)}
                  >
                    {option}
                  </button>
                ))}
                {/* Custom Period Option - Highlighted like original */}
                <button
                  className="w-full text-left px-4 py-2 text-sm text-[#f37c22] hover:bg-[#2A2A2A] transition-colors mt-1 border-t border-gray-800 pt-2"
                  onClick={() => handleDateSelection('Custom period')}
                >
                  Custom period
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}