import { Bike, Users, ShoppingBag, Star } from 'lucide-react';
import { calculateSummary } from '../../utils/riders';

export default function RidersSummaryCards({ riders }) {
  const { totalRiders, activeRiders, totalActiveOrders, avgRating } = calculateSummary(riders);

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
        <div>
          <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Total Riders</p>
          <h2 className="text-4xl font-bold">{totalRiders}</h2>
        </div>
        <Bike className="text-gray-600" size={24} />
      </div>

      <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
        <div>
          <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Active Riders</p>
          <h2 className="text-4xl font-bold">{activeRiders}</h2>
        </div>
        <Users className="text-gray-600" size={24} />
      </div>

      <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
        <div>
          <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Active Orders</p>
          <h2 className="text-4xl font-bold">{totalActiveOrders}</h2>
        </div>
        <ShoppingBag className="text-gray-600" size={24} />
      </div>

      <div className="bg-[#141414] border-l-4 border-[#f37c22] rounded-r-md p-6 flex justify-between items-start shadow-lg">
        <div>
          <p className="text-[10px] text-[#f37c22] font-bold tracking-widest mb-3 uppercase">Avg Rating</p>
          <h2 className="text-4xl font-bold">{avgRating}</h2>
        </div>
        <Star className="text-[#f37c22]" size={24} fill="currentColor" />
      </div>
    </div>
  );
}