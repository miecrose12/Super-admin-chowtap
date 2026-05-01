import React from 'react';
import { ChevronRight, Filter, Star } from 'lucide-react';
import { REVIEW_ANALYTICS, REVIEWS } from '../../../utils/vendorData';

const ReviewsTab = () => {
  return (
    <div className="flex gap-6 items-start">
      <ReviewSidebar />
      <ReviewsList />
    </div>
  );
};

const ReviewSidebar = () => (
  <div className="w-72 space-y-6">
    {/* Analytics Card */}
    <div className="bg-[#141414] border border-neutral-800 rounded-md p-5">
      <h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-5">Review Analytics</h3>
      <div className="space-y-3">
        {REVIEW_ANALYTICS.map(row => (
          <div key={row.star} className="flex items-center gap-3 text-sm">
            <span className="w-3 font-medium text-white text-right">{row.star}</span>
            <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div className={`h-full rounded-full bg-[#DC781B] ${row.w}`}></div>
            </div>
            <span className="w-8 text-xs text-neutral-500 text-right">{row.pct}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Refine Feed Card */}
    <div className="bg-[#141414] border border-neutral-800 rounded-md p-5">
      <h3 className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-4">Refine Feed</h3>
      <div className="space-y-4">
        <div className="relative border border-neutral-800 bg-[#1c1c1c] rounded-md px-3 py-2 text-sm flex justify-between items-center text-neutral-300">
          Sort by: Newest First <ChevronRight size={14} className="rotate-90"/>
        </div>
        <div className="relative border border-neutral-800 bg-[#1c1c1c] rounded-md px-3 py-2 text-sm flex justify-between items-center text-neutral-300">
          Rating: All Stars <Filter size={14} className="text-neutral-500"/>
        </div>
        <button className="w-full py-2.5 bg-[#DC781B] hover:bg-orange-500 text-white text-xs font-bold rounded-md tracking-wide">
          APPLY FILTERS
        </button>
      </div>
    </div>
  </div>
);

const ReviewsList = () => (
  <div className="flex-1 space-y-4">
    {REVIEWS.map((review, i) => (
      <ReviewCard key={i} review={review} />
    ))}
    
    <div className="flex justify-end pt-2">
      <button className="px-5 py-2.5 bg-[#1c1c1c] border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-bold rounded-md tracking-wide uppercase">
        Load More Reviews
      </button>
    </div>
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-[#141414] border border-neutral-800 rounded-md p-6">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#2a2a2a] text-[#DC781B] font-bold rounded-md flex items-center justify-center">
          {review.initials}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">{review.name}</span>
            <div className="flex gap-0.5">
              {Array(review.rating).fill(null).map((_, j) => (
                <Star key={j} size={12} className="fill-[#DC781B] text-[#DC781B]" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs text-neutral-500">{review.date}</span>
    </div>
    <p className="text-sm text-neutral-400 leading-relaxed ml-13 pl-13">
      {review.text}
    </p>
  </div>
);

export default ReviewsTab;