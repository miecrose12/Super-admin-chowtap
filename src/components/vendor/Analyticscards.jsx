import React from 'react';
import { analyticsData } from '../../utils/Vendors';

export default function AnalyticsCards() {
  const statCards = [
    { title: 'TOTAL VENDORS', value: analyticsData.totalVendors },
    { title: 'APPROVED VENDORS', value: analyticsData.approvedVendors },
    { title: 'SUSPENDED VENDORS', value: analyticsData.suspendedVendors },
    { title: 'TOTAL ORDERS', value: analyticsData.totalOrders },
    { title: 'TOTAL VENDOR REVENUE', value: analyticsData.totalRevenue },
    { title: 'TOTAL REFUNDED AMOUNT', value: analyticsData.totalRefunded },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-8">
      
      {/* 6-Grid Stats Section */}
      <div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {statCards.map((stat, index) => (
          <div 
            key={index} 
            className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col justify-center shadow-md border border-transparent hover:border-[#2a2a2a] transition-colors"
          >
            <p className="text-[11px] text-gray-500 font-bold tracking-[0.15em] mb-3 uppercase">
              {stat.title}
            </p>
            <h2 className="text-[22px] font-bold text-white tracking-tight">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Action Card Section */}
      <div className="xl:col-span-1 bg-[#1A1A1A] rounded-xl p-8 relative overflow-hidden flex flex-col justify-center shadow-md border border-transparent h-full min-h-[220px]">
        
        {/* Background Shield Icon */}
        <div className="absolute -bottom-6 -right-6 text-white opacity-[0.03]">
          <svg 
            width="180" 
            height="180" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-[11px] text-[#E07A1A] font-bold tracking-[0.15em] mb-2 uppercase">
            Action Required
          </p>
          <h3 className="text-[22px] font-bold text-white mb-2 leading-snug">
            {analyticsData.pendingApprovals} Pending Approvals
          </h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Vendors waiting for identity verification and menu audit.
          </p>
          <button className="bg-[#E07A1A] hover:bg-[#d06d15] text-[#1A1A1A] text-sm font-bold py-2.5 px-6 rounded-md transition-colors active:scale-95 w-max">
            Review vendors
          </button>
        </div>
      </div>

    </div>
  );
}