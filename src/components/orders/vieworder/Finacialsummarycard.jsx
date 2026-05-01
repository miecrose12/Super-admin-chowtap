import { FINANCIAL_SUMMARY } from '../../../utils/orderdetails';

const FinancialSummaryCard = () => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
      <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider mb-6">Financial Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-[#ACABAA]">Subtotal</span>
          <span className="text-[#E0E0E0]">{FINANCIAL_SUMMARY.subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#ACABAA]">Delivery Fee</span>
          <span className="text-[#E0E0E0]">{FINANCIAL_SUMMARY.deliveryFee}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[#ACABAA]">Service Fee</span>
          <span className="text-[#E0E0E0]">{FINANCIAL_SUMMARY.serviceFee}</span>
        </div>
      </div>
      <div className="pt-5 border-t border-[#333] flex justify-between items-center">
        <span className="text-white font-bold text-base">Grand Total</span>
        <span className="text-[#FFB782] font-bold text-2xl tracking-tight">{FINANCIAL_SUMMARY.grandTotal}</span>
      </div>
    </div>
  );
};

export default FinancialSummaryCard;