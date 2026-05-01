import React, { useState } from 'react';
import { MoreVertical, Eye, Pause, RotateCcw, User } from 'lucide-react';

const getStatusStyles = (status) => {
  const styles = {
    ACTIVE: { bg: 'bg-green-900/30', text: 'text-green-500' },
    FLAGGED: { bg: 'bg-yellow-900/30', text: 'text-yellow-500' },
    INACTIVE: { bg: 'bg-gray-800', text: 'text-gray-500' },
  };
  return styles[status] || styles.INACTIVE;
};

const UsersTable = ({ users, onViewDetails }) => {
  const [actionDropdowns, setActionDropdowns] = useState({});

  const toggleDropdown = (userId) => {
    setActionDropdowns(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleAction = (callback, userId) => {
    callback?.(userId);
    setActionDropdowns(prev => ({ ...prev, [userId]: false }));
  };

  return (
    <>
      <div className="bg-[#131313] grid grid-cols-12 gap-4 px-4 py-4 border-b border-[#222] text-[10px] font-bold text-[#FFB782] uppercase tracking-wider">
        <div className="col-span-3">User Identity</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-3">Campus</div>
        <div className="col-span-3">Voucher Balance</div>
        <div className="col-span-1 text-right pr-4">Actions</div>
      </div>

      <div className="divide-y divide-[#1a1a1a]">
        {users.length > 0 ? (
          users.map((user) => {
            const statusStyle = getStatusStyles(user.status);
            return (
              <div key={user.id} className="grid grid-cols-12 gap-4 items-center px-4 py-5 hover:bg-[#151515] transition-colors relative">
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
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-wider ${statusStyle.bg} ${statusStyle.text}`}>
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
                <div className="col-span-1 flex items-center justify-end pr-4 relative">
                  <button 
                    onClick={() => toggleDropdown(user.id)}
                    className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-[#222] rounded"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {/* Dropdown Menu */}
                  {actionDropdowns[user.id] && (
                    <div className="absolute right-0 top-full mt-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg z-10 min-w-[180px] overflow-hidden">
                      <button
                        onClick={() => onViewDetails(user)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#252525] hover:text-white transition-colors border-b border-[#2a2a2a] flex items-center gap-2"
                      >
                        <Eye size={16} /> View Details
                      </button>
                      <button
                        onClick={() => handleAction((id) => console.log('Suspend:', id), user.id)}
                        className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-colors border-b border-[#2a2a2a] flex items-center gap-2"
                      >
                        <Pause size={16} /> Suspend Account
                      </button>
                      <button
                        onClick={() => handleAction((id) => console.log('Reactivate:', id), user.id)}
                        className="w-full text-left px-4 py-3 text-sm text-green-400 hover:bg-green-950/20 hover:text-green-300 transition-colors flex items-center gap-2"
                      >
                        <RotateCcw size={16} /> Reactivate Account
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-12 px-4 py-8 text-center text-gray-500">
            No users found matching your search.
          </div>
        )}
      </div>
    </>
  );
};

export default UsersTable;