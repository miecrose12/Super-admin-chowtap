import React from 'react';
import { Menu, ChevronDown, Bell, Settings } from 'lucide-react';

const Header = ({ user = null, toggleMobileSidebar }) => {
  // Default user profile
  const defaultUser = {
    name: 'Alex Chen',
    role: 'Global Admin',
    avatar: '' 
  };

  const currentUser = user || defaultUser;

  // Helper function to get initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-[#111111] border-b border-[#ffffff]/5">
      <div className="flex justify-between items-center w-full px-6 py-3">
        
        {/* LEFT SIDE: Mobile Menu + Campus Dropdown */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileSidebar}
            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>

          <button className="flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#252525] transition-colors px-4 py-2.5 rounded-lg border border-transparent hover:border-white/5">
            <span className="text-[11px] font-bold text-gray-500 tracking-wider">CAMPUS</span>
            <span className="text-[14px] text-[#e8e8e8] font-medium leading-none">McPherson University</span>
            <ChevronDown size={20} className="text-[#d48b59]" />
          </button>
        </div>

        {/* RIGHT SIDE: Actions & Profile */}
        <div className="flex items-center gap-6">
          
          <div className="flex items-center gap-4">
            <button className="text-[#a0a0a0] hover:text-white transition-colors duration-300 p-1.5 rounded-lg hover:bg-white/5">
              <Bell size={22} />
            </button>

            <button className="text-[#a0a0a0] hover:text-white transition-colors duration-300 p-1.5 rounded-lg hover:bg-white/5">
              <Settings size={22} />
            </button>
          </div>

          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-[13px] font-bold text-[#f0f0f0] leading-tight">
                {currentUser.name}
              </span>
              <span className="text-[11px] text-gray-500 font-medium">
                {currentUser.role}
              </span>
            </div>
            
            {/* Avatar / Initials Circle */}
            {currentUser.avatar ? (
              <img
                alt={currentUser.name}
                className="w-9 h-9 rounded-full object-cover"
                src={currentUser.avatar}
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#b3b3b3] flex items-center justify-center flex-shrink-0">
                <span className="text-[13px] font-bold text-[#111111] tracking-tighter">
                  {getInitials(currentUser.name)}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;