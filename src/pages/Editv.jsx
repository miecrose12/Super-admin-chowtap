import React, { useState } from 'react';
import { ArrowLeft, MapPin, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditVendor = () => {
  // State to track the currently selected status
  const [status, setStatus] = useState('Active');

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-400 font-sans p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <Link to="/vendors/overview">
  <button className="p-2 bg-[#1A1A1A] border border-gray-800 rounded-md hover:bg-gray-800 transition-colors">
    <ArrowLeft size={20} className="text-white" />
  </button>
</Link>
          <h1 className="text-2xl font-semibold text-white">Edit Vendor Details</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white font-medium transition-colors">Cancel</button>
          <button className="bg-[#DC781B] text-black font-bold py-2.5 px-8 rounded-lg hover:bg-[#b86112] transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12">
        {/* Main Form Area */}
        <div className="col-span-8 space-y-12">
          
          {/* Owner's Information Section */}
          <section>
            <h2 className="text-[#DC781B] text-xs font-bold tracking-widest uppercase mb-6">Owner's Information</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Owner's Name</label>
                <input type="text" defaultValue="JOHN DOE" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">User ID</label>
                <input type="text" defaultValue="VND - 9921 - XLR" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Owner's Email</label>
                <input type="email" defaultValue="JOHNDOE@GMAIL.COM" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Owner's Phone Number</label>
                <input type="text" defaultValue="+234-706-765-9876" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
            </div>
          </section>

          {/* Physical Address Section */}
          <section>
            <h2 className="text-xs font-bold tracking-widest uppercase mb-4">Physical Address</h2>
            <div className="bg-[#141414] rounded-lg p-4 flex items-center justify-between border border-gray-900 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-[#1A1A1A] p-3 rounded-md border border-gray-800 text-[#DC781B]">
                  <MapPin size={20} />
                </div>
                <span className="text-white text-sm">McPherson University</span>
              </div>
              <button className="text-[#FFB782] text-[10px] font-bold border border-[#FFB782] px-3 py-1 rounded hover:bg-[#DC781B] hover:text-black transition-all">
                CHANGE
              </button>
            </div>
          </section>

          {/* Vendor's Information Section */}
          <section>
            <h2 className="text-[#DC781B] text-xs font-bold tracking-widest uppercase mb-6">Vendor's Information</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Vendor Name</label>
                <input type="text" defaultValue="BROS JOHN" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Vendor ID</label>
                <input type="text" defaultValue="VND - 9921 - XLR" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Vendor Email</label>
                <input type="email" defaultValue="JOHNDOE@GMAIL.COM" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Description</label>
                <input type="text" defaultValue="IRRESISTIBLE TASTE OF EXCELLENCE" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Estimated Delivery Time</label>
                <input type="text" defaultValue="15 - 30 MINS" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
              <div className="border-b border-gray-800 pb-2 focus-within:border-[#DC781B] transition-colors">
                <label className="block text-[10px] uppercase tracking-wider mb-2">Rider Delivery Time</label>
                <input type="text" defaultValue="40" className="bg-transparent text-white w-full outline-none text-sm" />
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Controls */}
        <div className="col-span-4 space-y-10">
          {/* Status Control */}
          <section>
            <h2 className="text-xs font-bold tracking-widest uppercase mb-6 text-right">Status Control</h2>
            <div className="space-y-3">
              
              {/* Active Status */}
              <div 
                onClick={() => setStatus('Active')}
                className={`cursor-pointer p-4 rounded-lg flex items-center justify-between border-l-4 transition-all duration-200 ${
                  status === 'Active' 
                    ? 'bg-[#1A1A1A] border-[#DC781B] opacity-100' 
                    : 'bg-[#141414] border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} className={status === 'Active' ? 'text-[#DC781B]' : 'text-gray-400'} />
                  <span className="text-sm">Active</span>
                </div>
                {status === 'Active' && <div className="w-2 h-2 rounded-full bg-[#DC781B]"></div>}
              </div>
              
              {/* Pending Status */}
              <div 
                onClick={() => setStatus('Pending')}
                className={`cursor-pointer p-4 rounded-lg flex items-center justify-between border-l-4 transition-all duration-200 ${
                  status === 'Pending' 
                    ? 'bg-[#1A1A1A] border-[#DC781B] opacity-100' 
                    : 'bg-[#141414] border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <div className="flex items-center gap-3 text-white">
                  <Clock size={18} className={status === 'Pending' ? 'text-[#DC781B]' : 'text-gray-400'} />
                  <span className="text-sm">Pending</span>
                </div>
                {status === 'Pending' && <div className="w-2 h-2 rounded-full bg-[#DC781B]"></div>}
              </div>
              
              {/* Suspended Status */}
              <div 
                onClick={() => setStatus('Suspended')}
                className={`cursor-pointer p-4 rounded-lg flex items-center justify-between border-l-4 transition-all duration-200 ${
                  status === 'Suspended' 
                    ? 'bg-[#1A1A1A] border-[#DC781B] opacity-100' 
                    : 'bg-[#141414] border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <div className="flex items-center gap-3 text-white">
                  <AlertTriangle size={18} className={status === 'Suspended' ? 'text-[#DC781B]' : 'text-gray-400'} />
                  <span className="text-sm">Suspended</span>
                </div>
                {status === 'Suspended' && <div className="w-2 h-2 rounded-full bg-[#DC781B]"></div>}
              </div>

            </div>
          </section>

          {/* Vendor Logo Section */}
          <section>
            <h2 className="text-[#DC781B] text-xs font-bold tracking-widest uppercase mb-6">Vendor Logo</h2>
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden p-4 border border-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500" 
                alt="Burger Logo" 
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button className="text-gray-400 text-[10px] font-bold border border-gray-800 px-6 py-2 rounded uppercase tracking-widest border-[#FFB782] text-[#FFB782] transition-all">
                Change Logo
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditVendor;