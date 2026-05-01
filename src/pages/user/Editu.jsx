import React, { useState } from 'react';
import Header from '../../components/usersmanagement/editcustomer/Header';
import MetricsRow from '../../components/usersmanagement/editcustomer/MetricsRow';
import TabsNavigation from '../../components/usersmanagement/editcustomer/TabsNavigation';
import FavoritesTab from '../../components/usersmanagement/editcustomer/FavoritesTab';
import OrderHistoryTab from '../../components/usersmanagement/editcustomer/OrderHistoryTab';
import VoucherHistoryTab from '../../components/usersmanagement/editcustomer/VoucherHistoryTab';


const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('favorites');

  return (
    <>
      <style>{`
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
          background-color: #e86b35 !important;
          color: #111 !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(232, 107, 53, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#e86b35] selection:text-white pb-20">
        <div className="max-w-[1280px] mx-auto w-full p-6 md:p-8 flex flex-col gap-6">
          
          {/* Header */}
          <Header />

          {/* Metrics */}
          <MetricsRow />

          {/* Tabs Navigation */}
          <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab Content */}
          <div className="mt-2">
            {activeTab === 'favorites' && <FavoritesTab />}
            {activeTab === 'order-history' && <OrderHistoryTab />}
            {activeTab === 'voucher-history' && <VoucherHistoryTab />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;