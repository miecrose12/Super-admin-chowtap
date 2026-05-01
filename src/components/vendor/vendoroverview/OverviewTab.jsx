import React from 'react';
import { Check, MapPin, Clock } from 'lucide-react';
import StatCard from './StatCard';
import { STATS_DATA, VERIFICATION_ITEMS, OPERATING_HOURS } from '../../../utils/vendorData';

const OverviewTab = () => {
  return (
    <div className="space-y-8 p-6 bg-[#0e0e0e] min-h-screen font-sans">
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS_DATA.map((stat, i) => (
          <StatCard key={i} label={stat.label} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      {/* Core Information Section */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-[3px] h-5 bg-orange-500 rounded-full"></div>
          <h2 className="text-lg font-medium text-white tracking-wide">Core Information</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Owner & Email */}
          <div className="flex flex-col gap-4">
            <OwnerCard />
            <EmailCard />
          </div>

          {/* Center Column: Verification Status */}
          <VerificationCard />

          {/* Right Column: Map View */}
          <MapCard />
        </div>

        {/* Bottom Section: Phone and Operating Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <PhoneCard />
          <OperatingHoursCard />
        </div>
      </div>
    </div>
  );
};

const OwnerCard = () => (
  <div className="bg-[#141414] border border-neutral-800 p-5 rounded-md h-[115px] flex flex-col justify-center">
    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">OWNER</div>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" 
          alt="Sarah Jenkins" 
          className="w-full h-full object-cover" 
        />
      </div>
      <span className="font-medium text-white text-sm">Sarah Jenkins</span>
    </div>
  </div>
);

const EmailCard = () => (
  <div className="bg-[#141414] border border-neutral-800 p-5 rounded-md h-[115px] flex flex-col justify-center">
    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">PRIMARY EMAIL</div>
    <div className="font-medium text-white text-sm">email@greenleaf.edu</div>
  </div>
);

const VerificationCard = () => (
  <div className="bg-[#141414] border border-neutral-800 p-6 rounded-md flex flex-col h-[246px]">
    <div className="flex justify-between items-center mb-8">
      <div className="font-medium text-white">Verification Status</div>
      <span className="px-3 py-1 text-[10px] font-bold bg-[#0d2e20] text-emerald-500 rounded-md uppercase tracking-wider">
        VERIFIED
      </span>
    </div>
    
    <div className="space-y-6">
      {VERIFICATION_ITEMS.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="w-7 h-7 rounded-full bg-[#0d2e20] flex items-center justify-center shrink-0 mt-0.5">
            <Check className="text-emerald-500" size={14} strokeWidth={3} />
          </div>
          <div>
            <div className="text-white font-medium text-sm mb-1">{item.title}</div>
            <div className="text-xs text-neutral-500">{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MapCard = () => (
  <div className="bg-[#1a2f2b] border border-neutral-800 rounded-md relative overflow-hidden h-[246px] flex flex-col justify-end">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop")',
        filter: 'sepia(1) hue-rotate(110deg) saturate(2)'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1512] via-transparent to-transparent"></div>
    
    <div className="absolute top-[50%] left-[65%] -translate-x-1/2 -translate-y-1/2">
      <div className="w-3 h-3 bg-[#ff9c5a] rounded-full shadow-[0_0_12px_rgba(255,156,90,1)] border border-orange-200"></div>
    </div>

    <div className="relative z-10 p-6 w-full">
      <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">
        MCPHERSON UNIVERSITY
      </div>
      <div className="text-xl font-bold text-white mb-2 tracking-tight">
        Bros John
      </div>
      <div className="flex items-center gap-1.5 text-sm text-neutral-300 font-medium">
        <MapPin size={14} className="text-neutral-400" /> Ogun, Nigeria
      </div>
    </div>
  </div>
);

const PhoneCard = () => (
  <div className="bg-[#141414] border border-neutral-800 p-5 rounded-md h-[150px] flex flex-col justify-center">
    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">PHONE</div>
    <div className="font-medium text-white text-sm">+234 (555) 123-4567</div>
  </div>
);

const OperatingHoursCard = () => (
  <div className="lg:col-span-2 bg-[#141414] border border-neutral-800 p-6 rounded-md flex flex-col justify-center">
    <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-6">
      <Clock size={14} className="text-orange-500" /> OPERATING HOURS
    </div>
    <div className="space-y-5 text-sm">
      {OPERATING_HOURS.map((hour, idx) => (
        <div key={idx} className={`flex justify-between ${idx !== OPERATING_HOURS.length - 1 ? 'border-b border-neutral-800/50 pb-2' : ''}`}>
          <span className="text-neutral-500">{hour.day}</span>
          <span className="text-white font-medium">{hour.time}</span>
        </div>
      ))}
    </div>
  </div>
);

export default OverviewTab;