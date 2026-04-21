import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, ShoppingBag, Store, Bike, 
  Wallet, Ticket, Gift, ReceiptText, ShieldCheck, 
  LifeBuoy, LogOut, ChevronLeft 
} from 'lucide-react';

const Sidebar = ({ 
  isMobileOpen, 
  isCollapsed, 
  onCloseMobile, 
  onToggleCollapse, 
  onLogout 
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scrollContainerRef = useRef(null);
  
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showIndicator, setShowIndicator] = useState(false);

  // This function checks if the screen "needs" to scroll
  const updateScrollProgress = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScrollable = scrollHeight - clientHeight;
      
      // If content is taller than the container, show the line immediately
      setShowIndicator(totalScrollable > 0);
      
      if (totalScrollable > 0) {
        const percentage = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(percentage);
      }
    }
  };

  // Run on mount and whenever the menu might change height
  useEffect(() => {
    updateScrollProgress();
    // Add a small delay to catch layout shifts
    const timer = setTimeout(updateScrollProgress, 100);
    
    window.addEventListener('resize', updateScrollProgress);
    return () => {
      window.removeEventListener('resize', updateScrollProgress);
      clearTimeout(timer);
    };
  }, [isCollapsed]); // Re-check when sidebar collapses/expands

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'System Overview' },
    { path: '/users', icon: Users, label: 'User Management' },
    { path: '/orders', icon: ShoppingBag, label: 'Order Management' },
    { path: '/vendors', icon: Store, label: 'Vendor Management' },
    { path: '/riders', icon: Bike, label: 'Rider Management' },
    { path: '/revenue', icon: Wallet, label: 'Revenue' },
    { path: '/vouchers', icon: Ticket, label: 'Vouchers' },
    { path: '/special-orders', icon: Gift, label: 'Special Orders' },
    { path: '/transactions', icon: ReceiptText, label: 'Transactions' },
  ];

  // Helper function to check if a route is active
  const isRouteActive = (menuPath) => {
    // Exact match or root/dashboard match
    if (currentPath === menuPath || (currentPath === '/' && menuPath === '/dashboard')) {
      return true;
    }
    // Match nested routes (e.g., /dashboard/details matches /dashboard)
    if (currentPath.startsWith(menuPath + '/')) {
      return true;
    }
    return false;
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <nav className={`h-screen flex flex-col fixed left-0 top-0 bg-[#0d0d0d] z-50 
          transition-all duration-300 ease-in-out border-r border-white/5
          ${isCollapsed ? 'w-20' : 'w-72'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className={`p-6 pb-2 flex items-center justify-between ${isCollapsed ? 'flex-col gap-4' : ''}`}>
          {!isCollapsed && (
            <h1 className="text-[#f57c00] text-xl font-bold tracking-tight">ChowTap</h1>
          )}
          <button 
            onClick={onToggleCollapse}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-gray-400 hover:text-[#f57c00] transition-all"
          >
            <ChevronLeft size={18} className={`transition-transform duration-500 ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Profile Card */}
        <div className={`px-4 mb-2 mt-4 ${isCollapsed ? 'flex justify-center' : ''}`}>
          <div className={`flex items-center gap-3 p-2 bg-white/5 rounded-xl transition-all ${isCollapsed ? 'w-12 h-12 justify-center' : ''}`}>
            <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={18} strokeWidth={2.5} className="text-[#f57c00]" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col overflow-hidden text-left">
                <span className="text-white font-semibold text-[13px] truncate">Super Admin</span>
                <span className="text-gray-500 text-[9px] uppercase tracking-wider font-bold">Global Panel</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Nav Area */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          
          {/* WHITE SCROLL INDICATOR (Shows immediately if scrollable) */}
          {showIndicator && (
            <div className="absolute right-1.5 top-2 bottom-2 w-[2px] bg-white/5 rounded-full z-20">
              <div 
                className="absolute w-full bg-white/60 rounded-full transition-all duration-150"
                style={{ 
                  height: '40px', 
                  top: `calc(${scrollPercentage}% - ${(scrollPercentage / 100) * 40}px)` 
                }}
              />
            </div>
          )}

          <div 
            ref={scrollContainerRef}
            onScroll={updateScrollProgress}
            className="flex-1 overflow-y-auto hide-scrollbar py-2 px-3"
          >
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = isRouteActive(item.path);
                const Icon = item.icon;
                
                return (
                  <li key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      onClick={() => isMobileOpen && onCloseMobile()}
                      className={`
                        w-full flex items-center transition-all duration-200 rounded-lg
                        ${isCollapsed ? 'justify-center py-3' : 'py-2.5 px-4 gap-4'}
                        ${isActive 
                          ? 'bg-[#1a1a1a] text-[#f57c00]' 
                          : 'text-[#8a8a8a] hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                      {!isCollapsed && (
                        <span className="text-[13px] font-medium tracking-wide whitespace-nowrap">{item.label}</span>
                      )}
                      
                      {isActive && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-[3px] bg-[#f57c00] rounded-l-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ORANGE SEPARATOR LINE (Separates menu from support/logout) */}
        <div className="px-6 py-2">
            <div className="h-[1px] w-full bg-[#f57c00]/40 shadow-[0_0_8px_rgba(245,124,0,0.3)]" />
        </div>

        {/* Footer */}
        <div className="pb-4 px-3 bg-[#0d0d0d]">
          <div className="space-y-0.5">
            <button className={`w-full flex items-center gap-4 text-[#8a8a8a] hover:text-white rounded-lg transition-colors ${isCollapsed ? 'justify-center py-3' : 'px-4 py-2'}`}>
              <LifeBuoy size={20} />
              {!isCollapsed && <span className="text-[13px] font-medium">Support</span>}
            </button>
            <button 
              onClick={onLogout} 
              className={`w-full flex items-center gap-4 text-[#8a8a8a] hover:text-[#ff4d4d] rounded-lg transition-colors ${isCollapsed ? 'justify-center py-3' : 'px-4 py-2'}`}
            >
              <LogOut size={20} />
              {!isCollapsed && <span className="text-[13px] font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;