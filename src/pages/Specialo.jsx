import React, { useState } from 'react';
import { NavigationTabs } from '../components/specialorder/Navigationtabs';
import { OrdersView } from '../components/specialorder/Ordersview';
import { ProductsView } from '../components/specialorder/Productsview';



export default function Speialo() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen bg-[#0e0e0e] font-sans p-8 selection:bg-[#e87922]/30">
      <div className="max-w-[1300px] mx-auto">
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'orders' ? <OrdersView /> : <ProductsView />}
      </div>
    </div>
  );
}