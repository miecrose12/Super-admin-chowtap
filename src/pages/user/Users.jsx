import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateMockData } from '../../utils/dataGenerator';
import StatsCardsSection from '../../components/usersmanagement/Statscardsection';
import SearchFilters from '../../components/usersmanagement/Searchfilters';
import UsersTable from '../../components/usersmanagement/Userstable';
import PaginationControl from '../../components/usersmanagement/Paginationcontrol';



const ITEMS_PER_PAGE = 7;

export default function UserManagement() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Generate mock data once
  const allUsers = useMemo(() => generateMockData(45), []);

  // Calculate pagination values
  const totalItems = allUsers.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentData = allUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = () => {
    navigate('/users/edit');
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#e5e2e1] font-sans pb-12 pt-6">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[28px] font-bold tracking-wide text-white">
            User Management
          </h1>
        </div>

        {/* Stats Cards Section */}
        <StatsCardsSection totalItems={totalItems} />

        {/* Search & Filters Section */}
        <SearchFilters />

        {/* Users Table Section */}
        <div className="bg-[#0A0A0A] rounded-md overflow-hidden border border-gray-900/50">
          <UsersTable data={currentData} onRowClick={handleRowClick} />

          {/* Pagination Control */}
          <PaginationControl
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            onPageClick={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
}