const TopCampusesTable = () => {
  const campuses = [
    { name: 'MCPHERSON UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'PEAK GROWTH' },
    { name: 'BELLS UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'STABLE' },
    { name: 'LEAD CITY UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'PEAK GROWTH' },
    { name: 'KOLADISI UNIVERSITY', orders: '3,976', revenue: 'N5,987,890', status: 'PEAK GROWTH' },
  ];

  return (
    <div className="bg-transparent mt-1 h-full">
      <div className="mb-5">
        <h3 className="text-[17px] font-bold text-[#f5f5f5] tracking-wide mb-1">Top Performing Campuses</h3>
        <p className="text-[12px] text-[#777]">Ranking based on order density and revenue.</p>
      </div>
      
      <div className="bg-[#000000] rounded-xl border border-[#262626] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#666] text-[10px] uppercase tracking-widest font-bold border-b border-[#262626] bg-[#131313]">
                <th className="px-6 py-5">Campus Name</th>
                <th className="px-6 py-5">Total Orders</th>
                <th className="px-6 py-5">Gross Revenue</th>
                <th className="px-6 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {campuses.map((campus, index) => (
                <tr key={index} className="border-b border-[#0e0e0e] last:border-0 bg-[#000000] hover:bg-[#151515] transition-colors">
                  <td className="px-6 py-5 font-bold text-[#e5e5e5] tracking-wide">{campus.name}</td>
                  <td className="px-6 py-5 text-[#ccc] font-semibold">{campus.orders}</td>
                  <td className="px-6 py-5 font-bold text-[#df7d27]">{campus.revenue}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2.5 py-1.5 rounded-[4px] text-[9px] font-extrabold uppercase tracking-wider ${
                      campus.status === 'PEAK GROWTH' 
                      ? 'bg-[#064e3b]/40 text-[#10b981]' 
                      : 'bg-[#78350f]/40 text-[#d97706]'
                    }`}>
                      {campus.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopCampusesTable;