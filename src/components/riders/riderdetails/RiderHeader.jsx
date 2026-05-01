import React from 'react';
import { ArrowLeft, Pencil, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiderHeader = ({ riderName, riderInitials, rating, reviewCount }) => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <Link to="/riders">
          <button className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:bg-[#2A2A2A] transition">
            <ArrowLeft size={20} className="text-gray-300" />
          </button>
        </Link>
        
        <div className="w-16 h-16 bg-[#F4F4F4] text-black font-bold text-xl flex items-center justify-center rounded-xl">
          {riderInitials}
        </div>
        
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-wide">{riderName}</h1>
            <span className="px-2 py-1 text-xs font-bold bg-[#0A2E1F] text-[#00E676] rounded uppercase tracking-wider">
              Active
            </span>
          </div>
          <div className="text-gray-400 mt-1 text-sm flex items-center gap-1">
            <Star size={16} className="text-[#FFB300] fill-[#FFB300]" />
            <span className="text-white font-medium">{rating}</span>
            <span>({reviewCount.toLocaleString()} reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Link to="/riders/edit-rider">
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition flex items-center gap-2">
            <Pencil size={16} /> Edit Rider
          </button>
        </Link>
        <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition">
          Clear Balance
        </button>
        <button className="px-4 py-2 bg-[#7E2B1733] text-[#ED7F64] border border-[#3A1A1A] text-sm font-medium rounded-lg hover:bg-[#3A1A1A] transition">
          Suspend Rider
        </button>
      </div>
    </div>
  );
};

export default RiderHeader;