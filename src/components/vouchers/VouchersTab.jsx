import React, { useState, useMemo } from 'react';
import { Search, Plus, Pencil, Trash2 } from 'lucide-react';
import { Utensils, Coffee, Wine, Sparkles } from 'lucide-react';
import StatCard from './StatCard';
import VouchersTable from './VoucherTable';
import PaginationControl from './PaginationControll';


const VOUCHERS_DATA = [
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

const VouchersTab = ({ onOpenModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [vouchers, setVouchers] = useState(VOUCHERS_DATA);
  const itemsPerPage = 5;

  const filteredVouchers = useMemo(() => {
    return vouchers.filter(voucher => 
      voucher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voucher.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [vouchers, searchQuery]);

  const totalPages = Math.ceil(filteredVouchers.length / itemsPerPage);
  const paginatedVouchers = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredVouchers.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredVouchers, currentPage]);

  const handleToggleStatus = (id) => {
    setVouchers(prevVouchers => 
      prevVouchers.map(voucher => 
        voucher.id === id 
          ? { ...voucher, status: voucher.status === 'LIVE' ? 'INACTIVE' : 'LIVE' } 
          : voucher
      )
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Active Vouchers" value="12,480" />
        <StatCard title="Gross Revenue" value="₦1.2M" subtext="Gross Sales YTD" />
        <StatCard title="Unspent Liabilities" value="₦842k" subtext="Outstanding Balances" />
        <div className="bg-[#1a1a1a] p-5 rounded-lg border border-[#222] relative overflow-hidden">
          <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Release Options</div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-white">482</span>
            <span className="text-[11px] text-[#6B7280]">/30/24</span>
          </div>
          <div className="absolute bottom-4 left-5 flex items-end gap-1 opacity-80">
            {[3, 5, 2, 4].map((h, i) => (
              <div key={i} className={`w-1 h-${h} bg-[#DC781B] rounded-t-sm`}></div>
            ))}
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
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-[#151515] border border-[#222] rounded-md py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1a1a1a] border border-[#222] text-gray-400 rounded-md text-xs font-semibold flex items-center gap-2 hover:bg-[#222]">
            STATUS: ALL
          </button>
          <button 
            onClick={onOpenModal}
            className="px-4 py-2 bg-[#DC781B] hover:bg-[#C86515] text-[#000000] rounded-md text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Plus size={16} /> CREATE NEW VOUCHER
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-2 bg-[#0f0f0f]">
        <VouchersTable 
          vouchers={paginatedVouchers}
          onToggleStatus={handleToggleStatus}
          onEdit={onOpenModal}
        />

        {filteredVouchers.length > 0 && (
          <PaginationControl 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredVouchers.length}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default VouchersTab;