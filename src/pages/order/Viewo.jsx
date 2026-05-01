import React from 'react';
import OrderDetailsHeader from '../../components/orders/vieworder/Orderdetailsheader';
import CustomerDetailsCard from '../../components/orders/vieworder/Customerdetailscard';
import VendorHubCard from '../../components/orders/vieworder/Vendorhubcard';
import CourierInfoCard from '../../components/orders/vieworder/Courierinfocard';
import OrderItemsCard from '../../components/orders/vieworder/Orderitemscard';
import FinancialSummaryCard from '../../components/orders/vieworder/Finacialsummarycard';
import PaymentMethodCard from '../../components/orders/vieworder/Paymentmethodcard';


const OrderDetails = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E0E0E0] p-8 md:p-10 font-sans antialiased">
      
      {/* Header */}
      <OrderDetailsHeader />

      {/* Top Row - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 items-stretch">
        <CustomerDetailsCard />
        <VendorHubCard />
        <CourierInfoCard />
      </div>

      {/* Bottom Row - 2 + 1 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <OrderItemsCard />
        
        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-5">
          <FinancialSummaryCard />
          <PaymentMethodCard />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;