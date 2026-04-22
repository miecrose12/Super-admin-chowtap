import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Generating mock data so we have enough rows to paginate through
const generateMockData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Raheem Inioluwa ${index + 1}`,
    email: `inioluwa${index + 1}@gmail.com`,
    phone: `+234 706-564-${(1000 + index).toString().slice(-4)}`,
    orders: Math.floor(Math.random() * 500) + 10,
    spent: `₦ ${(Math.random() * 5000 + 100).toFixed(2)}`,
    date: "12/02/2025",
    time: "10:34AM",
    status: index % 3 === 0 ? "INACTIVE" : "ACTIVE",
  }));
};

export default function User() {
  const navigate = useNavigate();
  
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of rows per page

  // 2. Data source (Using 45 items to demonstrate multiple pages)
  const allUsers = useMemo(() => generateMockData(45), []);

  // 3. Derived values for current page
  const totalItems = allUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handleRowClick = () => {
    navigate('/users/edit');
  };

  // 4. Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 5. Helper to generate page numbers with ellipses (e.g., 1 2 3 ... 10)
  const getPaginationGroup = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage, '...', totalPages];
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#e5e2e1] font-sans pb-12 pt-6">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[28px] font-bold tracking-wide text-white">
            User Management
          </h1>
        </div>

        {/* Top Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 w-full mb-8">
          {/* Total Users Card */}
          <div className="bg-[#1C1C1C] rounded-lg px-5 py-5 xl:px-6 xl:py-6 border-l-[3px] border-[#DC781B] flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
            <div className="flex-shrink-0">
              <p className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#A1A1AA] mb-2 uppercase">
                TOTAL USERS
              </p>
              <div className="flex flex-col">
                <span className="text-[2rem] lg:text-[2.25rem] font-bold leading-none mb-1.5 text-white">
                  {totalItems.toLocaleString()}
                </span>
                <span className="text-[#10B981] text-[10px] lg:text-xs font-semibold tracking-wide flex items-center gap-1">
                  ~ 12.4% <span className="text-[#00c564]/80 font-medium">from last month</span>
                </span>
              </div>
            </div>

            {/* Right Side Stats */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 xl:gap-8 pr-0 xl:pr-2">
              <div className="flex flex-col">
                <p className="text-[9px] lg:text-[10px] font-bold tracking-widest text-[#A1A1AA] mb-2 uppercase">
                  Completed<br />Registration
                </p>
                <span className="text-[1.5rem] lg:text-[1.75rem] font-bold leading-none text-white">
                  2,132
                </span>
              </div>
              
              <div className="hidden sm:block w-px h-10 lg:h-12 bg-gray-700/60"></div>
              
              <div className="flex flex-col">
                <p className="text-[9px] lg:text-[10px] font-bold tracking-widest text-[#A1A1AA] mb-2 uppercase">
                  Incomplete<br />Registration
                </p>
                <span className="text-[1.5rem] lg:text-[1.75rem] font-bold leading-none text-white">
                  124
                </span>
              </div>
            </div>
          </div>

          {/* Biggest Customer Card */}
          <div className="bg-[#1C1C1C] rounded-lg p-5 xl:p-7 w-full lg:w-[280px] xl:w-[340px] 2xl:w-[400px] flex flex-col relative overflow-hidden flex-shrink-0">
            <svg className="absolute -bottom-6 -right-6 w-40 h-40 xl:w-48 xl:h-48 text-white/[0.03]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#DC781B] mb-2 uppercase">
                  BIGGEST CUSTOMER
                </p>
                <h4 className="text-[1.15rem] xl:text-[22px] font-bold mb-2 tracking-wide text-white truncate">
                  JAIYEFEMI OLA
                </h4>
                <p className="text-[11px] xl:text-[13px] text-gray-400 leading-relaxed mb-4">
                  This user has placed <strong className="text-white font-semibold">350</strong><br className="hidden xl:block" />
                  {' '}orders and spent <strong className="text-white font-semibold">₦270,000.00</strong>.
                </p>
              </div>
              <button className="w-full xl:w-[130px] bg-[#DC781B] hover:bg-[#e88832] transition-colors text-black font-bold py-2.5 rounded text-[12px] xl:text-[13px] mt-auto">
                Review user
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 bg-[#0A0A0A] rounded-md px-4 py-3 flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search by name, email..."
              className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-gray-600"
            />
          </div>

          <button className="bg-[#DC781B] hover:bg-[#e88832] transition-colors text-black font-bold px-5 py-3 rounded-md flex items-center gap-2 text-[13px]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Advanced filters
          </button>
        </div>

        {/* Table */}
        <div className="bg-[#0A0A0A] rounded-md overflow-hidden border border-gray-900/50">
          <div className="overflow-x-auto min-h-[400px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#121212] border-b border-gray-800">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">USER PROFILE</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">PHONE NUMBER</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">ORDERS</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">TOTAL SPENT</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">LAST ACTIVITY</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#C7C7C7]">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {currentData.map((row) => (
                  <tr 
                    key={row.id} 
                    onClick={handleRowClick}
                    className="hover:bg-[#151515] transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-[#E5E5E5] text-black font-bold rounded flex items-center justify-center text-[11px] tracking-tight">IR</div>
                        <div>
                          <p className="font-semibold text-[13px] text-gray-200">{row.name}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5">{row.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[12px] font-medium text-gray-300">{row.phone}</td>
                    <td className="px-6 py-4 text-[12px] font-medium text-gray-300">{row.orders}</td>
                    <td className="px-6 py-4 text-[12px] font-semibold text-gray-200">{row.spent}</td>
                    <td className="px-6 py-4">
                      <p className="text-[12px] text-gray-300 font-medium">{row.date}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{row.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      {row.status === "ACTIVE" ? (
                        <span className="inline-flex items-center px-2 py-1 rounded text-[9px] font-extrabold bg-[#00c564]/10 text-[#00c564] tracking-widest">ACTIVE</span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded text-[9px] font-extrabold bg-red-500/10 text-red-500 tracking-widest">INACTIVE</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dynamic Pagination Control */}
          <div className="px-6 py-5 flex items-center justify-between text-[12px]">
            <p className="text-gray-500">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of {totalItems} users
            </p>
            <div className="flex items-center gap-1.5">
              {/* Prev Button */}
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-7 h-7 flex items-center justify-center rounded text-lg pb-0.5 transition-colors ${
                  currentPage === 1 ? "text-gray-700 cursor-not-allowed" : "text-gray-600 hover:text-white"
                }`}
              >
                &lt;
              </button>

              {/* Page Numbers */}
              {getPaginationGroup().map((item, index) => (
                item === '...' ? (
                  <span key={`dots-${index}`} className="w-7 h-7 flex items-center justify-center text-gray-600 tracking-widest">
                    ...
                  </span>
                ) : (
                  <button 
                    key={item}
                    onClick={() => handlePageClick(item)}
                    className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                      currentPage === item 
                        ? "bg-[#DC781B] text-black font-bold" 
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              ))}

              {/* Next Button */}
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`w-7 h-7 flex items-center justify-center rounded text-lg pb-0.5 transition-colors ${
                  currentPage === totalPages ? "text-gray-700 cursor-not-allowed" : "text-gray-600 hover:text-white"
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}