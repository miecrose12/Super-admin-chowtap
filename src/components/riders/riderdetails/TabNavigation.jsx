import React from 'react';
import { Info, List, MessageSquare } from 'lucide-react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: 'Overview', icon: Info },
    { name: 'Orders', icon: List },
    { name: 'Reviews', icon: MessageSquare }
  ];

  return (
    <div className="flex gap-8 border-b border-[#000] mb-8">
      {tabs.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onTabChange(name)}
          className={`pb-3 text-sm font-medium flex items-center gap-2 transition-colors ${
            activeTab === name 
              ? 'text-[#FF8A00] border-b-2 border-[#FF8A00]' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Icon size={16} />
          {name}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;