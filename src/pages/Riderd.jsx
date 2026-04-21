import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Pencil, 
  ChevronDown, 
  Info, 
  List, 
  MessageSquare, 
  MapPin, 
  Search, 
  Calendar, 
  Filter, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Riderd = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Dummy data
  const orders = [
    { id: '#Order-4567', date: 'Oct 24, 2023 • 18:42', vendor: 'Taco Bell - Downtown', total: 'N2,580.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Food arrived pipin...' },
    { id: '#Order-4567', date: 'Oct 24, 2023 • 18:42', vendor: 'Taco Bell - Downtown', total: 'N2,580.00', status: 'DELIVERED', review: '⭐⭐⭐⭐⭐ *Food arrived pipin...' },
    { id: '#Order-8903', date: 'Oct 20, 2023 • 20:10', vendor: 'Burger King', total: 'N2,580.00', status: 'REFUNDED', review: 'No review provided' },
    { id: '#Order-5674', date: 'Oct 18, 2023 • 19:15', vendor: 'The Pasta House', total: 'N2,580.00', status: 'PROCESSING', review: 'Order in progress' },
    { id: '#Order-5674', date: 'Oct 18, 2023 • 19:15', vendor: 'The Pasta House', total: 'N2,580.00', status: 'PROCESSING', review: 'Order in progress' },
  ];

  const reviews = [
    { initials: 'JD', name: 'Jameson Dunn', date: 'May 24, 2024', rating: 5, text: '"Super fast delivery! The food arrived while it was still piping hot. Alex always takes the most efficient routes. Best rider in the campus area hands down."' },
    { initials: 'SM', name: 'Sarah Mitchell', date: 'May 22, 2024', rating: 4, text: '"Rider was polite and followed all instructions for the contactless drop-off. A bit of a wait near the restaurant, but the rider kept me updated via chat throughout."' },
    { initials: 'SM', name: 'Sarah Mitchell', date: 'May 22, 2024', rating: 4, text: '"Rider was polite and followed all instructions for the contactless drop-off. A bit of a wait near the restaurant, but the rider kept me updated via chat throughout."' },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-8 font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <Link to="/riders">
  <button className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:bg-[#2A2A2A] transition">
    <ArrowLeft size={20} className="text-gray-300" />
  </button>
</Link>
          <div className="w-16 h-16 bg-[#F4F4F4] text-black font-bold text-xl flex items-center justify-center rounded-xl">
            MJ
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-wide">Marcus Joe</h1>
              <span className="px-2 py-1 text-xs font-bold bg-[#0A2E1F] text-[#00E676] rounded uppercase tracking-wider">Active</span>
            </div>
            <div className="text-gray-400 mt-1 text-sm flex items-center gap-1">
              <Star size={16} className="text-[#FFB300] fill-[#FFB300]" />
              <span className="text-white font-medium">4.8</span>
              <span>(1,240 reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link to="/riders/edit-rider">
  <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition flex items-center gap-2">
    <Pencil size={16} /> Edit Rider
  </button>
</Link>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition">
            Clear Balance
          </button>
          <button className="px-4 py-2 bg-[#7E2B1733] text-[#ED7F64] border border-[#3A1A1A] text-sm font-medium rounded-lg hover:bg-[#3A1A1A] transition">
            Suspend Rider
          </button>
        </div>
      </div>

      {/* Reporting Period Filter */}
      <div className="mb-6 inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-2 rounded-lg text-xs font-semibold text-gray-400">
        REPORTING PERIOD 
        <span className="text-white ml-1 flex items-center gap-1 cursor-pointer">
          Last 30 Days <ChevronDown size={14} className="ml-1" />
        </span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-8 bg-[#1F2020] border border-[#2A2A2A] border-l-4 border-l-[#FF8A00] rounded-xl p-6 flex justify-between items-center">
          <div>
            <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Riders Revenue</h3>
            <p className="text-3xl font-bold mb-1">N 17,890,090.00</p>
            <p className="text-xs text-[#00E676]">~ 12.4% from last month</p>
          </div>
          <div className="flex gap-8 text-left">
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Completed<br/>Orders</h3>
              <p className="text-2xl font-semibold">1,565</p>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Rejected<br/>Orders</h3>
              <p className="text-2xl font-semibold">3</p>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Delivered<br/>Early</h3>
              <p className="text-2xl font-semibold">1,132</p>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Delivered<br/>Late</h3>
              <p className="text-2xl font-semibold">433</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-[#161616] border border-[#2A2A2A] border-l-4 border-l-[#FF8A00] rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
          <h3 className="text-[10px] text-[#FF8A00] font-bold uppercase tracking-widest mb-1 z-10">Rider Balance</h3>
          <p className="text-3xl font-bold z-10">N 280,000.00</p>
          <ShieldCheck size={120} strokeWidth={1} className="absolute -right-6 -bottom-6 text-white opacity-[0.03] z-0" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-8 border-b border-[#000] mb-8">
        {['Overview', 'Orders', 'Reviews'].map((tab) => {
          let Icon;
          if (tab === 'Overview') Icon = Info;
          if (tab === 'Orders') Icon = List;
          if (tab === 'Reviews') Icon = MessageSquare;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium flex items-center gap-2 transition-colors ${
                activeTab === tab 
                  ? 'text-[#FF8A00] border-b-2 border-[#FF8A00]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon size={16} />
              {tab}
            </button>
          );
        })}
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'Overview' && (
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-4">
            <h2 className="text-xs text-[#C69269] font-bold uppercase tracking-widest mb-4">Personal Identity</h2>
            
            <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Full Legal Name</p>
              <p className="text-lg">Marcus Thorne</p>
            </div>
            
            <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Address</p>
              <p className="text-lg">m.thorne@chowtap.com</p>
            </div>
            
            <div className="bg-[#131313] p-5 rounded-xl border border-[#2A2A2A]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Mobile Number</p>
              <p className="text-lg">+1 (555) 902-3482</p>
            </div>
          </div>
          
          <div className="col-span-8">
            <h2 className="text-xs text-[#C69269] font-bold uppercase tracking-widest mb-4">Operating Campus</h2>
            
            {/* Exactly replicated map section */}
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#223d38]">
              {/* Map background placeholder (mix-blend mode gives it the right tint) */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-color-dodge"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop")' }}
              ></div>
              
              {/* Dark gradient overlay matching the design */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent z-10"></div>
              
              {/* Glowing Map Pin Dot */}
              <div className="absolute top-[45%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-10 h-10 bg-[#FFB300]/20 rounded-xl flex items-center justify-center animate-pulse">
                  <div className="w-2.5 h-2.5 bg-[#FFB300] rounded-full"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-[10px] text-[#C69269] font-bold uppercase tracking-widest mb-1">McPherson University</p>
                <h3 className="text-2xl font-bold mb-1 text-white">McPherson Main Campus</h3>
                <p className="text-sm text-gray-400 flex items-center gap-1.5">
                  <MapPin size={14} className="text-gray-400" /> Ogun, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: ORDERS */}
      {activeTab === 'Orders' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-80">
              <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
              <input type="text" placeholder="Search Order ID..." className="w-full bg-[#161616] border border-[#2A2A2A] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gray-500 text-white placeholder-gray-500" />
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                <Calendar size={16} /> Last 7 Days <ChevronDown size={14} />
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                <Filter size={16} /> All Statuses <ChevronDown size={14} />
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-bold tracking-wider rounded-lg flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                <Download size={16} /> EXPORT CSV
              </button>
            </div>
          </div>

          <div className="bg-[#000000] border border-[#2A2A2A] rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs text-gray-500 uppercase bg-[#1F202080]  tracking-wider border-b border-[#2A2A2A]">
                  <th className="p-4 font-bold">Order ID</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Vendor</th>
                  <th className="p-4 font-bold">Total</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Review</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {orders.map((order, idx) => (
                  <tr key={idx} className="border-b border-[#2A2A2A] last:border-0 ">
                    <td className="p-4 font-semibold text-white">{order.id}</td>
                    <td className="p-4 text-gray-400">{order.date}</td>
                    <td className="p-4 font-medium text-white">{order.vendor}</td>
                    <td className="p-4 font-medium text-white">{order.total}</td>
                    <td className="p-4">
                      {order.status === 'DELIVERED' && <span className="px-2 py-1 text-[10px] font-bold bg-[#0A2E1F] text-[#00E676] rounded uppercase tracking-wider inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00E676]"></span>{order.status}</span>}
                      {order.status === 'REFUNDED' && <span className="px-2 py-1 text-[10px] font-bold bg-[#3A1212] text-[#FF5252] rounded uppercase tracking-wider inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FF5252]"></span>{order.status}</span>}
                      {order.status === 'PROCESSING' && <span className="px-2 py-1 text-[10px] font-bold bg-[#332200] text-[#FFB300] rounded uppercase tracking-wider inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FFB300]"></span>{order.status}</span>}
                    </td>
                    <td className="p-4 text-gray-400">{order.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <p>Showing <span className="text-white font-medium">1-5</span> of 142 orders</p>
            <div className="flex gap-1">
              <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A]"><ChevronLeft size={16} /></button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#FF8A00] text-black font-bold rounded">1</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A]">2</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A]">3</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A]">...</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A]">29</button>
              <button className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] rounded hover:bg-[#2A2A2A]"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      )}

      {/* TAB: REVIEWS */}
      {activeTab === 'Reviews' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                Sort by: <span className="text-white">Newest First</span> <ChevronDown size={14} />
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
                Rating: <span className="text-white">All Stars</span> <ChevronDown size={14} />
              </button>
            </div>
            <p className="text-sm text-[#6B7280]">Showing 48 recent verified reviews</p>
          </div>

          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-[#1F2020] border border-[#2A2A2A] rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10  text-[#FFB782] font-bold text-sm flex items-center justify-center rounded-full shrink-0">
                  {review.initials}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < review.rating ? 'text-[#FFB300] fill-[#FFB300]' : 'text-gray-600 fill-gray-600'} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Riderd;