const TabsNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['favorites', 'order-history', 'voucher-history'];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center gap-8 border-b border-[#2a2a2a] mt-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={`pb-4 text-xs font-bold uppercase tracking-[0.1em] transition-colors relative top-[1px] ${
            activeTab === tab
              ? 'text-[#FFB782] border-b-2 border-[#FFB782]'
              : 'text-neutral-500 border-b-2 border-transparent hover:text-neutral-300'
          }`}
        >
          {tab.replace('-', ' ')}
        </button>
      ))}
    </div>
  );
};

export default TabsNavigation;