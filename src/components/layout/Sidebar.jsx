import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Store, Bike, 
  Wallet, Ticket, Gift, ReceiptText, ShieldCheck, 
  LifeBuoy, LogOut, ChevronLeft 
} from 'lucide-react';
import logo from '../../assets/Vector.svg';
import logo2 from '../../assets/logo2.svg';

// Import custom SVG icons for User Management through Special Orders
import icon3Colored from '../../assets/icon3.svg';
import icon3Uncolored from '../../assets/icon4.svg';
import icon5Colored from '../../assets/icon5.svg';
import icon5Uncolored from '../../assets/icon6.svg';
import icon7Colored from '../../assets/icon7.svg';
import icon7Uncolored from '../../assets/icon8.svg';
import icon9Colored from '../../assets/icon9.svg';
import icon9Uncolored from '../../assets/icon10.svg';
import icon11Colored from '../../assets/icon11.svg';
import icon11Uncolored from '../../assets/icon12.svg';
import icon13Colored from '../../assets/icon13.svg';
import icon13Uncolored from '../../assets/icon14.svg';
import icon15Colored from '../../assets/icon15.svg';
import icon15Uncolored from '../../assets/icon16.svg';

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

  const updateScrollProgress = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScrollable = scrollHeight - clientHeight;
      
      setShowIndicator(totalScrollable > 0);
      
      if (totalScrollable > 0) {
        const percentage = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(percentage);
      }
    }
  };

  useEffect(() => {
    updateScrollProgress();
    const timer = setTimeout(updateScrollProgress, 100);
    
    window.addEventListener('resize', updateScrollProgress);
    return () => {
      window.removeEventListener('resize', updateScrollProgress);
      clearTimeout(timer);
    };
  }, [isCollapsed]);

  // Scroll to top when route changes
  useEffect(() => {
    const mainContent = document.querySelector('main') || 
                       document.querySelector('[role="main"]') || 
                       document.documentElement;
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Menu items configuration with custom SVG icons
  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'System Overview', useLucide: true },
    { 
      path: '/users', 
      coloredIcon: icon3Colored, 
      uncoloredIcon: icon3Uncolored,
      label: 'User Management',
      useLucide: false 
    },
    { path: '/orders', icon: ShoppingBag, label: 'Order Management', useLucide: true },
    { 
      path: '/vendors', 
      coloredIcon: icon5Colored, 
      uncoloredIcon: icon5Uncolored,
      label: 'Vendor Management',
      useLucide: false 
    },
    { 
      path: '/riders', 
      coloredIcon: icon7Colored, 
      uncoloredIcon: icon7Uncolored,
      label: 'Rider Management',
      useLucide: false 
    },
    { 
      path: '/revenue', 
      coloredIcon: icon9Colored, 
      uncoloredIcon: icon9Uncolored,
      label: 'Revenue',
      useLucide: false 
    },
    { 
      path: '/vouchers', 
      coloredIcon: icon11Colored, 
      uncoloredIcon: icon11Uncolored,
      label: 'Vouchers',
      useLucide: false 
    },
    { 
      path: '/special-orders', 
      coloredIcon: icon15Colored, 
      uncoloredIcon: icon15Uncolored,
      label: 'Special Orders',
      useLucide: false 
    },
    { path: '/transactions', icon: ReceiptText, label: 'Transactions', useLucide: true },
  ];

  const isRouteActive = (menuPath) => {
    if (currentPath === menuPath || (currentPath === '/' && menuPath === '/dashboard')) {
      return true;
    }
    if (currentPath.startsWith(menuPath + '/')) {
      return true;
    }
    return false;
  };

  const handleLinkClick = () => {
    if (isMobileOpen) {
      onCloseMobile();
    }
  };

  // Icon Renderer Component - handles both Lucide and custom SVG icons
  const IconRenderer = ({ item, isActive }) => {
    if (item.useLucide) {
      // Use Lucide icons for System Overview, Order Management, and Transactions
      const Icon = item.icon;
      return (
        <Icon 
          size={20} 
          strokeWidth={isActive ? 2.5 : 2}
          className={isActive ? 'text-[#f57c00]' : 'text-[#8a8a8a]'}
        />
      );
    } else {
      // Use custom SVG icons with colored/uncolored states
      const iconSrc = isActive ? item.coloredIcon : item.uncoloredIcon;
      return (
        <img 
          src={iconSrc}
          alt={item.label}
          className="w-5 h-5 object-contain flex-shrink-0"
        />
      );
    }
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <nav className={`h-screen flex flex-col fixed left-0 top-0 bg-[#0e0e0e] z-50 
          transition-all duration-300 ease-in-out border-r border-white/5
          ${isCollapsed ? 'w-20' : 'w-72'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className={`p-6 pb-2 flex items-center justify-between ${isCollapsed ? 'flex-col gap-4' : ''}`}>
          {/* Logo switches based on collapse state */}
          <div className={`flex items-center gap-2 ${isCollapsed ? 'justify-center' : ''}`}>
            <img 
              src={isCollapsed ? logo2 : logo} 
              alt="ChowTap logo" 
              className={`flex-shrink-0 object-contain transition-all duration-300 ${isCollapsed ? 'w-12 h-12' : 'w-auto h-9'}`}
            />
          </div>

          <button 
            onClick={onToggleCollapse}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-gray-400 hover:text-[#f57c00] transition-all"
          >
            <ChevronLeft size={18} className={`transition-transform duration-500 ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

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

        <div className="relative flex-1 flex flex-col overflow-hidden">
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
                
                return (
                  <li key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`
                        w-full flex items-center transition-all duration-200 rounded-lg
                        ${isCollapsed ? 'justify-center py-3' : 'py-2.5 px-4 gap-4'}
                        ${isActive 
                          ? 'bg-[#1a1a1a] text-[#f57c00]' 
                          : 'text-[#8a8a8a] hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      {/* Icon Renderer - handles both Lucide and custom SVG */}
                      <IconRenderer item={item} isActive={isActive} />
                      
                      {!isCollapsed && (
                        <span className="text-[13px] font-medium tracking-wide whitespace-nowrap">{item.label}</span>
                      )}
                      
                      {/* Active indicator bar */}
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

        <div className="px-6 py-2">
            <div className="h-[1px] w-full bg-[#f57c00]/40 shadow-[0_0_8px_rgba(245,124,0,0.3)]" />
        </div>

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