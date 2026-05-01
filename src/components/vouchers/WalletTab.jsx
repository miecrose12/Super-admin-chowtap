import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import StatCard from './StatCard';
import UsersTable from './UsersTable';
import PaginationControl from './PaginationControll';


const USERS_DATA = [
  { id: 'UW-002-941', name: 'Marcus Thorne', status: 'ACTIVE', campus: 'Central University', balance: '5,000.00', subText: '1 Voucher Active' },
  { id: 'UW-145-230', name: 'Elena Rodriguez', status: 'ACTIVE', campus: 'Tech Institute', balance: '2,480.00', subText: '1 Voucher Active' },
  { id: 'UW-321-582', name: 'Julian Vance', status: 'FLAGGED', campus: 'Western Academy', balance: '2,500.00', subText: '1 Voucher Active' },
  { id: 'UW-230-993', name: 'Sarah Jenkins', status: 'INACTIVE', campus: 'Central University', balance: '0.00', subText: 'Expired 12 Days ago' },
  { id: 'UW-230-994', name: 'James Mitchell', status: 'ACTIVE', campus: 'Eastern College', balance: '1,250.00', subText: '2 Vouchers Active' },
  { id: 'UW-456-123', name: 'Olivia Chen', status: 'ACTIVE', campus: 'Northern University', balance: '3,750.00', subText: '1 Voucher Active' },
  { id: 'UW-567-234', name: 'David Kumar', status: 'FLAGGED', campus: 'South Tech', balance: '500.00', subText: 'Low Balance' },
  { id: 'UW-678-345', name: 'Sophie Laurent', status: 'ACTIVE', campus: 'Central University', balance: '4,200.00', subText: '3 Vouchers Active' },
  { id: 'UW-789-456', name: 'Marcus Williams', status: 'INACTIVE', campus: 'Western Academy', balance: '0.00', subText: 'Expired 5 Days ago' },
  { id: 'UW-890-567', name: 'Amelia Brown', status: 'ACTIVE', campus: 'Tech Institute', balance: '2,100.00', subText: '1 Voucher Active' },
  { id: 'UW-901-678', name: 'Nathan Garcia', status: 'ACTIVE', campus: 'Eastern College', balance: '3,300.00', subText: '2 Vouchers Active' },
  { id: 'UW-012-789', name: 'Isabella Martinez', status: 'ACTIVE', campus: 'Northern University', balance: '1,800.00', subText: '1 Voucher Active' },
];

const WalletTab = ({ onViewDetails }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

  const filteredUsers = useMemo(() => {
    return USERS_DATA.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Active Users" value="2,480" />
        <StatCard title="Gross Revenue" value="₦1.2M" subtext="Gross Sales YTD" />
        <StatCard title="Active Balance" value="₦842k" subtext="Outstanding Balances" />
        <StatCard title="Active Users" value="842" subtext="Users with active vouchers" />
      </div>

      {/* Action Bar */}
      <div className="flex justify-between items-center mt-4">
        <div className="relative w-[380px]">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search user's name..." 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-[#151515] border border-[#222] rounded-md py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1a1a1a] border border-[#222] text-gray-400 rounded-md text-xs font-semibold hover:bg-[#222]">
            BALANCE: ALL RANGES
          </button>
          <button className="px-4 py-2 bg-[#1a1a1a] border border-[#222] text-gray-300 rounded-md text-xs font-semibold flex items-center gap-2 hover:bg-[#222]">
            <Filter size={14} /> MORE FILTERS
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-2 bg-[#000000]">
        <UsersTable 
          users={paginatedUsers}
          onViewDetails={onViewDetails}
        />

        {filteredUsers.length > 0 && (
          <PaginationControl 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredUsers.length}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default WalletTab;