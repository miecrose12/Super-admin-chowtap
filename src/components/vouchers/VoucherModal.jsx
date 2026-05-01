import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

const VoucherModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Gourmet Burger Deluxe',
    saleAmount: '45.00',
    originalValue: '65.00',
  });

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-[#121212] w-full max-w-md rounded-xl shadow-2xl border border-[#222] overflow-hidden">
        <div className="p-6 pb-4 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
          <div className="text-[10px] font-bold text-[#DC781B] tracking-widest uppercase mb-1">
            Catalog Entry #VX-0902
          </div>
          <h2 className="text-2xl font-bold text-white">Edit Voucher</h2>
        </div>

        <div className="p-6 pt-2 space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Voucher Name <span className="text-[#DC781B]">*</span></label>
              <span className="text-[10px] text-gray-600">Required</span>
            </div>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC781B]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Sale Amount <span className="text-[#DC781B]">*</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₦</span>
                <input 
                  type="text" 
                  value={formData.saleAmount}
                  onChange={(e) => handleChange('saleAmount', e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#222] rounded-md pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC781B]"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Original/Face Value</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₦</span>
                <input 
                  type="text" 
                  value={formData.originalValue}
                  onChange={(e) => handleChange('originalValue', e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#222] rounded-md pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border-l-2 border-orange-500 p-4 flex gap-3 rounded-r-md mt-2">
            <Info size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Modifying the face value will not retroactively affect vouchers already purchased by users.
            </p>
          </div>
        </div>

        <div className="p-6 pt-4 flex justify-end gap-3 border-t border-[#1a1a1a] bg-[#121212]">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-[#222] hover:bg-[#2a2a2a] text-white text-sm font-semibold rounded-md transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherModal;