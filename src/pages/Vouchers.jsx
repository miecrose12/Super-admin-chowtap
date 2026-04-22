import React, { useState, useMemo } from 'react';
import { 
  Search, Plus, Pencil, Trash2, MoreVertical, X, Info, 
  ChevronLeft, ChevronRight, Filter, Calendar, Utensils, 
  Coffee, Wine, Sparkles, User, Ticket, Wallet
} from 'lucide-react';

const Vouchers = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  
  // Pagination state for vouchers
  const [voucherCurrentPage, setVoucherCurrentPage] = useState(1);
  const vouchersPerPage = 5;
  
  // Pagination state for users
  const [userCurrentPage, setUserCurrentPage] = useState(1);
  const usersPerPage = 5;
  
  // Search state
  const [voucherSearchQuery, setVoucherSearchQuery] = useState('');
  const [userSearchQuery, setUserSearchQuery] = useState('');

  // All vouchers (simulating a larger dataset)
  const allVouchers = [
    { id: 'VX-001-A42', name: 'Gourmet Feast Pass', salePrice: '85.00', originalValue: '100.00', status: 'LIVE', icon: <Utensils size={16} className="text-orange-500" /> },
    { id: 'VX-102-B84', name: 'Artisan Brew Card', salePrice: '12.00', originalValue: '15.50', status: 'INACTIVE', icon: <Coffee size={16} className="text-gray-400" /> },
    { id: 'VX-205-C11', name: 'Mixology Night Out', salePrice: '65.00', originalValue: '85.00', status: 'LIVE', icon: <Wine size={16} className="text-orange-500" /> },
    { id: 'VX-308-D77', name: 'Wellness Retreat', salePrice: '210.00', originalValue: '250.00', status: 'LIVE', icon: <Sparkles size={16} className="text-orange-500" /> },
    { id: 'VX-308-D78', name: 'Premium Dining Pass', salePrice: '150.00', originalValue: '200.00', status: 'LIVE', icon: <Utensils size={16} className="text-orange-500" /> },
    { id: 'VX-409-E23', name: 'Coffee Lover Bundle', salePrice: '25.00', originalValue: '35.00', status: 'LIVE', icon: <Coffee size={16} className="text-orange-500" /> },
    { id: 'VX-510-F56', name: 'Wine Tasting Ticket', salePrice: '95.00', originalValue: '120.00', status: 'INACTIVE', icon: <Wine size={16} className="text-gray-400" /> },
    { id: 'VX-611-G89', name: 'Spa & Wellness', salePrice: '180.00', originalValue: '240.00', status: 'LIVE', icon: <Sparkles size={16} className="text-orange-500" /> },
    { id: 'VX-712-H12', name: 'Gourmet Lunch Deal', salePrice: '55.00', originalValue: '75.00', status: 'LIVE', icon: <Utensils size={16} className="text-orange-500" /> },
    { id: 'VX-813-I45', name: 'Barista Workshop', salePrice: '40.00', originalValue: '55.00', status: 'INACTIVE', icon: <Coffee size={16} className="text-gray-400" /> },
    { id: 'VX-914-J78', name: 'Cocktail Masterclass', salePrice: '120.00', originalValue: '160.00', status: 'LIVE', icon: <Wine size={16} className="text-orange-500" /> },
    { id: 'VX-015-K01', name: 'Beauty & Wellness', salePrice: '175.00', originalValue: '225.00', status: 'LIVE', icon: <Sparkles size={16} className="text-orange-500" /> },
  ];

  // All users (simulating a larger dataset)
  const allUsers = [
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

  // State for vouchers (can be updated)
  const [vouchers, setVouchers] = useState(allVouchers);

  // Filter vouchers based on search
  const filteredVouchers = useMemo(() => {
    return vouchers.filter(voucher => 
      voucher.name.toLowerCase().includes(voucherSearchQuery.toLowerCase()) ||
      voucher.id.toLowerCase().includes(voucherSearchQuery.toLowerCase())
    );
  }, [vouchers, voucherSearchQuery]);

  // Filter users based on search
  const filteredUsers = useMemo(() => {
    return allUsers.filter(user => 
      user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(userSearchQuery.toLowerCase())
    );
  }, [userSearchQuery]);

  // Paginate vouchers
  const totalVoucherPages = Math.ceil(filteredVouchers.length / vouchersPerPage);
  const paginatedVouchers = useMemo(() => {
    const startIdx = (voucherCurrentPage - 1) * vouchersPerPage;
    return filteredVouchers.slice(startIdx, startIdx + vouchersPerPage);
  }, [filteredVouchers, voucherCurrentPage]);

  // Paginate users
  const totalUserPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = useMemo(() => {
    const startIdx = (userCurrentPage - 1) * usersPerPage;
    return filteredUsers.slice(startIdx, startIdx + usersPerPage);
  }, [filteredUsers, userCurrentPage]);

  // Toggle voucher status
  const handleToggleStatus = (id) => {
    setVouchers(prevVouchers => 
      prevVouchers.map(voucher => 
        voucher.id === id 
          ? { ...voucher, status: voucher.status === 'LIVE' ? 'INACTIVE' : 'LIVE' } 
          : voucher
      )
    );
  };

  // Reset to page 1 when search query changes
  const handleVoucherSearch = (query) => {
    setVoucherSearchQuery(query);
    setVoucherCurrentPage(1);
  };

  const handleUserSearch = (query) => {
    setUserSearchQuery(query);
    setUserCurrentPage(1);
  };

  // Pagination component
  const PaginationControl = ({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage }) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <div className="flex justify-between items-center py-6 px-4 border-t border-[#1a1a1a] mt-4">
        <div className="text-[11px] text-gray-500 uppercase font-semibold tracking-wider">
          Showing {startItem} to {endItem} of {totalItems} items
        </div>
        <div className="flex gap-1 items-center">
          <button 
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Page numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-7 h-7 flex items-center justify-center rounded text-xs font-semibold transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#DC781B] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <span className="text-gray-600">...</span>
              <button
                onClick={() => onPageChange(totalPages)}
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white text-xs font-semibold"
              >
                {totalPages}
              </button>
            </>
          )}

          <button 
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 font-sans p-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Navigation Tabs */}
        <div className="flex items-center gap-8 border-b border-[#222] mb-6">
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 text-[15px] font-semibold tracking-wide transition-colors pb-3 border-b-2 ${
              activeTab === 'products' 
                ? 'text-[#DC781B] border-[#DC781B]' 
                : 'text-gray-400 border-transparent hover:text-gray-300'
            }`}
          >
            <Ticket size={20} className={activeTab === 'products' ? 'text-[#DC781B]' : 'text-gray-400'} />
            Voucher Products
          </button>
          <button 
            onClick={() => setActiveTab('wallet')}
            className={`flex items-center gap-2 text-[15px] font-semibold tracking-wide transition-colors pb-3 border-b-2 ${
              activeTab === 'wallet' 
                ? 'text-[#DC781B] border-[#DC781B]' 
                : 'text-gray-400 border-transparent hover:text-gray-300'
            }`}
          >
            <Wallet size={20} className={activeTab === 'wallet' ? 'text-[#DC781B]' : 'text-gray-400'} />
            User Wallet
          </button>
        </div>

        {/* --- VOUCHER PRODUCTS VIEW --- */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Header Area */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-white">Voucher Management</h1>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-[#1f1f1f] border border-[#333] text-gray-300 rounded text-xs font-medium hover:bg-[#2a2a2a]">Last 30 Days</button>
                <button className="px-4 py-1.5 bg-transparent border border-transparent text-gray-500 rounded text-xs font-medium hover:text-gray-300">Quarterly</button>
                <button className="px-4 py-1.5 flex items-center gap-2 bg-transparent border border-transparent text-gray-500 rounded text-xs font-medium hover:text-gray-300">
                  <Calendar size={14} /> Custom Range
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Active Vouchers</div>
                <div className="text-3xl font-bold text-white mb-2">12,480</div>
                <div className="h-[2px] w-12 bg-[#DC781B]"></div>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Gross Revenue</div>
                <div className="text-3xl font-bold text-white mb-1">₦1.2M</div>
                <div className="text-[11px] text-gray-500">Gross Sales YTD</div>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Unspent Liabilities</div>
                <div className="text-3xl font-bold text-white mb-1">₦842k</div>
                <div className="text-[11px] text-gray-500">Outstanding Balances</div>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222] relative overflow-hidden">
                <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Release Options</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-white">482</span>
                  <span className="text-[11px] text-[#6B7280]">/30/24</span>
                </div>
                <div className="absolute bottom-4 left-5 flex items-end gap-1 opacity-80">
                  <div className="w-1 h-3 bg-[#DC781B] rounded-t-sm"></div>
                  <div className="w-1 h-5 bg-[#DC781B] rounded-t-sm"></div>
                  <div className="w-1 h-2 bg-[#DC781B] rounded-t-sm"></div>
                  <div className="w-1 h-4 bg-[#DC781B] rounded-t-sm"></div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex justify-between items-center mt-4">
              <div className="relative w-[380px]">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search voucher names, IDs, or merchants..." 
                  value={voucherSearchQuery}
                  onChange={(e) => handleVoucherSearch(e.target.value)}
                  className="w-full bg-[#151515] border border-[#222] rounded-md py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#1a1a1a] border border-[#222] text-gray-400 rounded-md text-xs font-semibold flex items-center gap-2 hover:bg-[#222]">
                  STATUS: ALL
                </button>
                <button 
                  onClick={() => setIsVoucherModalOpen(true)}
                  className="px-4 py-2 bg-[#DC781B] hover:bg-[#C86515] text-[#000000] rounded-md text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Plus size={16} /> CREATE NEW VOUCHER
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="mt-2 bg-[#0f0f0f]">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-[#222] text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">
                <div className="col-span-4">Voucher Identity</div>
                <div className="col-span-2">Sale Price</div>
                <div className="col-span-2">Original Value</div>
                <div className="col-span-2">Active Status</div>
                <div className="col-span-2 text-right pr-2">Operations</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-[#1a1a1a]">
                {paginatedVouchers.length > 0 ? (
                  paginatedVouchers.map((voucher) => (
                    <div key={voucher.id} className="grid grid-cols-12 gap-4 items-center px-4 py-5 hover:bg-[#151515] transition-colors">
                      <div className="col-span-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                          {voucher.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-100">{voucher.name}</div>
                          <div className="text-[11px] text-[#6B7280] mt-0.5">ID: {voucher.id}</div>
                        </div>
                      </div>
                      <div className="col-span-2 text-sm font-medium text-gray-200">
                        ₦{voucher.salePrice}
                      </div>
                      <div className="col-span-2 text-sm font-medium text-gray-500">
                        ₦{voucher.originalValue}
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${voucher.status === 'LIVE' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                          <span className={`text-[11px] font-bold tracking-wide ${voucher.status === 'LIVE' ? 'text-green-500' : 'text-gray-500'}`}>
                            {voucher.status}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center justify-end gap-5">
                        <button 
                          onClick={() => handleToggleStatus(voucher.id)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors ${voucher.status === 'LIVE' ? 'bg-green-500' : 'bg-gray-600'}`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${voucher.status === 'LIVE' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                        </button>
                        <button onClick={() => setIsVoucherModalOpen(true)} className="text-gray-500 hover:text-white transition-colors">
                          <Pencil size={16} />
                        </button>
                        <button className="text-gray-500 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-12 px-4 py-8 text-center text-gray-500">
                    No vouchers found matching your search.
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredVouchers.length > 0 && (
                <PaginationControl 
                  currentPage={voucherCurrentPage}
                  totalPages={totalVoucherPages}
                  onPageChange={setVoucherCurrentPage}
                  totalItems={filteredVouchers.length}
                  itemsPerPage={vouchersPerPage}
                />
              )}
            </div>
          </div>
        )}

        {/* --- USER WALLET VIEW --- */}
        {activeTab === 'wallet' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-white">User Wallet Management</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">Active Users</div>
                <div className="text-3xl font-bold text-white mb-2">2,480</div>
                <div className="h-[2px] w-12 bg-[#DC781B]"></div>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">Gross Revenue</div>
                <div className="text-3xl font-bold text-white mb-1">₦1.2M</div>
                <div className="text-[11px] text-gray-500">Gross Sales YTD</div>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">Active Balance</div>
                <div className="text-3xl font-bold text-white mb-1">₦842k</div>
                <div className="text-[11px] text-gray-500">Outstanding Balances</div>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222]">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">Active Users</div>
                <div className="text-3xl font-bold text-white mb-1">842</div>
                <div className="text-[11px] text-gray-500">Users with active vouchers</div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex justify-between items-center mt-4">
              <div className="relative w-[380px]">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search user's name..." 
                  value={userSearchQuery}
                  onChange={(e) => handleUserSearch(e.target.value)}
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
            <div className="mt-2 bg-[#0f0f0f]">
              <div className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-[#222] text-[10px] font-bold text-[#FFB782] uppercase tracking-wider">
                <div className="col-span-3">User Identity</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-3">Campus</div>
                <div className="col-span-3">Voucher Balance</div>
                <div className="col-span-1 text-right pr-4">Actions</div>
              </div>

              <div className="divide-y divide-[#1a1a1a]">
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 items-center px-4 py-5 hover:bg-[#151515] transition-colors">
                      <div className="col-span-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[#1e293b] flex items-center justify-center text-blue-400 overflow-hidden">
                          <User size={24} className="mt-2" fill="currentColor"/>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-100">{user.name}</div>
                          <div className="text-[11px] text-gray-500 mt-0.5">ID: {user.id}</div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-wider
                          ${user.status === 'ACTIVE' ? 'bg-green-900/30 text-green-500' : 
                            user.status === 'FLAGGED' ? 'bg-yellow-900/30 text-yellow-500' : 
                            'bg-gray-800 text-gray-500'}`}>
                          {user.status}
                        </span>
                      </div>
                      <div className="col-span-3 text-sm text-gray-400">
                        {user.campus}
                      </div>
                      <div className="col-span-3">
                        <div className="text-sm font-semibold text-gray-200">₦{user.balance}</div>
                        <div className="text-[11px] text-[#FFB782] mt-0.5">{user.subText}</div>
                      </div>
                      <div className="col-span-1 flex items-center justify-end pr-4">
                        <button className="text-gray-500 hover:text-white transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-12 px-4 py-8 text-center text-gray-500">
                    No users found matching your search.
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredUsers.length > 0 && (
                <PaginationControl 
                  currentPage={userCurrentPage}
                  totalPages={totalUserPages}
                  onPageChange={setUserCurrentPage}
                  totalItems={filteredUsers.length}
                  itemsPerPage={usersPerPage}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* --- VOUCHER MODAL --- */}
      {isVoucherModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121212] w-full max-w-md rounded-xl shadow-2xl border border-[#222] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 pb-4 relative">
              <button 
                onClick={() => setIsVoucherModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="text-[10px] font-bold text-[#DC781B] tracking-widest uppercase mb-1">
                Catalog Entry #VX-0902
              </div>
              <h2 className="text-2xl font-bold text-white">Edit Voucher</h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 pt-2 space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Voucher Name <span className="text-[#DC781B]">*</span></label>
                  <span className="text-[10px] text-gray-600">Required</span>
                </div>
                <input 
                  type="text" 
                  defaultValue="Gourmet Burger Deluxe"
                  className="w-full bg-[#0a0a0a] border border-[#222] rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC781B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Sale Amount <span className="text-[#DC781B]">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₦</span>
                    <input 
                      type="text" 
                      defaultValue="45.00"
                      className="w-full bg-[#0a0a0a] border border-[#222] rounded-md pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC781B]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Original/Face Value</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₦</span>
                    <input 
                      type="text" 
                      defaultValue="65.00"
                      className="w-full bg-[#0a0a0a] border border-[#222] rounded-md pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-[#1a1a1a] border-l-2 border-orange-500 p-4 flex gap-3 rounded-r-md mt-2">
                <Info size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Modifying the face value will not retroactively affect vouchers already purchased by users. Changes apply only to new transactions generated after saving.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 pt-4 flex justify-end gap-3 border-t border-[#1a1a1a] bg-[#121212]">
              <button 
                onClick={() => setIsVoucherModalOpen(false)}
                className="px-5 py-2.5 bg-[#222] hover:bg-[#2a2a2a] text-white text-sm font-semibold rounded-md transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsVoucherModalOpen(false)}
                className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vouchers;