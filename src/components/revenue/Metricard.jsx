import React from 'react';

const MetricCard = ({ label, value, subtext, icon: Icon, border = 'border-l', borderColor = 'border-l-[#E96B18]', children, className = '', fullHeight = false }) => {
  return (
    <div className={`bg-[#18181A] rounded-lg p-6 md:p-7 border border-[#27272A] ${border}-[4px] ${borderColor} relative overflow-hidden ${className} ${fullHeight ? 'flex flex-col justify-center' : ''}`}>
      {Icon && <Icon className="absolute -right-4 -bottom-4 text-[#27272A] w-[110px] h-[110px] opacity-40 pointer-events-none z-0" strokeWidth={1.5} />}
      <div className={Icon ? 'relative z-10' : ''}>
        <p className={`text-[#A1A1AA] text-[11px] font-bold tracking-[0.15em] uppercase mb-4 ${borderColor.includes('#E96B18') && !Icon ? '' : ''}`}>
          {label}
        </p>
        <h2 className="text-[32px] font-bold text-white mb-3 leading-none tracking-tight">{value}</h2>
        {subtext && <p className="text-[13px] text-[#10B981] font-semibold tracking-wide">{subtext}</p>}
      </div>
      {children}
    </div>
  );
};

export default MetricCard;