import React from 'react';

export default function PaginationButton({ 
  onClick, 
  disabled, 
  isActive, 
  children, 
  className 
}) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${className || ''} ${
        disabled
          ? "text-gray-700 cursor-not-allowed"
          : isActive
          ? "bg-[#DC781B] text-black font-bold"
          : "text-gray-500 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}