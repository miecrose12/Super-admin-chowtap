import React from 'react';
import { 
  ArrowLeft, 
  Printer, 
  ExternalLink, 
  Upload, 
  Download, 
  Globe, 
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Viewt = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-6 md:p-10 font-sans selection:bg-[#f27a24] selection:text-white">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-start gap-4">
           <Link to="/transactions">
  <button className="p-2 bg-transparent border border-[#f27a24] rounded-md text-gray-300 hover:bg-[#f27a24]/10 transition-colors mt-1">
    <ArrowLeft size={20} strokeWidth={2} />
  </button>
</Link>
            <div>
              <h1 className="text-[22px] font-semibold mb-1">
                Transaction ID: <span className="text-[#f27a24]">567469383</span>
              </h1>
              <p className="text-[13px] text-gray-400">
                A detailed kinetic record of fund movement between stakeholder accounts and the central hub.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-[#f27a24] hover:bg-[#d96a1a] text-white px-5 py-2.5 rounded-md text-[13px] font-semibold transition-colors shadow-sm">
            <Printer size={16} />
            Print Receipt
          </button>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Total Amount Card */}
            <div className="bg-[#0a0a0a] border-l-[3px] border-[#f27a24] p-7 rounded-md shadow-lg relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Amount Disbursed</p>
                <div className="flex items-center gap-1.5 bg-[#14291c] px-2.5 py-1 rounded-sm text-[10px] font-bold text-[#4ade80] tracking-widest">
                  <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></div>
                  SUCCESS
                </div>
              </div>
              
              <h2 className="text-[42px] font-bold tracking-tight mb-10 leading-none">
                ₦452,000.00
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Paid At</p>
                  <p className="text-[13px] font-medium text-gray-100">Oct 24, 2023 • 14:22:10</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Reference Number</p>
                  <p className="text-[13px] font-medium text-gray-100">CF-TR-99827361-ALPHA</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Linked Order</p>
                  <p className="text-[13px] font-bold text-[#f27a24] flex items-center gap-1.5 cursor-pointer hover:underline">
                    #ORD-12345 <ExternalLink size={14} strokeWidth={2.5} />
                  </p>
                </div>
              </div>
            </div>

            {/* Source & Destination Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Source Information */}
              <div className="bg-[#1a1a1a] p-7 rounded-md shadow-sm flex flex-col gap-5 border border-[#222]">
                <h3 className="text-[15px] font-semibold flex items-center gap-2.5 text-gray-100 mb-1">
                  <Upload size={18} className="text-[#f27a24]" strokeWidth={2} /> Source Information
                </h3>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Full Name</p>
                  <p className="text-[13px] font-medium text-gray-100">ChowTap Operations Hub</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Account Number</p>
                  <p className="text-[14px] font-medium text-gray-100 tracking-widest">**** **** 4492</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Bank Name</p>
                  <p className="text-[13px] font-medium text-gray-100">Standard Trust Bank</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Country</p>
                  <p className="text-[13px] font-medium text-gray-100 flex items-center gap-1.5">
                    <Globe size={14} className="text-gray-400" /> Nigeria
                  </p>
                </div>
              </div>

              {/* Destination */}
              <div className="bg-[#1a1a1a] p-7 rounded-md shadow-sm flex flex-col gap-5 border border-[#222]">
                <h3 className="text-[15px] font-semibold flex items-center gap-2.5 text-gray-100 mb-1">
                  <Download size={18} className="text-[#f27a24]" strokeWidth={2} /> Destination
                </h3>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Receiver Account</p>
                  <p className="text-[14px] font-medium text-gray-200 font-mono tracking-wider">0092182733</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Receiver Bank</p>
                  <p className="text-[13px] font-medium text-gray-100">Digital Wallet Core</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Internal Route</p>
                  <p className="text-[13px] font-medium text-gray-100">VND_HUB_DIRECT</p>
                </div>
                
                <div className="mt-auto pt-3">
                  <p className="text-[10px] font-bold text-[#4ade80] uppercase tracking-widest">
                    Instant Settlement Enabled
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Vendor Context */}
            <div className="bg-[#1a1a1a] p-7 rounded-md shadow-sm flex flex-col gap-6 border border-[#222]">
              <h3 className="text-[15px] font-semibold text-gray-100">Vendor Context</h3>
              
              <div className="flex items-center gap-4 bg-[#202020] p-3.5 rounded-md border border-[#2a2a2a]">
                <div className="w-[46px] h-[46px] rounded bg-[#172533] overflow-hidden flex-shrink-0">
                   {/* Avatar Image added here */}
                   <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Vendor avatar" 
                      className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[14px] font-semibold text-gray-100 leading-tight mb-0.5">Mama Put Deluxe</p>
                  <p className="text-[11px] text-gray-400">VND-449-ALPHA</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 pt-1">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Account Name</p>
                  <p className="text-[13px] font-medium text-gray-100">MPD Logistics Services Ltd.</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Business Email</p>
                  <p className="text-[13px] font-medium text-[#f27a24] hover:underline cursor-pointer">accounts@mamaputdeluxe.com</p>
                </div>
                
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Last Settlement</p>
                  <p className="text-[13px] font-medium text-gray-100">2 hours ago</p>
                </div>
              </div>
            </div>

            {/* Need to reverse? */}
            <div className="bg-gradient-to-br from-[#3c2514] to-[#1e1309] p-7 rounded-md shadow-lg border border-[#4d2d14]">
              <h3 className="text-[14px] font-semibold text-[#fcd0a1] flex items-center gap-2 mb-3">
                <Info size={16} /> Need to reverse?
              </h3>
              <p className="text-[12px] text-gray-300 mb-6 leading-relaxed">
                Reversals are only available for 24 hours post-transaction for internal compliance.
              </p>
              <button className="w-full bg-[#fcd0a1] hover:bg-[#e6bb8f] text-[#3d1c00] py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm">
                Initiate Dispute
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewt;