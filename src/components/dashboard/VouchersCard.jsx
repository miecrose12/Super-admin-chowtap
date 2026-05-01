import { Rocket } from 'lucide-react';

const VouchersCard = () => {
  return (
    <div className="bg-[#df7d27] rounded-xl p-8 pb-10 relative overflow-hidden h-full flex flex-col justify-center shadow-lg min-h-[300px]">
      <div className="absolute -right-12 -top-12 text-white/[0.07] pointer-events-none">
        <Rocket size={240} className="transform -rotate-12" fill="currentColor" strokeWidth={0.5} />
      </div>
      
      <div className="relative z-10 mt-2">
        <p className="text-[#8b4d18] font-extrabold mb-3 uppercase tracking-widest text-[10px]">
          Campaign Peak
        </p>
        <h2 className="text-[32px] font-bold text-[#351d09] mb-4 tracking-tight">
          Active Vouchers: 1,402
        </h2>
        <p className="text-[#6d3c13] text-[13px] leading-relaxed mb-8 pr-6 font-semibold">
          "CampusBlast2024" is performing 24% better than previous seasonal benchmarks.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="flex-1 min-w-[140px] py-3.5 bg-[#42240b] text-[#df7d27] font-bold uppercase tracking-widest rounded-[4px] border border-[#42240b] hover:bg-[#2b1707] transition-colors text-[10px] shadow-md">
            Manage Vouchers
          </button>
          <button className="flex-1 min-w-[140px] py-3.5 bg-transparent border border-[#ad611f] text-[#42240b] font-bold uppercase tracking-widest rounded-[4px] hover:bg-black/5 transition-colors text-[10px]">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default VouchersCard;