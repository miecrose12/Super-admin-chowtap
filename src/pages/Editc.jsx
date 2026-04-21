import React from 'react';
import { 
  ArrowLeft, 
  History, 
  Phone, 
  ChevronDown, 
  CheckCircle2, 
  Ban, 
  Info 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Editc = () => {
  return (
    <div className="min-h-screen bg-[#0E0E11] text-zinc-100 p-6 md:p-10 font-sans">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto flex justify-between items-start mb-8">
        <div className="flex gap-4 items-start">
       <Link to="/users/edit">
  <button className="p-2 border border-zinc-700/50 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 mt-1">
    <ArrowLeft className="w-5 h-5" />
  </button>
</Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Edit Customer Profile</h1>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Manage profile details, geographical assignments, and account permissions for ChowTap users.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-right">
          <div className="hidden sm:block text-xs text-zinc-400">
            <span className="block mb-0.5">Last updated</span>
            <span className="text-zinc-100 font-medium">Oct 24, 2023</span>
          </div>
          <button className="p-2 bg-[#1A1A1A] border border-zinc-800 hover:bg-zinc-800 rounded-lg transition-colors text-[#D97736]">
            <History className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="max-w-5xl mx-auto bg-[#151517] border border-zinc-800/60 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/50">
        
        {/* Top Row: Avatar + Name/Email */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Avatar Placeholder */}
          <div className="w-24 h-24 bg-[#EBEBEB] text-[#151517] rounded-2xl flex items-center justify-center text-xl font-bold shadow-inner border border-zinc-600/20 shrink-0">
            JC
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Full Name
              </label>
              <input 
                type="text" 
                defaultValue="Jane Cooper"
                className="w-full bg-[#0A0A0C] border border-transparent focus:border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Email Address
              </label>
              <input 
                type="email" 
                defaultValue="j.cooper@example.edu"
                className="w-full bg-[#0A0A0C] border border-transparent focus:border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                  <Phone className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  defaultValue="+234 709-012-3456"
                  className="w-full bg-[#0A0A0C] border border-transparent focus:border-zinc-700 rounded-lg pl-11 pr-4 py-3 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                University / Location
              </label>
              <div className="relative">
                <select className="w-full bg-[#0A0A0C] border border-transparent focus:border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none appearance-none transition-all cursor-pointer">
                  <option>McPherson University</option>
                  <option>University of Lagos</option>
                  <option>Covenant University</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-zinc-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Account Status
              </label>
              <div className="flex bg-[#0A0A0C] rounded-lg p-1">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#232326] text-[#E0792A] rounded-md py-2.5 text-sm font-medium shadow-sm transition-all">
                  <CheckCircle2 className="w-4 h-4" />
                  Active
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-300 py-2.5 text-sm font-medium transition-all">
                  <Ban className="w-4 h-4" />
                  Suspended
                </button>
              </div>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800/60 rounded-xl p-4 flex gap-3 mt-1">
              <Info className="w-5 h-5 text-[#E0792A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 mb-1">Security Note</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Changes to the account status will be logged in the global audit trail and notified to the regional hub manager.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-6 mt-12 pt-6">
          <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Cancel
          </button>
          <button className="bg-[#E0792A] hover:bg-[#C96920] text-black font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-[#E0792A]/10">
            Update Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default Editc;