import React from 'react';

const StatCard = ({ label, value, icon: Icon }) => {
  return (
    <div className="bg-[#141414] border border-neutral-800 border-l-[3px] border-l-orange-500 rounded-md p-5 flex flex-col justify-center h-[104px] relative">
      <div className="text-[10px] font-bold tracking-widest text-[#DC781B] uppercase mb-2">
        {label}
      </div>
      <div className="text-2xl font-bold text-white tracking-tight">
        {value}
      </div>
      <div className="absolute top-5 right-5">
        <Icon size={18} className="text-neutral-500" />
      </div>
    </div>
  );
};

export default StatCard;

