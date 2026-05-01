import React from 'react';
import { Check } from 'lucide-react';

export const CustomCheckbox = ({ checked, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-[18px] h-[18px] rounded flex items-center justify-center transition-colors border ${
      checked ? 'bg-[#DC781B] border-[#DC781B]' : 'border-[#4a4a4a] bg-transparent hover:border-[#6B7280]'
    }`}
  >
    {checked && <Check size={14} className="text-[#0b0b0b] stroke-[3]" />}
  </button>
);