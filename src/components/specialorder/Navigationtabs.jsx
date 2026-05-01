import React from 'react';
import { Briefcase, List } from 'lucide-react';

export const NavigationTabs = ({ activeTab, onTabChange }) => (
  <div className="flex gap-8 border-b border-[#2a2a2a] mb-8">
    <button 
      onClick={() => onTabChange('orders')}
      className={`flex items-center gap-2 pb-3.5 px-1 border-b-[3px] text-[13px] font-semibold transition-colors ${
        activeTab === 'orders' 
          ? 'border-[#DC781B] text-[#DC781B]' 
          : 'border-transparent text-[#6B7280] hover:text-[#d1d1d1]'
      }`}
    >
      <Briefcase size={16} className={activeTab === 'orders' ? 'text-[#DC781B]' : 'text-[#6b6b6b]'} /> 
      Special Orders
    </button>
    
    <button 
      onClick={() => onTabChange('products')}
      className={`flex items-center gap-2 pb-3.5 px-1 border-b-[3px] text-[13px] font-semibold transition-colors ${
        activeTab === 'products' 
          ? 'border-[#DC781B] text-[#DC781B]' 
          : 'border-transparent text-[#6B7280] hover:text-[#d1d1d1]'
      }`}
    >
      <List size={16} className={activeTab === 'products' ? 'text-[#e87922]' : 'text-[#6b6b6b]'} /> 
      Product Inventory
    </button>
  </div>
);