import React, { useState, useEffect, useRef } from 'react';

import { generateOrdersData, STAT_CARDS, ITEMS_PER_PAGE, toggleItemInArray, toggleAllInPage, getSlicedData } from '../../utils/specialorders';
import { OrderHeader } from './Orderheader';

import { OrderToolbar } from './Ordertoolbar';
import { OrdersTable } from './Orderstable';
import { Pagination } from './Pagination';
import { StatCard } from './Statcard';


export const OrdersView = () => {
  const [orders, setOrders] = useState(generateOrdersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  const [startDate, setStartDate] = useState(new Date("2026-03-03"));
  const [endDate, setEndDate] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOrders = getSlicedData(orders, currentPage, ITEMS_PER_PAGE);
  
  const handleCheckOrder = (id) => {
    setOrders(toggleItemInArray(orders, id, 'checked'));
  };

  const handleCheckAll = () => {
    const allCurrentChecked = currentOrders.every(order => order.checked);
    setOrders(toggleAllInPage(orders, currentOrders, 'checked', !allCurrentChecked));
  };

  return (
    <div className="animate-in fade-in duration-300">
      <OrderHeader 
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        dropdownRef={dropdownRef}
      />

      <div className="grid grid-cols-4 gap-5 mb-8">
        {STAT_CARDS.orders.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <OrderToolbar />

      <OrdersTable 
        orders={orders}
        currentOrders={currentOrders}
        onCheckOrder={handleCheckOrder}
        onCheckAll={handleCheckAll}
      />

      <Pagination 
        totalItems={1284} 
        itemsPerPage={ITEMS_PER_PAGE} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};