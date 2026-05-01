import { useNavigate } from 'react-router-dom';

export default function RidersTable({ currentData }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000000] border border-black rounded-md overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#000000] bg-[#131313]">
            <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Rider Profile</th>
            <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Phone Number</th>
            <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase text-center">Completed</th>
            <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase text-center">Active</th>
            <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Campus</th>
            <th className="px-6 py-5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1A1A1A]">
          {currentData.length > 0 ? (
            currentData.map((rider) => (
              <tr
                key={rider.id}
                onClick={() => navigate('/riders/riders-details')}
                className="cursor-pointer hover:bg-[#1A1A1A] transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#f37c22] bg-opacity-20 text-[#f37c22] font-bold flex items-center justify-center rounded-[4px] text-sm">
                      {rider.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-200">{rider.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{rider.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">{rider.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-300 text-center">{rider.completedOrders}</td>
                <td className="px-6 py-4 text-sm text-gray-300 text-center">{rider.activeOrders}</td>
                <td className="px-6 py-4 text-xs font-medium text-gray-300 tracking-wide">{rider.campus}</td>
                <td className="px-6 py-4">
                  <span className={`text-[11px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-opacity-10 ${
                    rider.status === 'ACTIVE' ? 'text-[#00C853] bg-[#00C853]' : 'text-[#D50000] bg-[#D50000]'
                  }`}>
                    {rider.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-20 text-center text-gray-500 italic">
                No riders found matching your criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}