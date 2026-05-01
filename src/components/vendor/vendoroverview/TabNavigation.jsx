import React from 'react';

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-neutral-800 flex gap-8">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 text-sm font-semibold tracking-wider transition-colors ${
            activeTab === tab.id 
              ? 'text-[#DC781B] border-b-2 border-[#DC781B]' 
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;