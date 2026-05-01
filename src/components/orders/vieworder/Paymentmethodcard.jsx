import { CheckCircle2 } from 'lucide-react';
import { PAYMENT_METHOD } from '../../../utils/orderdetails';

const PaymentMethodCard = () => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
      <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-5">Payment Method</h2>
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#111] border border-[#333] px-3 py-1.5 rounded text-white font-black italic text-[11px]">
          {PAYMENT_METHOD.type}
        </div>
        <div>
          <p className="text-white text-sm font-bold">{PAYMENT_METHOD.provider}</p>
          <p className="text-[#888] text-xs mt-0.5">{PAYMENT_METHOD.accountNumber}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#22C55E]">
        <CheckCircle2 size={14} strokeWidth={3} />
        <span className="text-[10px] font-bold uppercase tracking-wider">{PAYMENT_METHOD.status}</span>
      </div>
    </div>
  );
};

export default PaymentMethodCard;