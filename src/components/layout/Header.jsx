import React from 'react';

const Header = ({ user = null, toggleMobileSidebar }) => {
  // Default user profile matching the screenshot
  const defaultUser = {
    name: 'Alex Chen',
    role: 'Global Admin',
    avatar: '' // We will use a solid gray div as a fallback to match the image
  };

  const currentUser = user || defaultUser;

  return (
    <>
      {/* Material Symbols Icon Font */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        rel="stylesheet" 
      />

      {/* Main Header Container */}
      <header className="w-full sticky top-0 z-40 bg-[#111111] border-b border-[#ffffff]/5">
        <div className="flex justify-between items-center w-full px-6 py-3">
          
          {/* LEFT SIDE: Mobile Menu + Campus Dropdown */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileSidebar}
              className="lg:hidden text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
              aria-label="Toggle sidebar"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                menu
              </span>
            </button>

            {/* Campus Dropdown Box */}
            <button className="flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#252525] transition-colors px-4 py-2.5 rounded-lg border border-transparent hover:border-white/5">
              <span className="text-[11px] font-bold text-gray-500 tracking-wider">CAMPUS</span>
              <span className="text-[14px] text-[#e8e8e8] font-medium leading-none">McPherson University</span>
              <span 
                className="material-symbols-outlined text-[#d48b59]" 
                style={{ fontSize: '20px', lineHeight: '1' }}
              >
                expand_more
              </span>
            </button>
          </div>

          {/* RIGHT SIDE: Actions & Profile */}
          <div className="flex items-center gap-6">
            
            {/* Icons Area */}
            <div className="flex items-center gap-4">
              {/* Notification Button */}
              <button 
                className="text-[#a0a0a0] hover:text-white transition-colors duration-300 p-1.5 rounded-lg hover:bg-white/5"
                aria-label="Notifications"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                  notifications
                </span>
              </button>

              {/* Settings Button */}
              <button 
                className="text-[#a0a0a0] hover:text-white transition-colors duration-300 p-1.5 rounded-lg hover:bg-white/5"
                aria-label="Settings"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                  settings
                </span>
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              {/* Text Info */}
              <div className="flex flex-col items-start hidden sm:flex">
                <span className="text-[13px] font-bold text-[#f0f0f0] leading-tight">
                  {currentUser.name}
                </span>
                <span className="text-[11px] text-gray-500 font-medium">
                  {currentUser.role}
                </span>
              </div>
              
              {/* Avatar */}
              {currentUser.avatar ? (
                <img
                  alt={currentUser.name}
                  className="w-9 h-9 rounded-full object-cover"
                  src={currentUser.avatar}
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#b3b3b3] flex-shrink-0"></div>
              )}
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;