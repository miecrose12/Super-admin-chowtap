const PeakHoursChart = () => {
  return (
    <div className="bg-[#111111] rounded-xl p-6 border border-[#262626] h-full flex flex-col min-h-[250px]">
      <h3 className="text-[15px] font-bold text-[#f5f5f5] mb-6 tracking-wide">Peak hours during operations</h3>
      
      <div className="relative flex-grow w-full flex items-end justify-between mt-4 mb-6">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M 2,85 C 30,85 60,88 98,45"
            fill="none"
            stroke="#df7d27"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 2,85 C 30,85 60,88 98,45 L 98,100 L 2,100 Z"
            fill="url(#chart-grad)"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#df7d27" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#df7d27" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-6 left-0 w-full flex justify-between px-2 text-[10px] text-[#777] font-bold tracking-[0.15em] uppercase">
          <span>Morning</span>
          <span>Afternoon</span>
          <span>Evening</span>
        </div>
      </div>
    </div>
  );
};

export default PeakHoursChart;