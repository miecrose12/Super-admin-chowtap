import React from 'react';
import { ImageIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { ToggleSwitch } from './Toggleswitch';


export const ProductsTable = ({ currentProducts, onToggleStatus }) => (
  <div className="bg-[#0b0b0b] rounded-lg border border-[#2a2a2a] overflow-hidden">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-[#2a2a2a] bg-[#0f0f0f]">
          <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest w-20">Image</th>
          <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Product Name</th>
          <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Price</th>
          <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Restaurant</th>
          <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest">Status</th>
          <th className="py-4 px-6 text-[11px] font-bold text-[#6b6b6b] uppercase tracking-widest text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#1e1e1e]">
        {currentProducts.map((product) => (
          <tr key={product.id} className="hover:bg-[#141414] transition-colors group">
            <td className="py-3 px-6">
              <div className="w-11 h-11 bg-[#1c1c1c] rounded flex items-center justify-center border border-[#2a2a2a]">
                <ImageIcon size={18} className="text-[#4a4a4a]" />
              </div>
            </td>
            <td className="py-3 px-6">
              <div className="text-[#E7E5E5] font-semibold text-[13px]">{product.name}</div>
              <div className="text-[#ACABAA] text-[11px] mt-0.5">SKU: {product.sku}</div>
            </td>
            <td className="py-3 px-6 text-[#a1a1a1] text-[13px]">{product.price}</td>
            <td className="py-3 px-6">
              <span className="bg-[#1c1c1c] border border-[#2a2a2a] text-[#9CA3AF] text-[11px] px-3 py-1.5 rounded-full font-medium">
                {product.restaurant}
              </span>
            </td>
            <td className="py-3 px-6">
              <div className="flex items-center gap-2.5">
                <ToggleSwitch 
                  isActive={product.isActive} 
                  onToggle={() => onToggleStatus(product.id)} 
                />
                <span className={`text-[13px] font-semibold ${product.isActive ? 'text-[#DC781B]' : 'text-[#6b6b6b]'}`}>
                  {product.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </td>
            <td className="py-3 px-6 text-center">
              <button className="text-[#6b6b6b] hover:text-[#d1d1d1] transition-colors p-1">
                <ChevronRightIcon size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);