import React, { useState } from 'react';
import { ArrowLeft, MapPin, CheckCircle2, MinusCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditRider = () => {
  const [status, setStatus] = useState('active');

  const statusOptions = [
    { id: 'active', label: 'Active', icon: <CheckCircle2 className="w-5 h-5 text-[#FFB782]" /> },
    { id: 'pending', label: 'Pending', icon: <MinusCircle className="w-5 h-5 text-gray-400" /> },
    { id: 'suspended', label: 'Suspended', icon: <AlertTriangle className="w-5 h-5 text-gray-400" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
             <Link to="/riders/riders-details">
              <button className="p-2 border border-[#DC781B] rounded-lg hover:bg-orange-500/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#ffffff" />
          </button>
            </Link>
        
          <h1 className="text-2xl font-semibold tracking-tight">Edit Rider Details</h1>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Cancel</button>
          <button className="bg-[#E68A39] hover:bg-[#d4792d] text-black px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex gap-16 max-w-7xl">
        {/* Left Column: Form Fields */}
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-[#DC781B] text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Owner's Information</h2>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {/* Owner's Name */}
              <div className="border-b border-white/10 pb-2">
                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-4 font-bold">Owner's Name</label>
                <p className="text-sm text-gray-300 font-medium uppercase">John Doe</p>
              </div>

              {/* User ID */}
              <div className="border-b border-white/10 pb-2">
                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-4 font-bold">User ID</label>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">Vnd-8921-XLR</p>
              </div>

              {/* Owner's Email */}
              <div className="border-b border-white/10 pb-2">
                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-4 font-bold">Owner's Email</label>
                <p className="text-sm text-gray-300 font-medium uppercase">johndoe@gmail.com</p>
              </div>

              {/* Phone Number */}
              <div className="border-b border-white/10 pb-2">
                <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-4 font-bold">Owenr's Phone Number</label>
                <p className="text-sm text-gray-300 font-medium">+234-706-765-9876</p>
              </div>
            </div>
          </section>

          {/* Physical Address Section */}
          <section>
            <h2 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-4">Physical Address</h2>
            <div className="bg-[#1A1A1A]/40 border border-white/5 rounded-xl p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-[#262626] p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-500/80" />
                </div>
                <span className="text-sm text-gray-300">McPherson University</span>
              </div>
              <button className="text-[10px] font-bold tracking-widest uppercase border border-[#FFB782] px-4 py-1.5 rounded text-[#FFB782]  transition-all">
                Change
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Status Control */}
        <div className="w-80">
          <h2 className="text-[#E68A39] text-[10px] text-right uppercase tracking-[0.15em] font-bold mb-6">Status Control</h2>
          
          <div className="space-y-3">
            {statusOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setStatus(option.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${
                  status === option.id 
                    ? 'bg-[#1A1A1A] border-l-4 border-l-[#FFB782] border-white/5' 
                    : 'bg-[#141414] border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {option.icon}
                  <span className={`text-sm ${status === option.id ? 'text-white' : 'text-gray-400'}`}>
                    {option.label}
                  </span>
                </div>
                {status === option.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRider;