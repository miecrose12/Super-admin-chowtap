import React from 'react';
import { ArrowLeft } from 'lucide-react';

const UserHeader = ({ user, onBack }) => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="h-12 w-12 flex items-center justify-center border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-orange-500 transition-all duration-200 bg-[#181818] group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:translate-x-[-2px] transition-transform" />
        </button>
        
        <div className="flex flex-col justify-center ml-2">
          <h1 className="text-2xl font-semibold mb-1">Sarah Jane</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#e07a3e]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              sarahjane@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#e07a3e]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              McPherson University
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#252525] border border-gray-700 hover:bg-[#303030] rounded-lg text-sm font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Manage Funds
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#db3535] hover:bg-[#eb4545] rounded-lg text-sm font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Freeze Account
        </button>
      </div>
    </div>
  );
};

export default UserHeader;