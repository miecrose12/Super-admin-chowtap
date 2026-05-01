import { Store } from 'lucide-react';
import { VENDOR_INFO } from '../../../utils/orderdetails';

const VendorHubCard = () => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-5">
          <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider">Vendor Hub</h2>
          <Store size={16} className="text-[#888]" />
        </div>
        <p className="text-[#FFB782] text-base font-semibold mb-1">{VENDOR_INFO.name}</p>
        <p className="text-[#ACABAA] text-xs mb-1">{VENDOR_INFO.email}</p>
        <p className="text-[#ACABAA] text-xs">{VENDOR_INFO.location}</p>
      </div>
      <div className="mt-8 flex justify-between items-end">
        <div>
          <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-2">Kitchen Status</h2>
          <p className="text-[#ED7F64] text-xs font-medium">{VENDOR_INFO.kitchenStatus}</p>
        </div>
        <button className="text-[#FFB782] text-xs font-semibold hover:underline decoration-1 underline-offset-4">
          Contact Vendor
        </button>
      </div>
    </div>
  );
};

export default VendorHubCard;