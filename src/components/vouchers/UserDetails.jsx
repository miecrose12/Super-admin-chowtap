import React, { useState } from 'react';
import { ArrowLeft, Ticket, Wallet } from 'lucide-react';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import TransactionHistory from './TransactionHistory';


const UserDetails = ({ user, onBack, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8 font-sans">
      {/* Tab Navigation */}
      <div className="flex items-center gap-8 border-b border-[#222] mb-8">
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

      {/* Header Section */}
      <UserHeader user={user} onBack={onBack} />

      {/* Stats Cards */}
      <UserStats />

      {/* Transaction History */}
      <TransactionHistory />
    </div>
  );
};

export default UserDetails;