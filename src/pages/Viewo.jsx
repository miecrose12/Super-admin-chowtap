import React from 'react';
import { ArrowLeft, User, Store, Bike, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E0E0E0] p-8 md:p-10 font-sans antialiased">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-5">
         <Link to="/orders">
  <button className="w-11 h-11 flex items-center justify-center border border-[#333] border-l-[3px] border-l-[#FFB782] rounded bg-[#1A1A1A] hover:bg-[#222] transition-colors">
    <ArrowLeft size={18} className="text-gray-300" />
  </button>
</Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white tracking-tight">#Order-4567</h1>
              <span className="bg-[#2C1A0A] text-[#FFB782] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">New</span>
            </div>
            <p className="text-[#888] text-xs mt-1">October 24, 2026 | 12:24PM</p>
          </div>
        </div>
        <button className="bg-[#DC781B] text-white font-bold text-[11px] px-8 py-3.5 rounded uppercase tracking-wider hover:brightness-110 transition-all">
          Assign Rider
        </button>
      </div>

      {/* --- TOP ROW --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 items-stretch">
        
        {/* Customer Details */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] h-full flex flex-col">
          <div className="flex justify-between items-start mb-5">
            <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider">Customer Details</h2>
            <User size={16} className="text-[#888]" />
          </div>
          <div className="mb-6 flex-grow">
            <p className="text-[#E7E5E5] text-base font-semibold mb-1">Alex Chen</p>
            <p className="text-[#ACABAA] text-xs mb-1">alex.chen@university.edu</p>
            <p className="text-[#ACABAA] text-xs">+1 (555) 012-3456</p>
          </div>
          <div>
            <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider mb-3">Destination</h2>
            <p className="text-[#E7E5E5] text-xs leading-relaxed">
              Central Library, Room 402<br />
              North Campus Dr, Sector 4
            </p>
          </div>
        </div>

        {/* Vendor Hub */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-5">
              <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider">Vendor Hub</h2>
              <Store size={16} className="text-[#888]" />
            </div>
            <p className="text-[#FFB782] text-base font-semibold mb-1">Urban Bites Grill</p>
            <p className="text-[#ACABAA] text-xs mb-1">orders@urbanbites.com</p>
            <p className="text-[#ACABAA] text-xs">North Campus Mall, Stall 12</p>
          </div>
          <div className="mt-8 flex justify-between items-end">
            <div>
              <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-2">Kitchen Status</h2>
              <p className="text-[#ED7F64] text-xs font-medium">Busy (High Volume)</p>
            </div>
            <button className="text-[#FFB782] text-xs font-semibold hover:underline decoration-1 underline-offset-4">
              Contact Vendor
            </button>
          </div>
        </div>

        {/* Courier Info */}
     <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#2A2A2A] flex flex-col h-[120px]">
  <div className="flex justify-between items-start mb-3">
    <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider">
      Courier Info
    </h2>
    <Bike size={16} className="text-[#888]" />
  </div>
  <div>
    <p className="text-[#E0E0E0] text-base font-medium">
      Rider Yet To Be Assigned
    </p>
  </div>
</div>
      </div>

      {/* --- BOTTOM ROW --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Order Items */}
        <div className="md:col-span-2 bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider">Order Items</h2>
            <span className="border border-[#FFB782]/50 text-[#AAA] text-[10px] font-bold px-3 py-1 rounded">2 ITEMS</span>
          </div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-[#FFB782] rounded-lg p-4 flex gap-4 bg-[#1A1A1A]">
                <div className="w-16 h-16 bg-[#222] rounded overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=200" alt="Food" className="w-full h-full object-cover grayscale-[20%] opacity-90" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-bold text-lg">Jollof Rice <span className="text-[#888] text-sm font-normal ml-1">x3</span></h3>
                    <p className="text-[#FFB782] text-[24px] font-bold">N1,300.00</p>
                  </div>
                  <p className="text-[#888] text-xs mb-2">Complementary items:</p>
                  <div className="flex gap-4 text-[#CCC] text-xs">
                    <p>Takeaway <span className="text-[#888] ml-0.5">x1</span></p>
                    <p>Plantain <span className="text-[#888] ml-0.5">x1</span></p>
                    <p>Fried rice <span className="text-[#888] ml-0.5">x1</span></p>
                    <p>Big meat <span className="text-[#888] ml-0.5">x1</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totals and Payment */}
        <div className="flex flex-col gap-5">
          {/* Financial Summary */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
            <h2 className="text-[11px] font-bold text-[#ACABAA] uppercase tracking-wider mb-6">Financial Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#ACABAA]">Subtotal</span>
                <span className="text-[#E0E0E0]">N2,500.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#ACABAA]">Delivery Fee</span>
                <span className="text-[#E0E0E0]">N200.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#ACABAA]">Service Fee</span>
                <span className="text-[#E0E0E0]">N50.00</span>
              </div>
            </div>
            <div className="pt-5 border-t border-[#333] flex justify-between items-center">
              <span className="text-white font-bold text-base">Grand Total</span>
              <span className="text-[#FFB782] font-bold text-2xl tracking-tight">N2,800.00</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
            <h2 className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-5">Payment Method</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#111] border border-[#333] px-3 py-1.5 rounded text-white font-black italic text-[11px]">
                VISA
              </div>
              <div>
                <p className="text-white text-sm font-bold">Paystack Transfer</p>
                <p className="text-[#888] text-xs mt-0.5">Acct Number: ########890</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#22C55E]">
              <CheckCircle2 size={14} strokeWidth={3} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Transaction Secured</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OrderDetails;