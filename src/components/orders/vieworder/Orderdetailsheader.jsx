import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ORDER_INFO } from '../../../utils/orderdetails';

const OrderDetailsHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-5">
        <Link to="/orders">
          <button className="w-11 h-11 flex items-center justify-center border border-[#333] border-l-[3px] border-l-[#FFB782] rounded bg-[#1A1A1A] hover:bg-[#222] transition-colors">
            <ArrowLeft size={18} className="text-gray-300" />
          </button>
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white tracking-tight">{ORDER_INFO.id}</h1>
            <span className="bg-[#2C1A0A] text-[#FFB782] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {ORDER_INFO.status}
            </span>
          </div>
          <p className="text-[#888] text-xs mt-1">{ORDER_INFO.date} | {ORDER_INFO.time}</p>
        </div>
      </div>
      <button className="bg-[#DC781B] text-white font-bold text-[11px] px-8 py-3.5 rounded uppercase tracking-wider hover:brightness-110 transition-all">
        Assign Rider
      </button>
    </div>
  );
};

export default OrderDetailsHeader;