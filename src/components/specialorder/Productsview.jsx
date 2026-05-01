import React, { useState } from 'react';

import { generateProductsData, STAT_CARDS, ITEMS_PER_PAGE, toggleItemInArray, getSlicedData } from '../../utils/specialorders';
import { ProductHeader } from './Productheader';
import { ProductToolbar } from './Producttoolbar';
import { ProductsTable } from './Productstable';
import { Pagination } from './Pagination';
import { StatCard } from './Statcard';

export const ProductsView = () => {
  const [products, setProducts] = useState(generateProductsData);
  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = getSlicedData(products, currentPage, ITEMS_PER_PAGE);

  const handleToggleStatus = (id) => {
    setProducts(toggleItemInArray(products, id, 'isActive'));
  };

  return (
    <div className="animate-in fade-in duration-300">
      <ProductHeader />

      <div className="grid grid-cols-4 gap-5 mb-8">
        {STAT_CARDS.products.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <ProductToolbar />

      <ProductsTable 
        currentProducts={currentProducts}
        onToggleStatus={handleToggleStatus}
      />

      <Pagination 
        totalItems={248} 
        itemsPerPage={ITEMS_PER_PAGE} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};