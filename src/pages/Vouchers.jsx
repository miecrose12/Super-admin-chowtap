import React, { useState, useRef, useEffect } from 'react';

import { Ticket, Wallet, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UserDetails from '../components/vouchers/UserDetails';
import VouchersTab from '../components/vouchers/VouchersTab';
import WalletTab from '../components/vouchers/WalletTab';
import VoucherModal from '../components/vouchers/VoucherModal';

const Vouchers = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [viewingUserDetails, setViewingUserDetails] = useState(null);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('All time');
  const [startDate, setStartDate] = useState(new Date('2026-03-03'));
  const [endDate, setEndDate] = useState(null);
  const dropdownRef = useRef(null);

  const periods = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time', 'Custom period'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (viewingUserDetails) {
    return (
      <UserDetails 
        user={viewingUserDetails}
        onBack={() => setViewingUserDetails(null)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  }

  return (
    <>
      <style>{`
        .react-datepicker {
          background-color: #161616 !important;
          border-color: #262626 !important;
          font-family: inherit !important;
          color: #d4d4d4 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }
        .react-datepicker__header {
          background-color: #111111 !important;
          border-bottom-color: #262626 !important;
        }
        .react-datepicker__current-month, .react-datepicker-time__header {
          color: #f5f5f5 !important;
        }
        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          color: #a0a0a0 !important;
        }
        .react-datepicker__day:hover, .react-datepicker__month-text:hover {
          background-color: #222 !important;
        }
        .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
          background-color: #DC781B !important;
          color: #111 !important;
          font-weight: bold;
        }
        .react-datepicker__day--keyboard-selected {
          background-color: rgba(220, 120, 27, 0.3) !important;
        }
        .react-datepicker__triangle {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#0f0f0f] text-gray-200 font-sans p-6">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header & Date Range */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-8 border-b border-[#222]">
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

            {/* Date Range Selector */}
            <div className="flex flex-wrap items-center gap-3 relative z-40">
              {selectedPeriod === 'Custom period' && (
                <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd MMM, yyyy"
                    placeholderText="Start Date"
                    className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#DC781B] outline-none transition-colors"
                  />
                  <span className="text-[#666] text-[12px]">To</span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd MMM, yyyy"
                    placeholderText="End Date"
                    className="bg-[#111111] border border-[#262626] text-[#a0a0a0] px-3 py-2 rounded-[4px] text-[12px] w-[115px] focus:border-[#DC781B] outline-none transition-colors"
                  />
                  <button className="bg-[#DC781B] hover:bg-[#cc5910] text-white font-bold px-4 py-2 rounded-[4px] text-[12px] transition-colors shadow-md">
                    Apply
                  </button>
                </div>
              )}

              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between gap-3 bg-[#161616] hover:bg-[#1f1f1f] text-[#d4d4d4] px-4 py-2.5 rounded-[4px] text-[12px] font-medium border border-[#262626] transition-colors min-w-[140px]"
                >
                  {selectedPeriod}
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-[calc(100%+8px)] w-full bg-[#161616] border border-[#262626] rounded-[6px] shadow-2xl py-1 z-50">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => { setSelectedPeriod(period); setIsDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-[11px] font-medium transition-colors ${
                          selectedPeriod === period ? 'text-[#DC781B] bg-[#222]' : 'text-[#888] hover:bg-[#1f1f1f] hover:text-[#d4d4d4]'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {activeTab === 'products' && (
            <VouchersTab 
              onOpenModal={() => setIsVoucherModalOpen(true)}
            />
          )}

          {activeTab === 'wallet' && (
            <WalletTab 
              onViewDetails={(user) => setViewingUserDetails(user)}
            />
          )}
        </div>

        <VoucherModal 
          isOpen={isVoucherModalOpen}
          onClose={() => setIsVoucherModalOpen(false)}
        />
      </div>
    </>
  );
};

export default Vouchers;