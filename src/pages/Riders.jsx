'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Riders = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('Today');
  const [isCustomPeriod, setIsCustomPeriod] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState(null);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  // Date Range States
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const itemsPerPage = 8;

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDateDropdownOpen(false);
        setStatusDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const filteredData = useMemo(() => {
    return ridersData.filter(rider => {
      const matchesSearch = rider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            rider.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = !statusFilter || rider.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [ridersData, searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleDateSelection = (option) => {
    setSelectedDateRange(option);
    setDateDropdownOpen(false);
    setIsCustomPeriod(option === 'Custom period');
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status === statusFilter ? null : status);
    setCurrentPage(1);
    setStatusDropdownOpen(false);
  };

  const dateOptions = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time'];

  return (
    <>
      <style>{`
        .react-datepicker {
          background-color: #1A1A1A !important;
          border: 1px solid #2A2A2A !important;
          font-family: inherit !important;
        }
        .react-datepicker__header {
          background-color: #141414 !important;
          border-bottom: 1px solid #2A2A2A !important;
        }
        .react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker__day {
          color: #E5E7EB !important;
        }
        .react-datepicker__day:hover {
          background-color: #2A2A2A !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--in-range {
          background-color: #f37c22 !important;
          color: white !important;
        }
        .react-datepicker__day--disabled {
          color: #4B5563 !important;
        }
      `}</style>

      <div className="min-h-screen bg-[#0e0e0e] text-white p-8 font-sans">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Rider Management</h1>
          
          <div className="flex items-center space-x-4" ref={dropdownRef}>
            <button className="bg-[#f37c22] hover:bg-[#e06d1d] transition-colors text-white px-6 py-2 rounded-md font-medium">
              Leaderboard
            </button>

            {/* Date Filter & Custom Period Logic */}
            <div className="flex items-center space-x-2">
              {isCustomPeriod && (
                <div className="flex items-center space-x-2 animate-in fade-in slide-in-from-right-4 duration-300">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    className="bg-[#141414] border border-gray-800 text-gray-300 text-sm rounded-md px-4 py-2 w-32 focus:outline-none focus:border-[#f37c22]"
                  />
                  <span className="text-gray-600">To</span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
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
                  className="bg-[#141414] border border-gray-800 hover:bg-[#1f1f1f] transition-colors text-white px-4 py-2 rounded-md text-sm flex items-center space-x-2 min-w-[120px] justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span>{selectedDateRange}</span>
                  </div>
                </button>

                {dateDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#1A1A1A] border border-gray-800 rounded-md shadow-2xl py-2 z-50">
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
                      className="w-full text-left px-4 py-2 text-sm text-[#f37c22] hover:bg-[#2A2A2A] transition-colors mt-1 border-t border-gray-800 pt-2"
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
          <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
            <div>
              <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Total Riders</p>
              <h2 className="text-4xl font-bold">{ridersData.length}</h2>
            </div>
            <Bike className="text-gray-600" size={24} />
          </div>
          
          <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
            <div>
              <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Active Riders</p>
              <h2 className="text-4xl font-bold">{ridersData.filter(r => r.status === 'ACTIVE').length}</h2>
            </div>
            <Users className="text-gray-600" size={24} />
          </div>

          <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
            <div>
              <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Active Orders</p>
              <h2 className="text-4xl font-bold">{ridersData.reduce((sum, r) => sum + r.activeOrders, 0)}</h2>
            </div>
            <ShoppingBag className="text-gray-600" size={24} />
          </div>

          <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
            <div>
              <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Avg Rating</p>
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
              className="w-full bg-[#141414] border border-gray-800 text-gray-300 text-sm rounded-md pl-10 pr-4 py-3 focus:outline-none focus:border-[#f37c22] transition-colors"
            />
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
              className="bg-[#141414] border border-gray-800 hover:bg-[#1f1f1f] transition-colors text-gray-300 px-4 py-2.5 rounded-md text-sm flex items-center space-x-2">
              <Filter size={16} />
              <span>Status {statusFilter && `(${statusFilter})`}</span>
            </button>
            
            {statusDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#1A1A1A] border border-gray-800 rounded-md shadow-2xl py-2 z-50">
                {['All Status', 'ACTIVE', 'INACTIVE'].map((status) => (
                  <button
                    key={status}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2A2A2A] transition-colors"
                    onClick={() => handleStatusFilterChange(status === 'All Status' ? null : status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-[#000000] border border-black rounded-md overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#000000] bg-[#131313]">
                <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Rider Profile</th>
                <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Phone Number</th>
                <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase text-center">Completed</th>
                <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase text-center">Active</th>
                <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Campus</th>
                <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A1A1A]">
              {currentData.length > 0 ? (
                currentData.map((rider) => (
                  <tr 
                    key={rider.id} 
                    onClick={() => navigate('/riders/riders-details')}
                    className="cursor-pointer hover:bg-[#1A1A1A] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#f37c22] bg-opacity-20 text-[#f37c22] font-bold flex items-center justify-center rounded-[4px] text-sm">
                          {rider.initials}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">{rider.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{rider.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{rider.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-300 text-center">{rider.completedOrders}</td>
                    <td className="px-6 py-4 text-sm text-gray-300 text-center">{rider.activeOrders}</td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-300 tracking-wide">{rider.campus}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-opacity-10 ${
                        rider.status === 'ACTIVE' ? 'text-[#00C853] bg-[#00C853]' : 'text-[#D50000] bg-[#D50000]'
                      }`}>
                        {rider.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-20 text-center text-gray-500 italic">No riders found matching your criteria.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <div>Showing {filteredData.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} riders</div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 hover:text-white transition-colors disabled:opacity-20"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) < 2)
                .map((p, i, arr) => (
                  <React.Fragment key={p}>
                    {i > 0 && p - arr[i - 1] > 1 && <span className="px-1">...</span>}
                    <button
                      onClick={() => handlePageChange(p)}
                      className={`w-8 h-8 rounded text-xs transition-colors ${currentPage === p ? 'bg-[#f37c22] text-white' : 'hover:bg-[#1A1A1A]'}`}
                    >
                      {p}
                    </button>
                  </React.Fragment>
                ))}
            </div>
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 hover:text-white transition-colors disabled:opacity-20"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Riders;