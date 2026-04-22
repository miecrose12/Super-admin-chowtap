import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, ShoppingBag, Store, Bike, 
  Wallet, Ticket, Gift, ReceiptText, ShieldCheck, 
  LifeBuoy, LogOut, ChevronLeft 
} from 'lucide-react';
import logo from '../../assets/Group 644.svg';

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

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'System Overview', initials: 'SO' },
    { path: '/users', icon: Users, label: 'User Management', initials: 'UM' },
    { path: '/orders', icon: ShoppingBag, label: 'Order Management', initials: 'OM' },
    { path: '/vendors', icon: Store, label: 'Vendor Management', initials: 'VM' },
    { path: '/riders', icon: Bike, label: 'Rider Management', initials: 'RM' },
    { path: '/revenue', icon: Wallet, label: 'Revenue', initials: 'RV' },
    { path: '/vouchers', icon: Ticket, label: 'Vouchers', initials: 'VC' },
    { path: '/special-orders', icon: Gift, label: 'Special Orders', initials: 'SP' },
    { path: '/transactions', icon: ReceiptText, label: 'Transactions', initials: 'TX' },
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
        <div className={`p-6 pb-2 flex items-center justify-between ${isCollapsed ? 'flex-col gap-4' : ''}`}>
          {/* Logo is always visible; text only shows when expanded */}
          <div className={`flex items-center gap-2 ${isCollapsed ? 'justify-center' : ''}`}>
            <img 
              src={logo} 
              alt="ChowTap logo" 
              className="w-7 h-7 flex-shrink-0 object-contain"
            />
            {!isCollapsed && (
              <h1 className="text-[#f57c00] text-xl font-bold tracking-tight">ChowTap</h1>
            )}
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
                const Icon = item.icon;
                
                return (
                  <li key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`
                        w-full flex items-center transition-all duration-200 rounded-lg
                        ${isCollapsed ? 'justify-center py-2.5' : 'py-2.5 px-4 gap-4'}
                        ${isActive 
                          ? 'bg-[#1a1a1a] text-[#f57c00]' 
                          : 'text-[#8a8a8a] hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      {isCollapsed ? (
                        <div className="flex items-center gap-1.5">
                          <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                          <span className={`text-[9px] font-bold tracking-widest uppercase leading-none transition-all
                            ${isActive ? 'text-[#f57c00]' : 'text-[#555] group-hover:text-[#888]'}`}>
                            {item.initials}
                          </span>
                        </div>
                      ) : (
                        <>
                          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                          <span className="text-[13px] font-medium tracking-wide whitespace-nowrap">{item.label}</span>
                        </>
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