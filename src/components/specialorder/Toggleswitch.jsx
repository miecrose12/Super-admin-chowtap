import React from 'react';

export const ToggleSwitch = ({ isActive, onToggle }) => (
  <button 
    onClick={onToggle}
    className={`w-10 h-[22px] rounded-full relative transition-colors duration-200 ease-in-out ${
      isActive ? 'bg-[#DC781B]' : 'bg-[#333333]'
    }`}
  >
    <div className={`w-[14px] h-[14px] rounded-full absolute top-1 transition-transform duration-200 ease-in-out ${
      isActive ? 'bg-white translate-x-[22px]' : 'bg-[#6B7280] translate-x-1'
    }`} />
  </button>
);