import { User } from 'lucide-react';
import { CUSTOMER_INFO } from '../../../utils/orderdetails';

const CustomerDetailsCard = () => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] h-full flex flex-col">
      <div className="flex justify-between items-start mb-5">
        <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider">Customer Details</h2>
        <User size={16} className="text-[#888]" />
      </div>
      <div className="mb-6 flex-grow">
        <p className="text-[#E7E5E5] text-base font-semibold mb-1">{CUSTOMER_INFO.name}</p>
        <p className="text-[#ACABAA] text-xs mb-1">{CUSTOMER_INFO.email}</p>
        <p className="text-[#ACABAA] text-xs">{CUSTOMER_INFO.phone}</p>
      </div>
      <div>
        <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider mb-3">Destination</h2>
        <p className="text-[#E7E5E5] text-xs leading-relaxed">
          {CUSTOMER_INFO.destination}
        </p>
      </div>
    </div>
  );
};

export default CustomerDetailsCard;