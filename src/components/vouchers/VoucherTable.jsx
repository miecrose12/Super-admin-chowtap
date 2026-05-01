import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const VouchersTable = ({ vouchers, onToggleStatus, onEdit }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-[#222] text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">
        <div className="col-span-4">Voucher Identity</div>
        <div className="col-span-2">Sale Price</div>
        <div className="col-span-2">Original Value</div>
        <div className="col-span-2">Active Status</div>
        <div className="col-span-2 text-right pr-2">Operations</div>
      </div>

      <div className="divide-y divide-[#1a1a1a]">
        {vouchers.length > 0 ? (
          vouchers.map((voucher) => (
            <div key={voucher.id} className="grid grid-cols-12 gap-4 items-center px-4 py-5 hover:bg-[#151515] transition-colors">
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  {voucher.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-100">{voucher.name}</div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">ID: {voucher.id}</div>
                </div>
              </div>
              <div className="col-span-2 text-sm font-medium text-gray-200">
                ₦{voucher.salePrice}
              </div>
              <div className="col-span-2 text-sm font-medium text-gray-500">
                ₦{voucher.originalValue}
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${voucher.status === 'LIVE' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                  <span className={`text-[11px] font-bold tracking-wide ${voucher.status === 'LIVE' ? 'text-green-500' : 'text-gray-500'}`}>
                    {voucher.status}
                  </span>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-5">
                <button 
                  onClick={() => onToggleStatus(voucher.id)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors ${voucher.status === 'LIVE' ? 'bg-green-500' : 'bg-gray-600'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${voucher.status === 'LIVE' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                </button>
                <button onClick={onEdit} className="text-gray-500 hover:text-white transition-colors">
                  <Pencil size={16} />
                </button>
                <button className="text-gray-500 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-12 px-4 py-8 text-center text-gray-500">
            No vouchers found matching your search.
          </div>
        )}
      </div>
    </>
  );
};

export default VouchersTable;