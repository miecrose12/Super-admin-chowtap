const MetricsRow = () => {
  const metrics = [
    { label: 'Total Orders', value: '42', trend: '+12% vs LY' },
    { label: 'Lifetime Value', value: 'N21,240.50', trend: null },
    { label: 'Gross Profit', value: 'N5,800.00', trend: null },
    { label: 'Voucher Balance', value: 'N5,000.00', trend: null },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <div key={idx} className="bg-[#181818] border-r-[3px] border-[#e86b35] p-5 rounded-lg flex flex-col justify-between h-[104px]">
          <h3 className="text-[11px]  text-[#FFB782] font-bold uppercase tracking-wider">{metric.label}</h3>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">{metric.value}</span>
            {metric.trend && <span className="text-[10px] font-bold text-[#22c55e]">{metric.trend}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsRow;