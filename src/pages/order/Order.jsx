'use client';

import React, { useState, useMemo } from 'react';

import { generateMockOrders } from '../../utils/Orders';
import Ordersheader from '../../components/orders/Ordersheader';
import Statsgrid from '../../components/orders/Statsgrid';
import Tablefilters from '../../components/orders/Tablefilters';
import Orderstable from '../../components/orders/Orderstable';

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Memoize data so it doesn't regenerate on every render
  const allOrders = useMemo(() => generateMockOrders(45), []);

  // Pagination calculations
  const totalItems = allOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = allOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Validate page number
  const validatePage = (page) => {
    if (page < 1) return 1;
    if (page > totalPages) return totalPages;
    return page;
  };

  const handlePageChange = (page) => {
    setCurrentPage(validatePage(page));
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-4 sm:p-6 lg:p-8 font-sans antialiased w-full overflow-hidden flex flex-col">
      
      <Ordersheader />
      <Statsgrid />
      <Tablefilters />
      
      <Orderstable 
        currentOrders={currentOrders}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}