import React, { useState } from "react";

import OverviewTab from "../../components/vendor/vendoroverview/OverviewTab";
import MenuTab from "../../components/vendor/vendoroverview/MenuTab";
import OrdersTab from "../../components/vendor/vendoroverview/OrdersTab";
import ReviewsTab from "../../components/vendor/vendoroverview/ReviewsTab";
import TransactionsTab from "../../components/vendor/vendoroverview/TransactionsTab";
import VendorHeader from "../../components/vendor/vendoroverview/VendorHeader";
import TabNavigation from "../../components/vendor/vendoroverview/TabNavigation";

const tabs = [
  { id: "overview", label: "OVERVIEW" },
  { id: "menu", label: "MENU" },
  { id: "orders", label: "ORDERS" },
  { id: "reviews", label: "REVIEWS" },
  { id: "transactions", label: "TRANSACTIONS" },
];

const TAB_COMPONENTS = {
  overview: OverviewTab,
  menu: MenuTab,
  orders: OrdersTab,
  reviews: ReviewsTab,
  transactions: TransactionsTab,
};

const VendorOverview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-300 font-sans p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <VendorHeader />
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="mt-6">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default VendorOverview;
