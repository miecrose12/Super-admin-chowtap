import React, { useState } from 'react';
import { Search, ListFilter, Plus, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

import { MENU_PRODUCTS } from '../../../utils/vendorData';
import ProductModal from './Productmodal';

const MenuTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(MENU_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIdx, startIdx + itemsPerPage);

  const handleToggleAvailability = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId 
          ? { ...product, available: !product.available, status: !product.available ? 'AVAILABLE' : 'UNAVAILABLE' }
          : product
      )
    );
  };

  return (
    <div className="bg-[#0e0e0e] min-h-screen p-6 font-sans text-white relative">
      <div className="max-w-[1100px] mx-auto space-y-6">
        <div className="flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input type="text" placeholder="Filter products..." className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-md py-2.5 pl-11 pr-4 text-sm text-neutral-300 focus:outline-none" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#e58230] hover:bg-[#d97706] text-white rounded-md text-sm font-semibold">
            <Plus size={18} /> Add Product
          </button>
        </div>

        <div className="bg-[#1a1a1a] rounded-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 text-[11px] font-bold text-neutral-500 uppercase bg-[#1a1a1a]">
                <th className="py-4 pl-6 pr-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4">Availability</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentProducts.map((item) => (
                <ProductRow 
                  key={item.id} 
                  item={item} 
                  onToggleAvailability={handleToggleAvailability}
                  onRowClick={() => setSelectedProduct(item)} // Pass the whole item
                />
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} itemsPerPage={itemsPerPage} totalItems={products.length} />
      </div>

      {selectedProduct && <ProductModal item={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

const ProductRow = ({ item, onToggleAvailability, onRowClick }) => {
  return (
    <tr onClick={onRowClick} className="border-b border-neutral-800/80 hover:bg-neutral-800/30 transition-colors cursor-pointer">
      <td className="py-4 pl-6 pr-4 flex items-center gap-4">
        {/* FIXED: Using item.img directly */}
        <img src={item.img} alt={item.line1} className="w-[50px] h-[50px] rounded-lg object-cover border border-neutral-700 shadow-md" />
        <div>
          <div className="font-semibold text-[14px] text-white">{item.line1}</div>
          <div className="font-semibold text-[14px] text-white">{item.line2}</div>
          <div className="text-[11px] text-neutral-500 mt-1">ID: {item.id}</div>
        </div>
      </td>
      <td className="p-4 text-neutral-400">{item.cat}</td>
      <td className="p-4 font-semibold text-white">{item.price}</td>
      <td className="p-4">
        <span className={`px-2.5 py-1 text-[10px] font-bold rounded uppercase ${item.available ? 'bg-[#e58230]/10 text-[#e58230]' : 'bg-[#2a2a2a] text-neutral-400'}`}>{item.status}</span>
      </td>
      <td className="p-4">
        <div onClick={(e) => { e.stopPropagation(); onToggleAvailability(item.id); }} className={`w-[42px] h-[22px] rounded-full relative transition-colors cursor-pointer ${item.available ? 'bg-[#e58230]/80' : 'bg-[#2a2a2a]'}`}>
          <div className={`absolute top-[3px] w-4 h-4 rounded-full transition-all ${item.available ? 'right-[3px] bg-[#1a1a1a]' : 'left-[3px] bg-[#555555]'}`}/>
        </div>
      </td>
      <td className="p-4 text-neutral-500">
        <Link to="/vendors/edit-menu"><Edit2 size={18} className="hover:text-white transition-colors" /></Link>
      </td>
    </tr>
  );
};

export default MenuTab;