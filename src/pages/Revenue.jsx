import React, { useState, useEffect, useRef } from 'react';

import { generateTableData } from '../utils/tableDatagenerator';
import DatePickerStyles from '../components/revenue/Datepickerstyles';
import RevenueHeader from '../components/revenue/Revenueheader';
import MetricCards from '../components/revenue/Metriccards';
import TransactionTable from '../components/revenue/Transactiontable';

export default function Revenue() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('All time');
  const [startDate, setStartDate] = useState(new Date('2026-03-03'));
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);
  
  const itemsPerPage = 5;
  const periods = ['Today', 'Yesterday', 'This week', 'This month', 'Last month', 'This year', 'All time', 'Custom period'];
  const tableData = generateTableData();
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = tableData.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  const handleApplyDateRange = () => {
    console.log('Date range applied:', { startDate, endDate });
  };

  return (
    <>
      <DatePickerStyles />
      <div className="min-h-screen bg-[#0E0E0E] p-4 md:p-8 font-sans text-[#f5f5f5] selection:bg-[#E96B18] selection:text-white">
        <div className="max-w-[1240px] mx-auto">
          
          <RevenueHeader 
            selectedPeriod={selectedPeriod}
            startDate={startDate}
            endDate={endDate}
            periods={periods}
            onPeriodToggle={() => setIsDropdownOpen(!isDropdownOpen)}
            onPeriodSelect={handlePeriodSelect}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onApplyDateRange={handleApplyDateRange}
            isDropdownOpen={isDropdownOpen}
            dropdownRef={dropdownRef}
          />

          <MetricCards />

          <TransactionTable 
            currentData={currentData}
            currentPage={currentPage}
            totalPages={totalPages}
            tableDataLength={tableData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}