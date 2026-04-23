import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo2_1 from '../assets/dashboard.svg';
import logo2_2 from '../assets/icon6.svg';
import logo2_3 from '../assets/icon4.svg';
import logo2_4 from '../assets/dashboard.svg';
import { 
  Rocket, 
  UserCheck, 
  Calendar, 
  ChevronDown, 
  ShieldCheck,
  BadgeCheck
} from 'lucide-react';

// ============================================================================
// STAT CARD COMPONENT
// ============================================================================
const StatCard = ({ title, value, trend, trendType, logo }) => {
  return (
    <div className="bg-[#111111] rounded-xl p-6 relative border border-[#262626] shadow-sm flex flex-col justify-between min-h-[170px]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[95%] w-[3px] bg-gradient-to-b from-[#df7d27] to-[#e88d40] rounded-r shadow-[0_0_12px_rgba(223,125,39,0.6)]"></div>
      
      <div className="flex justify-between items-start pl-2">
        <span className="text-[10px] font-bold text-[#DC781B] tracking-[0.15em] uppercase mt-1">
          {title}
        </span>
        <img src={logo} alt="icon" className="w-[22px] h-[22px] opacity-50 hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="pl-2 mt-auto">
        <h3 className="text-[26px] font-bold text-[#f5f5f5] mb-2 leading-none tracking-tight">{value}</h3>
        <p className={`text-[11px] font-semibold tracking-wide ${
          trendType === 'positive' || trendType === 'live' ? 'text-[#10b981]' : 'text-[#A1A1AA]'
        }`}>
          {trendType === 'live' && (
            <span className="inline-block w-1.5 h-1.5 bg-[#10B981] rounded-full mr-2 mb-[1px] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          )}
          {trend}
        </p>
      </div>
    </div>
  );
};

// ============================================================================
// TOP CAMPUSES TABLE COMPONENT
// ============================================================================
const TopCampusesTable = () => {
  const campuses = [
    { name: 'MCPHERSON UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'PEAK GROWTH' },
    { name: 'BELLS UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'STABLE' },
    { name: 'LEAD CITY UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'PEAK GROWTH' },
    { name: 'KOLADISI UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'PEAK GROWTH' },
  ];

  return (
    <div className="bg-transparent mt-1 h-full">
      <div className="mb-5">
        <h3 className="text-[17px] font-bold text-[#f5f5f5] tracking-wide mb-1">Top Performing Campuses</h3>
        <p className="text-[12px] text-[#777]">Ranking based on order density and revenue.</p>
      </div>
      
      <div className="bg-[#000000] rounded-xl border border-[#262626] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#666] text-[10px] uppercase tracking-widest font-bold border-b border-[#262626] bg-[#131313]">
                <th className="px-6 py-5">Campus Name</th>
                <th className="px-6 py-5">Total Orders</th>
                <th className="px-6 py-5">Gross Revenue</th>
                <th className="px-6 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {campuses.map((campus, index) => (
                <tr key={index} className="border-b border-[#0e0e0e] last:border-0 bg-[#000000] hover:bg-[#151515] transition-colors">
                  <td className="px-6 py-5 font-bold text-[#e5e5e5] tracking-wide">{campus.name}</td>
                  <td className="px-6 py-5 text-[#ccc] font-semibold">{campus.orders}</td>
                  <td className="px-6 py-5 font-bold text-[#df7d27]">{campus.revenue}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2.5 py-1.5 rounded-[4px] text-[9px] font-extrabold uppercase tracking-wider ${
                      campus.status === 'PEAK GROWTH' 
                      ? 'bg-[#064e3b]/40 text-[#10b981]' 
                      : 'bg-[#78350f]/40 text-[#d97706]'
                    }`}>
                      {campus.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// PEAK HOURS CHART COMPONENT
// ============================================================================
const PeakHoursChart = () => {
  return (
    <div className="bg-[#111111] rounded-xl p-6 border border-[#262626] h-full flex flex-col min-h-[250px]">
      <h3 className="text-[15px] font-bold text-[#f5f5f5] mb-6 tracking-wide">Peak hours during operations</h3>
      
      <div className="relative flex-grow w-full flex items-end justify-between mt-4 mb-6">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M 2,85 C 30,85 60,88 98,45"
            fill="none"
            stroke="#df7d27"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 2,85 C 30,85 60,88 98,45 L 98,100 L 2,100 Z"
            fill="url(#chart-grad)"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#df7d27" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#df7d27" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-6 left-0 w-full flex justify-between px-2 text-[10px] text-[#777] font-bold tracking-[0.15em] uppercase">
          <span>Morning</span>
          <span>Afternoon</span>
          <span>Evening</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// VOUCHERS CARD COMPONENT
// ============================================================================
const VouchersCard = () => {
  return (
    <div className="bg-[#df7d27] rounded-xl p-8 pb-10 relative overflow-hidden h-full flex flex-col justify-center shadow-lg min-h-[300px]">
      <div className="absolute -right-12 -top-12 text-white/[0.07] pointer-events-none">
        <Rocket size={240} className="transform -rotate-12" fill="currentColor" strokeWidth={0.5} />
      </div>
      
      <div className="relative z-10 mt-2">
        <p className="text-[#8b4d18] font-extrabold mb-3 uppercase tracking-widest text-[10px]">
          Campaign Peak
        </p>
        <h2 className="text-[32px] font-bold text-[#351d09] mb-4 tracking-tight">
          Active Vouchers: 1,402
        </h2>
        <p className="text-[#6d3c13] text-[13px] leading-relaxed mb-8 pr-6 font-semibold">
          "CampusBlast2024" is performing 24% better than previous seasonal benchmarks.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="flex-1 min-w-[140px] py-3.5 bg-[#42240b] text-[#df7d27] font-bold uppercase tracking-widest rounded-[4px] border border-[#42240b] hover:bg-[#2b1707] transition-colors text-[10px] shadow-md">
            Manage Vouchers
          </button>
          <button className="flex-1 min-w-[140px] py-3.5 bg-transparent border border-[#ad611f] text-[#42240b] font-bold uppercase tracking-widest rounded-[4px] hover:bg-black/5 transition-colors text-[10px]">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ACTION REQUIRED CARD COMPONENT
// ============================================================================
const ActionRequiredCard = () => {
  return (
    <div className="bg-[#181818] rounded-xl p-7 pb-8 border border-[#262626] relative overflow-hidden h-full flex flex-col justify-center min-h-[250px]">
      <div className="absolute -right-8 -bottom-8 text-white/[0.03] pointer-events-none">
        <BadgeCheck size={180} fill="currentColor" strokeWidth={0.5} />
      </div>

      <div className="relative z-10">
        <p className="text-[10px] font-bold text-[#df7d27] tracking-[0.15em] uppercase mb-3">
          Action Required
        </p>
        <h3 className="text-[20px] font-bold text-[#f5f5f5] mb-2 tracking-wide">
          3 Pending Approvals
        </h3>
        <p className="text-[#888] text-[13px] mb-7 w-5/6 leading-relaxed font-medium">
          Vendors waiting for identity verification and menu audit.
        </p>
        <button className="w-full sm:w-[180px] py-3.5 bg-[#df7d27] hover:bg-[#c96e21] text-[#2b1707] font-bold rounded-[4px] text-[12px] transition-colors shadow-lg shadow-black/30 tracking-wide">
          Review vendors
        </button>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN DASHBOARD
// ============================================================================
export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Today');
  const dropdownRef = useRef(null);
  
  // Date Picker States
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

  const stats = [
    { title: 'Total Revenue', value: 'N 25,000.00', trend: '~ 12.4% from last month', trendType: 'positive', logo: logo2_1 },
    { title: 'Total Orders', value: '8,246', trend: '~ 4% from last month', trendType: 'positive', logo: logo2_2 },
    { title: 'Active Users', value: '2,567', trend: '-- stable user base', trendType: 'neutral', logo: logo2_3 },
    { title: 'Active Riders', value: '125', trend: 'LIVE NOW', trendType: 'live', logo: logo2_4 },
  ];

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

      <div className="min-h-screen bg-[#0E0E0E] p-4 md:p-8 font-sans text-[#f5f5f5] selection:bg-[#df7d27] selection:text-white">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-[26px] font-bold tracking-wide">System Overview</h2>
            
            <div className="flex flex-wrap items-center gap-3 relative z-40">
              
              {/* Updated Custom Period Component with DatePicker */}
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
          </div>

          {/* Row 1: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 relative z-10">
            {stats.map((stat, index) => <StatCard key={index} {...stat} />)}
          </div>

          {/* Row 2: Table & Vouchers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 relative z-10">
            <div className="lg:col-span-7"><TopCampusesTable /></div>
            <div className="lg:col-span-5"><VouchersCard /></div>
          </div>

          {/* Row 3: Action & Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10">
            <div className="lg:col-span-4"><ActionRequiredCard /></div>
            <div className="lg:col-span-8"><PeakHoursChart /></div>
          </div>
        </div>
      </div>
    </>
  );
}