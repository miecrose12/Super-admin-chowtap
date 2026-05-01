import React, { useState } from "react";
import RiderHeader from "../../components/riders/riderdetails/RiderHeader";
import ReportingPeriodFilter from "../../components/riders/riderdetails/ReportingPeriodFilter";
import StatisticsCards from "../../components/riders/riderdetails/StatisticsCards";
import TabNavigation from "../../components/riders/riderdetails/TabNavigation";
import OverviewTab from "../../components/riders/riderdetails/OverviewTab";
import OrdersTab from "../../components/riders/riderdetails/OrdersTab";
import ReviewsTab from "../../components/riders/riderdetails/ReviewsTab";

const RiderDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-8 font-sans">
      {/* Header */}
      <RiderHeader
        riderName="Marcus Joe"
        riderInitials="MJ"
        rating="4.8"
        reviewCount={1240}
      />

      {/* Reporting Period Filter */}
      <ReportingPeriodFilter selectedPeriod="Last 30 Days" />

      {/* Statistics Cards */}
      <StatisticsCards
        totalRevenue="N 17,890,090.00"
        revenueGrowth="~ 12.4% from last month"
        completedOrders={1565}
        rejectedOrders={3}
        deliveredEarly={1132}
        deliveredLate={433}
        riderBalance="N 280,000.00"
      />

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Tab Content */}
      {activeTab === "Overview" && <OverviewTab />}
      {activeTab === "Orders" && <OrdersTab />}
      {activeTab === "Reviews" && <ReviewsTab />}
    </div>
  );
};

export default RiderDetails;
