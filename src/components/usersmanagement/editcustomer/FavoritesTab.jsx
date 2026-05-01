import React, { useState } from 'react';
import { WISHLIST_ITEMS } from '../../../utils/Editcustomer';
import ItemDetailModal from './ItemDetailModal';
 // Adjust path if needed

const FavoritesTab = () => {
  // Add state to track which item is selected for the modal
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Col: Wishlist */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[19px] font-semibold text-white tracking-wide">Favorites</h2>
            <span className="text-xs text-neutral-400 font-medium tracking-wide">{WISHLIST_ITEMS.length} Items Saved</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {WISHLIST_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedItem(item)} // <-- Add onClick handler here
                className="relative h-44 rounded-xl overflow-hidden border border-white/5 group cursor-pointer"
              >
                <img
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image || "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col justify-end">
                  <span className="text-white font-semibold text-[13px] mb-1.5">{item.name}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-[#dfa375] font-semibold text-xs">{item.price}</span>
                    <span className="bg-[#1a1a1a]/90 border border-white/10 text-[9px] font-bold text-neutral-300 px-2 py-1 rounded uppercase tracking-[0.08em] backdrop-blur-md">
                      {item.vendor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Insights */}
        <div className="flex flex-col gap-5">
          {/* Most Ordered Items */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
            <h3 className="text-[10px] font-bold text-[#dfa375] tracking-[0.2em] uppercase mb-6">Most Ordered Items</h3>
            <div className="flex flex-col gap-5">
              {[
                { rank: 1, name: 'Caramel Latte', times: 16, trend: 'up' },
                { rank: 2, name: 'Garlic Fries', times: 12, trend: 'flat' },
                { rank: 3, name: 'Avocado Toast', times: 9, trend: 'up' },
              ].map((item) => (
                <div key={item.rank} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#131313] flex items-center justify-center border border-[#262626]">
                      <span className="text-[#FFA35B] font-bold text-sm">{item.rank}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-medium text-white">{item.name}</span>
                      <span className="text-[10px] text-neutral-500 font-medium">Ordered {item.times} times</span>
                    </div>
                  </div>
                  {item.trend === 'up' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#22c55e]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Top Vendors */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-[#222]">
            <h3 className="text-[10px] font-bold text-[#dfa375] tracking-[0.2em] uppercase mb-5">Top Vendors</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Green Leaf Cafe', rating: 4.8, orders: 22 },
                { name: 'Urban Bites', rating: 4.6, orders: 14 },
              ].map((vendor) => (
                <div key={vendor.name} className="bg-[#000000] p-3 rounded-xl flex items-center justify-between border border-[#262626]">
                  <div className="flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#222] flex items-center justify-center border border-[#2a2a2a]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFA35B]"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-medium text-white">{vendor.name}</span>
                      <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-medium tracking-wide">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        {vendor.rating} RATING
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#dfa375]">{vendor.orders} orders</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render the Modal */}
      <ItemDetailModal 
        isOpen={!!selectedItem} 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </>
  );
};

export default FavoritesTab;