'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



import { generateRidersData } from '../../utils/riders';
import RidersHeader from '../../components/riders/RidersHeader';
import RidersSummaryCards from '../../components/riders/RidersSummaryCards';

import RidersTable from '../../components/riders/RidersTable';
import RidersPagination from '../../components/riders/RidersPagination';
import RidersTableControls from '../../components/riders/RidersTableControls';

export default function Riders() {
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('Today');
  const [isCustomPeriod, setIsCustomPeriod] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState(null);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const dropdownRef = useRef(null);
  const itemsPerPage = 8;

  // Close dropdowns when clicking outside
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

  const ridersData = useMemo(() => generateRidersData(), []);

  const filteredData = useMemo(() => {
    return ridersData.filter((rider) => {
      const matchesSearch =
        rider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rider.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = !statusFilter || rider.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [ridersData, searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white p-8 font-sans">
      <RidersHeader
        selectedDateRange={selectedDateRange}
        isCustomPeriod={isCustomPeriod}
        startDate={startDate}
        endDate={endDate}
        dateDropdownOpen={dateDropdownOpen}
        setDateDropdownOpen={setDateDropdownOpen}
        setSelectedDateRange={setSelectedDateRange}
        setIsCustomPeriod={setIsCustomPeriod}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <RidersSummaryCards riders={ridersData} />

      <RidersTableControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        statusDropdownOpen={statusDropdownOpen}
        setStatusDropdownOpen={setStatusDropdownOpen}
        setCurrentPage={setCurrentPage}
      />

      <RidersTable currentData={currentData} />

      <RidersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        filteredDataLength={filteredData.length}
        startIndex={startIndex}
        endIndex={endIndex}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}