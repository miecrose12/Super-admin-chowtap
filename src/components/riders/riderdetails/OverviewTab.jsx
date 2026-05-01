import React from 'react';
import { MapPin } from 'lucide-react';

const InfoCard = ({ label, value }) => (
  <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-lg">{value}</p>
  </div>
);

const OverviewTab = ({ 
  fullName = 'Marcus Thorne',
  email = 'm.thorne@chowtap.com',
  phone = '+1 (555) 902-3482',
  campus = 'McPherson Main Campus',
  campusOrganization = 'McPherson University',
  location = 'Ogun, Nigeria'
}) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Personal Identity Section */}
      <div className="col-span-4 space-y-4">
        <h2 className="text-xs text-[#C69269] font-bold uppercase tracking-widest mb-4">Personal Identity</h2>
        <InfoCard label="Full Legal Name" value={fullName} />
        <InfoCard label="Email Address" value={email} />
        <InfoCard label="Mobile Number" value={phone} />
      </div>
      
      {/* Operating Campus Section */}
      <div className="col-span-8">
        <h2 className="text-xs text-[#C69269] font-bold uppercase tracking-widest mb-4">Operating Campus</h2>
        
        <div className="relative w-full h-[280px] rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#223d38]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-color-dodge"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop")' }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent z-10"></div>
          
          {/* Location Marker */}
          <div className="absolute top-[45%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-10 h-10 bg-[#FFB300]/20 rounded-xl flex items-center justify-center animate-pulse">
              <div className="w-2.5 h-2.5 bg-[#FFB300] rounded-full"></div>
            </div>
          </div>

          {/* Campus Info */}
          <div className="absolute bottom-6 left-6 z-20">
            <p className="text-[10px] text-[#C69269] font-bold uppercase tracking-widest mb-1">{campusOrganization}</p>
            <h3 className="text-2xl font-bold mb-1 text-white">{campus}</h3>
            <p className="text-sm text-gray-400 flex items-center gap-1.5">
              <MapPin size={14} className="text-gray-400" /> {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;