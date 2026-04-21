{/* FIXED Layout Component - This is the only file you need to update */}
import React, { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';   {/* ← your existing Sidebar file */}
import Header from './Header';     {/* ← your existing Header file */}

const Layout = ({ onLogout }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="flex h-screen overflow-hidden bg-[#0E0E0E]">
      {/* Sidebar stays exactly as you wrote it (fixed left-0 w-72) */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        isCollapsed={isCollapsed}
        onCloseMobile={closeMobile}
        onToggleCollapse={toggleCollapse}
        onLogout={onLogout}
      />

      {/* 
        ████████  THIS IS THE FIX  ████████
        We add `lg:ml-72` so the entire right side (Header + main content)
        starts exactly after the 288px sidebar on desktop.
        On mobile (below lg) there is no left margin → hamburger works perfectly.
      */}
      <div className={`flex flex-1 flex-col overflow-hidden transition-all duration-300 ${
        isCollapsed ? 'lg:ml-20' : 'lg:ml-72'
      }`}>
        
        {/* Header now sits perfectly to the right of the sidebar */}
        <Header 
          toggleMobileSidebar={toggleMobile} 
          /* you can pass isCollapsed later if you want to hide campus text when collapsed */
        />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>

      {/* Optional mobile backdrop (nice UX) */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={closeMobile}
        />
      )}
    </div>
  );
};

export default Layout;