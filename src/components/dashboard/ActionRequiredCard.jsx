import { BadgeCheck } from 'lucide-react';

const ActionRequiredCard = () => {
  return (
    <div className="bg-[#181818] rounded-xl p-7 pb-8 border border-[#262626] relative overflow-hidden h-full flex flex-col justify-center min-h-[250px]">
      <div className="absolute -right-8 -bottom-8 text-white/[0.03] pointer-events-none">
        <BadgeCheck size={180} fill="currentColor" strokeWidth={0.5} />
      </div>

      <div className="relative z-10">
        <p className="text-[10px] font-bold text-[#df7d27] tracking-[0.15em] uppercase mb-3">
          Action Required
        </p>
        <h3 className="text-[20px] font-bold text-[#f5f5f5] mb-2 tracking-wide">
          3 Pending Approvals
        </h3>
        <p className="text-[#888] text-[13px] mb-7 w-5/6 leading-relaxed font-medium">
          Vendors waiting for identity verification and menu audit.
        </p>
        <button className="w-full sm:w-[180px] py-3.5 bg-[#df7d27] hover:bg-[#c96e21] text-[#2b1707] font-bold rounded-[4px] text-[12px] transition-colors shadow-lg shadow-black/30 tracking-wide">
          Review vendors
        </button>
      </div>
    </div>
  );
};

export default ActionRequiredCard;