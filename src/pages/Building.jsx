import React, { useState } from 'react';
import { Search, Filter, Building2, Network, ShieldCheck, X } from 'lucide-react';

const initialData = [
  { id: '#B-8801', name: 'FACULTY OF ARTS', loc1: 'University Way, East', loc2: 'Wing', lon: '3.3958° E', lat: '6.5244° N', status: true },
  { id: '#B-8802', name: 'MOREMI HALL', loc1: 'Main Campus Circle', loc2: '', lon: '3.3982° E', lat: '6.5221° N', status: true },
  { id: '#B-8803', name: 'NORTH FOOD', loc1: 'Utility Block B, Grd Floor', loc2: '', lon: '3.3941° E', lat: '6.5268° N', status: false },
  { id: '#B-8804', name: 'CENTRAL LIBRARY', loc1: 'Library Square, Central', loc2: '', lon: '3.3970° E', lat: '6.5240° N', status: true },
  { id: '#B-8805', name: 'INNOVATION HUB', loc1: 'Science Park Rd, Plot 4', loc2: '', lon: '3.3912° E', lat: '6.5295° N', status: true },
];

export default function BuildingsManagement() {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleToggle = (id) => {
    setData(prev => prev.map(item => item.id === id ? { ...item, status: !item.status } : item));
  };

  return (
    <div className="h-screen w-full bg-[#0E0E0E] text-white p-6 font-sans flex flex-col overflow-hidden relative">
      
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-6 shrink-0">
        <h1 className="text-2xl font-bold tracking-wide">Buildings Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#db7a26] hover:bg-[#c46a1f] text-black font-bold py-2 px-6 rounded text-sm transition-colors cursor-pointer"
        >
          Add Building
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 shrink-0">
        <div className="bg-[#131313] p-5 rounded border border-white/5 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <Building2 className="text-[#db7a26] w-6 h-6" strokeWidth={1.5} />
            <span className="text-[#db7a26] text-xs font-semibold">+4.2%</span>
          </div>
          <p className="text-neutral-500 text-[10px] font-bold tracking-wider mb-1">TOTAL BUILDINGS</p>
          <p className="text-4xl font-bold">124</p>
        </div>
        <div className="bg-[#151515] p-5 rounded border border-white/5">
          <div className="flex justify-between items-start mb-4">
            <Network className="text-[#db7a26] w-6 h-6" strokeWidth={1.5} />
            <span className="text-emerald-500 text-xs font-semibold">STABLE</span>
          </div>
          <p className="text-neutral-500 text-[10px] font-bold tracking-wider mb-1">ACTIVE HUBS</p>
          <p className="text-4xl font-bold">86</p>
        </div>
        <div className="bg-[#151515] p-5 rounded border border-white/5">
          <div className="flex justify-between items-start mb-4">
            <ShieldCheck className="text-[#db7a26] w-6 h-6" strokeWidth={1.5} />
            <span className="text-[#db7a26] text-xs font-semibold">PENDING</span>
          </div>
          <p className="text-neutral-500 text-[10px] font-bold tracking-wider mb-1">PENDING VERIFICATION</p>
          <p className="text-4xl font-bold">09</p>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-[#151515] rounded border border-white/5 flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input type="text" placeholder="FILTER BUILDINGS..." className="bg-[#0a0a0a] border border-white/5 text-xs text-white rounded pl-10 pr-4 py-2.5 w-64 focus:outline-none" />
            </div>
            <button className="bg-[#222] p-2.5 rounded border border-white/5"><Filter className="w-4 h-4 text-neutral-400" /></button>
          </div>
          <div className="text-neutral-500 text-[10px] font-bold tracking-wider">DISPLAYING: 5 OF 124</div>
        </div>

        <div className="flex-1 overflow-hidden">
          <table className="w-full text-left border-collapse h-full">
            <thead className="bg-[#1a1a1a] border-b border-white/5">
              <tr className="text-[#db7a26] text-[10px] font-bold tracking-wider">
                <th className="py-4 px-6">REF ID</th>
                <th className="py-4 px-6">BUILDING NAME</th>
                <th className="py-4 px-6">LOCATION</th>
                <th className="py-4 px-6">LONGITUDE</th>
                <th className="py-4 px-6">LATITUDE</th>
                <th className="py-4 px-6">STATUS</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentData.map((row) => (
                <tr key={row.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-4 px-6 text-neutral-400">{row.id}</td>
                  <td className="py-4 px-6 font-semibold">{row.name}</td>
                  <td className="py-4 px-6 text-neutral-400 text-xs">{row.loc1}</td>
                  <td className="py-4 px-6 text-neutral-400 text-xs">{row.lon}</td>
                  <td className="py-4 px-6 text-neutral-400 text-xs">{row.lat}</td>
                  <td className="py-4 px-6">
                    <button 
                      onClick={() => handleToggle(row.id)}
                      className={`w-9 h-5 rounded-full p-0.5 flex items-center transition-colors ${row.status ? 'bg-[#3d2516]' : 'bg-[#2a2a2a]'}`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-transform ${row.status ? 'bg-[#db7a26] translate-x-4' : 'bg-neutral-500 translate-x-0'}`} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-white/5 bg-[#0a0a0a]">
          <div className="flex items-center gap-2 text-xs">
            <button className="bg-[#1a1a1a] text-neutral-400 px-4 py-2 rounded">PREVIOUS</button>
            <button className="bg-[#db7a26] text-black font-bold w-8 h-8 rounded">1</button>
            <button className="bg-[#1a1a1a] text-neutral-400 px-4 py-2 rounded">NEXT</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-neutral-500 font-bold uppercase">Go to page:</span>
            <input type="text" defaultValue="1" className="bg-[#1a1a1a] border border-white/5 rounded w-10 h-8 text-center text-xs" />
          </div>
        </div>
      </div>

      {/* ADD BUILDING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-[#151515] w-full max-w-md p-8 rounded shadow-2xl border border-white/5 flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
              <X size={20} />
            </button>

            <header className="text-center mb-8">
              <p className="text-[#db7a26] text-[10px] font-bold tracking-[0.2em] mb-2 uppercase">Configuration</p>
              <h2 className="text-3xl font-bold">Add New Building</h2>
            </header>

            <form className="space-y-6">
              <div>
                <label className="block text-neutral-500 text-[10px] font-bold tracking-wider mb-2 uppercase">Building Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Apex Logistics Center" 
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded p-4 text-sm focus:outline-none focus:border-[#db7a26]/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-500 text-[10px] font-bold tracking-wider mb-2 uppercase">Latitude</label>
                  <input 
                    type="text" 
                    placeholder="00.000000" 
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded p-4 text-sm focus:outline-none focus:border-[#db7a26]/50"
                  />
                </div>
                <div>
                  <label className="block text-neutral-500 text-[10px] font-bold tracking-wider mb-2 uppercase">Longitude</label>
                  <input 
                    type="text" 
                    placeholder="00.000000" 
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded p-4 text-sm focus:outline-none focus:border-[#db7a26]/50"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="button"
                  className="w-full bg-[#db7a26] hover:bg-[#c46a1f] text-black font-bold py-4 rounded text-sm uppercase tracking-widest transition-colors shadow-lg shadow-[#db7a26]/10"
                >
                  Add Building
                </button>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full mt-6 text-neutral-500 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors"
                >
                  Cancel Action
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}