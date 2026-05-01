import { ORDER_ITEMS } from '../../../utils/orderdetails';

const OrderItemsCard = () => {
  return (
    <div className="md:col-span-2 bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider">Order Items</h2>
        <span className="border border-[#FFB782]/50 text-[#AAA] text-[10px] font-bold px-3 py-1 rounded">
          {ORDER_ITEMS.length} ITEMS
        </span>
      </div>

      <div className="space-y-4">
        {ORDER_ITEMS.map((item) => (
          <div key={item.id} className="border border-[#FFB782] rounded-lg p-4 flex gap-4 bg-[#1A1A1A]">
            <div className="w-16 h-16 bg-[#222] rounded overflow-hidden flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale-[20%] opacity-90" 
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-white font-bold text-lg">
                  {item.name} <span className="text-[#888] text-sm font-normal ml-1">x{item.quantity}</span>
                </h3>
                <p className="text-[#FFB782] text-[24px] font-bold">{item.price}</p>
              </div>
              <p className="text-[#888] text-xs mb-2">Complementary items:</p>
              <div className="flex gap-4 text-[#CCC] text-xs">
                {item.complements.map((complement, idx) => (
                  <p key={idx}>
                    {complement.name} <span className="text-[#888] ml-0.5">x{complement.qty}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItemsCard;