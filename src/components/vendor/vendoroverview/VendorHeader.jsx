import React from 'react';
import { ArrowLeft, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorHeader = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#0e0e0e]">
      <div className="flex gap-5 items-center">
        {/* Back Button */}
        <Link to="/vendors">
          <button className="flex items-center justify-center w-[36px] h-[76px] border border-[#d97736]/60 rounded-md bg-[#0f0f0f] hover:bg-[#1a1a1a] text-gray-300 transition-colors shrink-0">
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
        </Link>

        {/* Logo Container */}
        <div className="w-[84px] h-[84px] bg-white rounded-lg flex items-center justify-center shrink-0">
          <div 
            className="w-[70px] h-[70px] bg-[#141615] flex flex-col items-center justify-center text-center"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            <span className="text-[#00c853] font-serif italic font-bold text-sm leading-none -ml-3">Deli</span>
            <span className="text-[#c6ff00] font-serif italic font-bold text-sm leading-none ml-2">Buds</span>
          </div>
        </div>

        {/* Vendor Information */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <h1 className="text-[28px] leading-none font-bold text-white tracking-wide">Bros John</h1>
            <span className="px-2 py-[3px] text-[10px] font-bold bg-[#062c1d] text-[#10b981] rounded uppercase tracking-wider">
              ACTIVE
            </span>
          </div>
          <p className="text-[15px] text-[#8b8b8b] max-w-[500px] mt-2.5 leading-snug">
            Artisan coffee and organic campus meals serving the student body with sustainable sourcing and fresh ingredients daily.
          </p>
          <div className="flex items-center gap-2 mt-2.5 text-[14px]">
            <span className="text-[#df8153]">★</span>
            <span className="text-white font-semibold">4.8</span>
            <span className="text-[#737373]">(1,240 reviews)</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <Link to="/vendors/edit">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#202020] border border-[#303030] rounded-md text-[13px] font-medium text-gray-200 hover:text-white hover:bg-[#2a2a2a] transition-all">
            <Edit2 size={14} strokeWidth={2} /> Edit Vendor
          </button>
        </Link>
        <button className="px-4 py-2 bg-[#202020] border border-[#303030] rounded-md text-[13px] font-medium text-gray-200 hover:text-white hover:bg-[#2a2a2a] transition-all">
          Clear Balance
        </button>
        <button className="px-4 py-2 bg-[#2b1613] border border-[#3d1f19] text-[#e07d65] rounded-md text-[13px] font-medium hover:bg-[#351c17] transition-all">
          Suspend Vendor
        </button>
      </div>
    </div>
  );
};

export default VendorHeader;