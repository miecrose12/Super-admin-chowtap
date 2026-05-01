import React from 'react';

const ItemDetailModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  // Fallback data if some fields are missing from your WISHLIST_ITEMS
  const details = {
    description: item.description || "A masterful fusion of textures featuring tempura shrimp, cucumber, and spicy mayo, topped with thinly sliced avocado, BBQ eel, and a signature black garlic reduction. Served with freshly grated wasabi and pickled young ginger.",
    likes: item.likes || 420,
    orders: item.orders || 18,
    category: item.category || "Main Dish",
    prepTime: item.prepTime || "12 Min",
    complementary: item.complementary || ["Plantain", "Fried rice", "Takeaway", "Garri", "Pure water"]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="bg-[#111] w-full max-w-5xl rounded-2xl overflow-hidden flex flex-col md:flex-row border border-white/10 relative shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-neutral-400 hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Column: Image Area */}
        <div className="w-full md:w-[45%] relative h-[300px] md:h-auto">
          <img 
            src={item.image || "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=800"} 
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          {/* Image Content Bottom */}
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
            <span className="bg-[#DC781B] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider w-max">
              Signature Choice
            </span>
            <h1 className="text-4xl font-bold text-white tracking-tight">{item.name}</h1>
          </div>
        </div>

        {/* Right Column: Details Area */}
        <div className="w-full md:w-[55%] p-8 lg:p-10 flex flex-col bg-[#111]">
          
          {/* Header Info */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-[#DC781B] text-xs font-bold uppercase tracking-[0.15em] mb-1">{item.name}</h2>
              <p className="text-neutral-400 text-sm">Vendor: {item.vendor}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{item.price}</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Tax Incl.</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Chef's Description</h3>
            <p className="text-neutral-300 text-[13px] leading-relaxed">
              {details.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Like Counts */}
            <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
              <svg className="w-4 h-4 text-[#DC781B] mb-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
              <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Like Counts</div>
              <div className="text-white font-bold text-lg">{details.likes}</div>
            </div>
            
            {/* Order Count */}
            <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
              <svg className="w-4 h-4 text-[#DC781B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Order Count</div>
              <div className="text-white font-bold text-lg">{details.orders}</div>
            </div>

            {/* Category */}
            <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
              <svg className="w-4 h-4 text-[#DC781B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Category</div>
              <div className="text-white font-bold text-lg">{details.category}</div>
            </div>

            {/* Prep Time */}
            <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
              <svg className="w-4 h-4 text-[#DC781B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Prep Time</div>
              <div className="text-white font-bold text-lg">{details.prepTime}</div>
            </div>
          </div>

          {/* Complementary Items */}
          <div className="mt-auto">
            <h3 className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Complementary Items</h3>
            <div className="flex flex-wrap gap-2">
              {details.complementary.map((comp, idx) => (
                <span key={idx} className="bg-black border border-white/10 text-neutral-300 text-[11px] px-3 py-1.5 rounded-md">
                  {comp}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;