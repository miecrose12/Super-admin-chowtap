import React, { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Tablefilters() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const statuses = ['New', 'Preparing', 'Ready', 'Completed', 'Arrived', 'Delivered'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-4 gap-4 relative z-20">
      {/* Search Bar */}
      <div className="relative w-full max-w-[280px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" size={14} />
        <input 
          type="text" 
          placeholder="Search orders..." 
          className="w-full bg-transparent border border-[#1f1f1f] text-[10px] lg:text-xs rounded-md pl-9 pr-4 py-1.5 lg:py-2 focus:border-[#404040] outline-none placeholder-[#404040] transition-colors"
        />
      </div>

      {/* Status Filter Container */}
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1.5 lg:gap-2 px-4 py-1.5 lg:py-2 rounded-md text-[10px] lg:text-xs transition-colors shrink-0 border ${
            isOpen 
              ? 'bg-[#1a1a1a] border-[#333333] text-white' 
              : 'bg-[#171717] border-[#262626] text-[#a3a3a3] hover:bg-[#1f1f1f]'
          }`}
        >
          <SlidersHorizontal size={14} />
          Status
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[#171717] border border-[#262626] rounded-lg shadow-2xl overflow-hidden z-50">
            <div className="flex flex-col py-1">
              {statuses.map((status) => (
                <button
                  key={status}
                  className="px-4 py-2.5 text-left text-[11px] lg:text-sm text-[#d4d4d4] hover:bg-[#262626] hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}