import { Search, Filter } from 'lucide-react';

export default function RidersTableControls({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  statusDropdownOpen,
  setStatusDropdownOpen,
  setCurrentPage,
}) {
  const handleStatusFilterChange = (status) => {
    setStatusFilter(status === statusFilter ? null : status);
    setCurrentPage(1);
    setStatusDropdownOpen(false);
  };

  return (
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
          className="bg-[#141414] border border-gray-800 hover:bg-[#1f1f1f] transition-colors text-gray-300 px-4 py-2.5 rounded-md text-sm flex items-center space-x-2"
        >
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
  );
}