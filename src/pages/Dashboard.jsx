import React from 'react';


// Import your assets
import logo2_1 from '../assets/dashboard.svg';
import logo2_2 from '../assets/icon6.svg';
import logo2_3 from '../assets/icon4.svg';
import logo2_4 from '../assets/dashboard.svg';
import DateRangeSelector from '../components/dashboard/DateRangeSelector';
import TopCampusesTable from '../components/dashboard/TopCampusesTable';
import VouchersCard from '../components/dashboard/VouchersCard';
import ActionRequiredCard from '../components/dashboard/ActionRequiredCard';
import PeakHoursChart from '../components/dashboard/PeakHoursChart';
import StatCard from '../components/dashboard/StatCard';

export default function Dashboard() {
  const stats = [
    { title: 'Total Revenue', value: 'N 25,000.00', trend: '~ 12.4% from last month', trendType: 'positive', logo: logo2_1 },
    { title: 'Total Orders', value: '8,246', trend: '~ 4% from last month', trendType: 'positive', logo: logo2_2 },
    { title: 'Active Users', value: '2,567', trend: '-- stable user base', trendType: 'neutral', logo: logo2_3 },
    { title: 'Active Riders', value: '125', trend: 'LIVE NOW', trendType: 'live', logo: logo2_4 },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] p-4 md:p-8 font-sans text-[#f5f5f5] selection:bg-[#df7d27] selection:text-white">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-[26px] font-bold tracking-wide">System Overview</h2>
          <DateRangeSelector />
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
  );
}