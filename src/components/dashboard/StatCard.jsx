const StatCard = ({ title, value, trend, trendType, logo }) => {
  return (
    <div className="bg-[#111111] rounded-xl p-6 relative border border-[#262626] shadow-sm flex flex-col justify-between min-h-[170px]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[95%] w-[3px] bg-gradient-to-b from-[#df7d27] to-[#e88d40] rounded-r shadow-[0_0_12px_rgba(223,125,39,0.6)]"></div>
      
      <div className="flex justify-between items-start pl-2">
        <span className="text-[10px] font-bold text-[#DC781B] tracking-[0.15em] uppercase mt-1">
          {title}
        </span>
        <img src={logo} alt="icon" className="w-[22px] h-[22px] opacity-50 hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="pl-2 mt-auto">
        <h3 className="text-[26px] font-bold text-[#f5f5f5] mb-2 leading-none tracking-tight">{value}</h3>
        <p className={`text-[11px] font-semibold tracking-wide ${
          trendType === 'positive' || trendType === 'live' ? 'text-[#10b981]' : 'text-[#A1A1AA]'
        }`}>
          {trendType === 'live' && (
            <span className="inline-block w-1.5 h-1.5 bg-[#10B981] rounded-full mr-2 mb-[1px] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          )}
          {trend}
        </p>
      </div>
    </div>
  );
};

export default StatCard;