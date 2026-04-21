import React, { useState } from 'react';
import { ArrowLeft, Search, X, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Editm = () => {
  // State for the toggle switch
  const [isAvailable, setIsAvailable] = useState(true);

  // Data for the complementary items to add, including detailed image URLs
  const itemsToAdd = [
    { id: 1, name: 'Fried Rice', category: 'main dish', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150' },
    { id: 2, name: 'Fried Rice', category: 'main dish', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150' },
    { id: 3, name: 'Fried Rice', category: 'main dish', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150' },
    { id: 4, name: 'Fried Rice', category: 'main dish', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150' },
    { id: 5, name: 'Fried Rice', category: 'main dish', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=150' },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-6 font-sans">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/vendors/overview">
  <button className="p-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
    <ArrowLeft size={20} className="text-gray-300" />
  </button>
</Link>
          <h1 className="text-2xl font-semibold">Edit Product Details</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white px-4 py-2 font-medium">
            Cancel
          </button>
          <button className="bg-[#E67E22] hover:bg-[#D35400] text-black font-semibold px-6 py-2 rounded-md transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Form Details */}
        <div className="flex-1 space-y-8">
          
          {/* Section Title */}
          <h2 className="text-[#E67E22] text-xs font-bold tracking-widest uppercase">
            Product Name
          </h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                Product Name
              </label>
              <input
                type="text"
                defaultValue="EWA AGOYIN"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#E67E22] transition-colors"
              />
            </div>

            {/* Product ID */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                Product ID
              </label>
              <input
                type="text"
                defaultValue="VND-9921-XLR"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#E67E22] transition-colors"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                Price (N)
              </label>
              <input
                type="text"
                defaultValue="200.00"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#E67E22] transition-colors"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                Description
              </label>
              <input
                type="text"
                defaultValue="DELICIOUS MASHED BEANS"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#E67E22] transition-colors"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                Category
              </label>
              <input
                type="text"
                defaultValue="MAIN DISH"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#E67E22] transition-colors"
              />
            </div>
          </div>

          {/* Complementary Items Section */}
          <div className="bg-[#161616] border border-[#222222] rounded-xl p-6 mt-8">
            <div className="flex items-center gap-2 mb-6">
              <LinkIcon className="text-[#E67E22]" size={20} />
              <h3 className="text-lg font-medium">Complementary Items</h3>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search menu items to link..."
                className="w-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg pl-12 pr-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-gray-700 transition-colors"
              />
            </div>

            {/* Selected Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Truffle Fries', 'Craft Soda', 'Garlic Aioli'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#2A2A2A] hover:bg-[#333333] px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors">
                  {item}
                  <X size={14} className="text-gray-400 hover:text-white" />
                </div>
              ))}
            </div>

            {/* Select Items to Add */}
            <div>
              <h4 className="text-xs text-gray-400 font-semibold tracking-wide uppercase mb-4">
                Select items to add:
              </h4>
              <div className="flex flex-wrap gap-3">
                {itemsToAdd.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] rounded-lg p-2 w-48 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">{item.name}</p>
                        <p className="text-[10px] text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    <button className="text-gray-500 group-hover:text-gray-300 p-1 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Availability & Image */}
        <div className="w-full lg:w-80 flex flex-col gap-8">
          
          {/* Availability Card */}
          <div className="bg-[#1A1A1A] rounded-lg p-5 border-l-4 border-[#E67E22] flex items-center justify-between shadow-lg">
            <div>
              <h3 className="font-semibold text-gray-100 mb-1">Availability</h3>
              <p className="text-xs text-gray-400">Make product visible to<br/>customers</p>
            </div>
            {/* Custom Toggle Switch */}
            <button 
              onClick={() => setIsAvailable(!isAvailable)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAvailable ? 'bg-[#3A2A1A]' : 'bg-gray-600'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full transition-transform ${isAvailable ? 'translate-x-6 bg-[#E67E22]' : 'translate-x-1 bg-white'}`} />
            </button>
          </div>

          {/* Product Image Section */}
          <div className="space-y-4">
            <h2 className="text-[#E67E22] text-xs font-bold tracking-widest uppercase">
              Product Image
            </h2>
            
            <div className="bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" 
                alt="Product" 
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="flex justify-center">
              <button className="text-[#E67E22] border border-[#E67E22] hover:bg-[#E67E22] hover:text-black text-xs font-semibold px-6 py-2 rounded transition-colors uppercase tracking-wider">
                Change Image
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Editm;