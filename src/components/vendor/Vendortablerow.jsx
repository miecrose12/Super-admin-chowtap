import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './Statusbadge';


export default function VendorTableRow({ vendor, isSelected, onToggleSelect, onRowClick }) {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/vendors/overview');
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onToggleSelect(vendor.id);
  };

  return (
    <tr 
      onClick={handleRowClick}
      className="group transition-colors border-b border-[#1A1A1A] hover:bg-[#121212] cursor-pointer"
    >
      <td className="py-3 px-5">
        <div 
          onClick={handleCheckboxClick}
          className={`w-[14px] h-[14px] rounded-[3px] border-[1.5px] cursor-pointer flex items-center justify-center transition-all ${
            isSelected ? 'bg-[#F28C28] border-[#F28C28]' : 'border-[#F28C28]'
          }`}
        >
          {isSelected && (
            <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </td>
      
      <td className="py-3 px-4">
        <div className="flex items-center space-x-3">
          <img src={vendor.avatar} alt={vendor.name} className="w-9 h-9 rounded-md object-cover" />
          <div>
            <p className="font-bold text-gray-200 text-[13px]">{vendor.name}</p>
            <p className="text-[11px] text-gray-500 mt-0.5">{vendor.email} <span className="text-gray-600">|</span> {vendor.rating} rating</p>
          </div>
        </div>
      </td>
      
      <td className="py-3 px-4 text-[11px] font-bold text-gray-300 tracking-wider">
        {vendor.campus}
      </td>
      
      <td className="py-3 px-4">
        <StatusBadge status={vendor.status} />
      </td>
      
      <td className="py-3 px-4 font-bold text-gray-200 text-[13px]">
        {vendor.revenue}
      </td>
      
      <td className="py-3 px-4 font-bold text-gray-200 text-[13px]">
        {vendor.orders}
      </td>
      
      <td className="py-3 px-4 text-[12px] text-gray-400">
        {vendor.date}
      </td>
      
      <td className="py-3 px-5 text-right">
        <svg className="w-4 h-4 text-[#F28C28]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8v-4zm4 11.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
        </svg>
      </td>
    </tr>
  );
}