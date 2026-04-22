import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Search, 
  Filter, 
  Star, 
  Users, 
  Bike, 
  ShoppingBag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Riders = () => {
  const navigate = useNavigate();
  
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('Today');
  const [isCustomPeriod, setIsCustomPeriod] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState(null);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const itemsPerPage = 8;

  // Mock data - 130 riders total
  const generateRidersData = () => {
    const baseNames = ['Raheem IniOluwa', 'Chioma Adeyemi', 'Tunde Okafor', 'Zainab Hassan', 'Emeka Nwosu'];
    const baseEmails = ['inioluwa@gmail.com', 'chioma@gmail.com', 'tunde@gmail.com', 'zainab@gmail.com', 'emeka@gmail.com'];
    const basePhones = ['+234 706-564-8785', '+234 701-234-5678', '+234 703-456-7890', '+234 705-678-9012', '+234 704-890-1234'];
    const campuses = ['MCPHERSON UNIVERSITY', 'UNIVERSITY OF LAGOS', 'OAU ILE-IFE', 'ABU ZARIA', 'UNIBEN'];
    
    return Array.from({ length: 130 }, (_, i) => ({
      id: i,
      initials: 'IR',
      name: baseNames[i % baseNames.length],
      email: baseEmails[i % baseEmails.length],
      phone: basePhones[i % basePhones.length],
      completedOrders: 400 + Math.floor(Math.random() * 100),
      activeOrders: Math.floor(Math.random() * 5),
      campus: campuses[i % campuses.length],
      status: i % 13 === 2 ? 'INACTIVE' : 'ACTIVE'
    }));
  };

  const ridersData = useMemo(() => generateRidersData(), []);

  // Filter data based on search and status
  const filteredData = useMemo(() => {
    return ridersData.filter(rider => {
      const matchesSearch = rider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           rider.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = !statusFilter || rider.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [ridersData, searchQuery, statusFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleDateSelection = (option) => {
    setSelectedDateRange(option);
    setDateDropdownOpen(false);
    if (option === 'Custom period') {
      setIsCustomPeriod(true);
    } else {
      setIsCustomPeriod(false);
    }
  };

  const handleRowClick = () => {
    navigate('/riders/riders-details');
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status === statusFilter ? null : status);
    setCurrentPage(1);
    setStatusDropdownOpen(false);
  };

  const dateOptions = [
    'Today', 'Yesterday', 'This week', 'This month', 
    'Last month', 'This year', 'All time'
  ];

  // Generate pagination buttons
  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 7;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxButtons) {
      if (currentPage <= 4) {
        endPage = maxButtons;
      } else if (currentPage > totalPages - 4) {
        startPage = totalPages - maxButtons + 1;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className="w-7 h-7 hover:bg-[#1f1f1f] hover:text-white flex items-center justify-center rounded transition-colors text-gray-500"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis-start" className="px-1 text-gray-500">
            ...
          </span>
        );
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
            currentPage === page
              ? 'bg-[#f37c22] text-white'
              : 'hover:bg-[#1f1f1f] hover:text-white text-gray-500'
          }`}
        >
          {page}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis-end" className="px-1 text-gray-500">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className="w-7 h-7 hover:bg-[#1f1f1f] hover:text-white flex items-center justify-center rounded transition-colors text-gray-500"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8 font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Rider Management</h1>
        
        <div className="flex items-center space-x-4">
          <button className="bg-[#f37c22] hover:bg-[#e06d1d] transition-colors text-white px-6 py-2 rounded-md font-medium">
            Leaderboard
          </button>

          {/* Date Filter & Custom Period Logic */}
          <div className="flex items-center space-x-2 relative">
            {isCustomPeriod && (
              <div className="flex items-center space-x-2 animate-in fade-in slide-in-from-right-4 duration-300">
                <input 
                  type="text" 
                  defaultValue="03 Mar, 2024" 
                  className="bg-[#141414] border border-gray-800 text-gray-300 text-sm rounded-md px-4 py-2 w-32 focus:outline-none focus:border-[#f37c22]" 
                />
                <input 
                  type="text" 
                  placeholder="To" 
                  className="bg-[#141414] border border-gray-800 text-gray-300 text-sm rounded-md px-4 py-2 w-32 focus:outline-none focus:border-[#f37c22]" 
                />
                <button className="bg-[#f37c22] hover:bg-[#e06d1d] text-white px-4 py-2 rounded-md text-sm font-medium">
                  Apply
                </button>
              </div>
            )}

            <div className="relative">
              <button
                onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                className="bg-[#141414] border border-gray-800 hover:bg-[#1f1f1f] transition-colors text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2"
              >
                <Calendar size={16} className="text-gray-400" />
                <span>{selectedDateRange}</span>
              </button>

              {/* Dropdown Menu */}
              {dateDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1A1A1A] border border-gray-800 rounded-md shadow-2xl py-2 z-50">
                  {dateOptions.map(option => (
                    <button
                      key={option}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors"
                      onClick={() => handleDateSelection(option)}
                    >
                      {option}
                    </button>
                  ))}
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors mt-1 border-t border-gray-800"
                    onClick={() => handleDateSelection('Custom period')}
                  >
                    Custom period
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start">
          <div>
            <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Total Riders</p>
            <h2 className="text-4xl font-bold">{ridersData.length}</h2>
          </div>
          <Bike className="text-gray-600" size={24} />
        </div>
        
        <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start">
          <div>
            <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Active Riders</p>
            <h2 className="text-4xl font-bold">{ridersData.filter(r => r.status === 'ACTIVE').length}</h2>
          </div>
          <Users className="text-gray-600" size={24} />
        </div>

        <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start">
          <div>
            <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Active Orders</p>
            <h2 className="text-4xl font-bold">{ridersData.reduce((sum, r) => sum + r.activeOrders, 0)}</h2>
          </div>
          <ShoppingBag className="text-gray-600" size={24} />
        </div>

        <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start">
          <div>
            <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Average Riders Rating</p>
            <h2 className="text-4xl font-bold">4.0</h2>
          </div>
          <Star className="text-[#f37c22]" size={24} fill="currentColor" />
        </div>
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by rider name..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-[#141414] border-none text-gray-300 text-sm rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
            className="bg-[#141414] hover:bg-[#1f1f1f] transition-colors text-gray-300 px-4 py-2.5 rounded-md text-sm flex items-center space-x-2">
            <Filter size={16} />
            <span>Status {statusFilter && `(${statusFilter})`}</span>
          </button>
          
          {statusDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1A1A1A] border border-gray-800 rounded-md shadow-2xl py-2 z-50">
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors"
                onClick={() => handleStatusFilterChange(null)}
              >
                All Status
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors"
                onClick={() => handleStatusFilterChange('ACTIVE')}
              >
                Active
              </button>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors"
                onClick={() => handleStatusFilterChange('INACTIVE')}
              >
                Inactive
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-[#141414] rounded-md overflow-hidden pb-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Rider Profile</th>
              <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Phone Number</th>
              <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase text-center">Completed Orders</th>
              <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase text-center">Active Orders</th>
              <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Campus</th>
              <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((rider, index) => (
                <tr 
                  key={rider.id} 
                  onClick={handleRowClick}
                  className="cursor-pointer border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 text-black font-bold flex items-center justify-center rounded-[4px] text-sm">
                        {rider.initials}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-200">{rider.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{rider.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {rider.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 text-center">
                    {rider.completedOrders}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 text-center">
                    {rider.activeOrders}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-gray-300 tracking-wide">
                    {rider.campus}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[11px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-opacity-10 ${
                      rider.status === 'ACTIVE' 
                        ? 'text-[#00C853] bg-[#00C853]' 
                        : 'text-[#D50000] bg-[#D50000]'
                    }`}>
                      {rider.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-400">
                  No riders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <div>
          Showing {filteredData.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} riders
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          {getPaginationButtons()}
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Riders;