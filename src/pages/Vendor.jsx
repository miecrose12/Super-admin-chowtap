import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Utility to generate mock data for testing pagination
const generateMockVendors = (count) => {
  const statuses = ['ACTIVE', 'SUSPENDED', 'PENDING'];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `BROS JOHN ${i + 1}`,
    avatar: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=64&h=64&fit=crop',
    email: `brosjohn${i + 1}@gmail.com`,
    rating: (Math.random() * (5 - 3) + 3).toFixed(1),
    campus: 'MCPHERSON UNIVERSITY',
    status: statuses[i % statuses.length],
    revenue: `N ${(Math.random() * 2000000).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
    orders: Math.floor(Math.random() * 2000).toLocaleString(),
    date: '12 February, 2026'
  }));
};

const VendorManagement = () => {
  const navigate = useNavigate();

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const allVendors = useMemo(() => generateMockVendors(132), []);

  // --- SELECTION STATE ---
  const [selectedIds, setSelectedIds] = useState([]);

  // --- PAGINATION CALCULATIONS ---
  const totalPages = Math.ceil(allVendors.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVendors = allVendors.slice(indexOfFirstItem, indexOfLastItem);

  // --- HANDLERS ---
  const toggleSelectOne = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    const currentIds = currentVendors.map(v => v.id);
    const allSelectedOnPage = currentIds.every(id => selectedIds.includes(id));
    
    if (allSelectedOnPage) {
      setSelectedIds(prev => prev.filter(id => !currentIds.includes(id)));
    } else {
      setSelectedIds(prev => [...new Set([...prev, ...currentIds])]);
    }
  };

  const handleRowClick = () => {
    navigate('/vendors/overview');
  };

  const StatusBadge = ({ status }) => {
    const styles = {
      ACTIVE: 'bg-[#0D2A18] text-[#1EC95E]',
      SUSPENDED: 'bg-[#3B1717] text-[#D83B3B]',
      PENDING: 'bg-[#3A2810] text-[#D4891C]',
    };
    return (
      <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider ${styles[status] || 'bg-gray-800'}`}>
        {status}
      </span>
    );
  };

  // Helper to render page numbers with logic
  const renderPaginationButtons = () => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first, last, and current +/- 1
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages.map((p, i) => (
      p === '...' ? (
        <span key={`sep-${i}`} className="text-gray-600 px-1 text-xs tracking-widest">...</span>
      ) : (
        <button
          key={p}
          onClick={() => setCurrentPage(p)}
          className={`w-7 h-7 flex items-center justify-center font-bold rounded-[4px] text-xs transition-colors ${
            currentPage === p ? 'bg-[#F28C28] text-black' : 'text-gray-400 hover:bg-[#1A1A1A]'
          }`}
        >
          {p}
        </button>
      )
    ));
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white p-8 font-sans">
      <h1 className="text-[28px] font-bold mb-6">Vendor Management</h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">
        <div className="xl:col-span-2 bg-[#1A1A1A] rounded-xl p-8 flex justify-between items-center shadow-lg border border-transparent">
          <div>
            <p className="text-[11px] text-gray-500 font-bold tracking-[0.15em] mb-3 uppercase">Total Vendors Revenue</p>
            <h2 className="text-4xl font-bold mb-2 tracking-tight">N 17,890,090.00</h2>
            <p className="text-xs font-medium mt-3">
              <span className="text-[#1EC95E]">~ 12.4%</span> 
              <span className="text-gray-500 ml-1">from last month</span>
            </p>
          </div>
          <div className="flex items-center space-x-8 pr-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-[10px] text-gray-500 font-bold tracking-widest leading-tight">
                <span>ACTIVE</span>
                <span>MERCHANTS</span>
              </div>
              <span className="text-3xl font-bold">132</span>
            </div>
            <div className="h-10 w-[1px] bg-[#333333]"></div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-[10px] text-gray-500 font-bold tracking-widest leading-tight">
                <span>PENDING</span>
                <span>APPROVALS</span>
              </div>
              <span className="text-3xl font-bold">3</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-xl p-8 relative overflow-hidden flex flex-col justify-center shadow-lg">
          <div className="relative z-10">
            <p className="text-[11px] text-[#F28C28] font-bold tracking-[0.15em] mb-2 uppercase">Action Required</p>
            <h3 className="text-xl font-bold mb-2">3 Pending Approvals</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-[240px]">
              Vendors waiting for identity verification and menu audit.
            </p>
            <button className="bg-[#F28C28] hover:bg-[#E07A1A] text-black text-sm font-bold py-2.5 px-6 rounded transition-colors active:scale-95">
              Review vendors
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search by merchant name..." 
            className="w-[320px] bg-[#0A0A0A] border border-[#000] text-white text-sm rounded-md pl-11 pr-4 py-2.5 focus:outline-none focus:border-gray-600 placeholder-gray-600"
          />
        </div>
        <button className="flex items-center space-x-2 bg-[#1A1A1A] hover:bg-[#222222] text-white text-sm px-4 py-2.5 rounded-md border border-gray-800 transition-colors">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          <span className="text-gray-300 font-medium">Status</span>
        </button>
      </div>

      {/* Table Area */}
      <div className="bg-[#0A0A0A] border-t border-gray-800/80 min-h-[500px] flex flex-col justify-between">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#141414] text-[10px] text-gray-400 tracking-[0.1em] uppercase font-bold">
              <th className="py-4 px-5 w-12 border-b border-gray-800">
                <div 
                  onClick={toggleSelectAll}
                  className={`w-[14px] h-[14px] rounded-[3px] border-[1.5px] cursor-pointer flex items-center justify-center transition-all ${
                    currentVendors.length > 0 && currentVendors.every(v => selectedIds.includes(v.id))
                      ? 'bg-[#F28C28] border-[#F28C28]' 
                      : 'border-gray-600 hover:border-[#F28C28]'
                  }`}
                >
                   {(currentVendors.length > 0 && currentVendors.every(v => selectedIds.includes(v.id))) && (
                    <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </th>
              <th className="py-4 px-4 border-b border-gray-800">Merchant Name</th>
              <th className="py-4 px-4 border-b border-gray-800">Campus</th>
              <th className="py-4 px-4 border-b border-gray-800">Status</th>
              <th className="py-4 px-4 border-b border-gray-800">Revenue</th>
              <th className="py-4 px-4 border-b border-gray-800">Orders</th>
              <th className="py-4 px-4 border-b border-gray-800">Date Joined</th>
              <th className="py-4 px-5 border-b border-gray-800 w-12"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentVendors.map((vendor) => {
              const isSelected = selectedIds.includes(vendor.id);
              return (
                <tr 
                  key={vendor.id} 
                  onClick={handleRowClick}
                  className="group transition-colors border-b border-[#1A1A1A] hover:bg-[#121212] cursor-pointer"
                >
                  <td className="py-3 px-5">
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelectOne(vendor.id);
                      }}
                      className={`w-[14px] h-[14px] rounded-[3px] border-[1.5px] cursor-pointer flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#F28C28] border-[#F28C28]' : 'border-[#F28C28]'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <img src={vendor.avatar} alt={vendor.name} className="w-9 h-9 rounded-md object-cover" />
                      <div>
                        <p className="font-bold text-gray-200 text-[13px]">{vendor.name}</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">{vendor.email} <span className="text-gray-600">|</span> {vendor.rating} rating</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[11px] font-bold text-gray-300 tracking-wider">
                    {vendor.campus}
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge status={vendor.status} />
                  </td>
                  <td className="py-3 px-4 font-bold text-gray-200 text-[13px]">
                    {vendor.revenue}
                  </td>
                  <td className="py-3 px-4 font-bold text-gray-200 text-[13px]">
                    {vendor.orders}
                  </td>
                  <td className="py-3 px-4 text-[12px] text-gray-400">
                    {vendor.date}
                  </td>
                  <td className="py-3 px-5 text-right">
                    <svg className="w-4 h-4 text-[#F28C28]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8v-4zm4 11.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* --- FOOTER / PAGINATION --- */}
        <div className="flex justify-between items-center py-6 px-2">
          <p className="text-[12px] text-gray-500 font-medium">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, allVendors.length)} of {allVendors.length} vendors
          </p>
          <div className="flex items-center space-x-1">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className={`w-8 h-8 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-800 cursor-not-allowed' : 'text-gray-600 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {renderPaginationButtons()}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className={`w-8 h-8 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-800 cursor-not-allowed' : 'text-gray-500 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement; 