import React from 'react';

export default function BiggestCustomerCard() {
  return (
    <div className="bg-[#1C1C1C] rounded-lg p-5 xl:p-7 w-full lg:w-[280px] xl:w-[340px] 2xl:w-[400px] flex flex-col relative overflow-hidden flex-shrink-0">
      <svg className="absolute -bottom-6 -right-6 w-40 h-40 xl:w-48 xl:h-48 text-white/[0.03]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <p className="text-[10px] font-bold tracking-widest text-[#DC781B] mb-2 uppercase">
            BIGGEST CUSTOMER
          </p>
          <h4 className="text-[1.15rem] xl:text-[22px] font-bold mb-2 tracking-wide text-white truncate">
            JAIYEFEMI OLA
          </h4>
          <p className="text-[11px] xl:text-[13px] text-gray-400 leading-relaxed mb-4">
            This user has placed <strong className="text-white font-semibold">350</strong><br className="hidden xl:block" />
            {' '}orders and spent <strong className="text-white font-semibold">₦270,000.00</strong>.
          </p>
        </div>
        <button className="w-full xl:w-[130px] bg-[#DC781B] hover:bg-[#e88832] transition-colors text-black font-bold py-2.5 rounded text-[12px] xl:text-[13px] mt-auto">
          Review user
        </button>
      </div>
    </div>
  );
}