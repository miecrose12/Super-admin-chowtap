import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ initials, name, date, rating, text }) => {
  return (
    <div className="bg-[#1F2020] border border-[#2A2A2A] rounded-xl p-6 flex gap-4">
      <div className="w-10 h-10 text-[#FFB782] font-bold text-sm flex items-center justify-center rounded-full shrink-0 bg-[#2A2A2A]">
        {initials}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-semibold text-white">{name}</h4>
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < rating ? 'text-[#FFB300] fill-[#FFB300]' : 'text-gray-600 fill-gray-600'} 
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;