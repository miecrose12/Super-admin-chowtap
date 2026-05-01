import React from 'react';
import VendorTableRow from './Vendortablerow';
import VendorPagination from './Vendorpagination';


export default function VendorTable({ 
  vendors, 
  selectedIds, 
  onToggleSelect, 
  onToggleSelectAll,
  currentPage,
  onPageChange,
  totalItems,
  itemsPerPage
}) {
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

  return (
    <div className="bg-[#0A0A0A] border-t border-gray-800/80 min-h-[500px] flex flex-col justify-between">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#141414] text-[10px] text-gray-400 tracking-[0.1em] uppercase font-bold">
            <th className="py-4 px-5 w-12 border-b border-gray-800">
              <div 
                onClick={onToggleSelectAll}
                className={`w-[14px] h-[14px] rounded-[3px] border-[1.5px] cursor-pointer flex items-center justify-center transition-all ${
                  vendors.length > 0 && vendors.every(v => selectedIds.includes(v.id))
                    ? 'bg-[#F28C28] border-[#F28C28]' 
                    : 'border-gray-600 hover:border-[#F28C28]'
                }`}
              >
                {vendors.length > 0 && vendors.every(v => selectedIds.includes(v.id)) && (
                  <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </th>
            <th className="py-4 px-4 border-b border-gray-800">Merchant Name</th>
            <th className="py-4 px-4 border-b border-gray-800">Campus</th>
            <th className="py-4 px-4 border-b border-gray-800">Status</th>
            <th className="py-4 px-4 border-b border-gray-800">Revenue</th>
            <th className="py-4 px-4 border-b border-gray-800">Orders</th>
            <th className="py-4 px-4 border-b border-gray-800">Date Joined</th>
            <th className="py-4 px-5 border-b border-gray-800 w-12"></th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {vendors.map((vendor) => (
            <VendorTableRow
              key={vendor.id}
              vendor={vendor}
              isSelected={selectedIds.includes(vendor.id)}
              onToggleSelect={onToggleSelect}
              onRowClick={() => {}}
            />
          ))}
        </tbody>
      </table>

      <VendorPagination 
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        indexOfFirstItem={indexOfFirstItem}
      />
    </div>
  );
}