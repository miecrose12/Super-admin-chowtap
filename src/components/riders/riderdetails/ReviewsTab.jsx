import React, { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { allReviews, filterAndSortReviews, paginateData, getTotalPages, ITEMS_PER_PAGE } from '../../../utils/RiderDetailsUtils';
import ReviewCard from './ReviewsCard';
import PaginationControls from './PaginationControls';


const ReviewsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewSort, setReviewSort] = useState('Newest First');
  const [reviewRating, setReviewRating] = useState('All Stars');

  const filteredReviews = useMemo(() => {
    return filterAndSortReviews(allReviews, reviewRating, reviewSort);
  }, [reviewRating, reviewSort]);

  const paginatedReviews = paginateData(filteredReviews, currentPage);
  const totalPages = getTotalPages(filteredReviews.length);

  return (
    <div>
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
            Sort by: <span className="text-white">{reviewSort}</span> <ChevronDown size={14} />
          </button>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#2A2A2A] text-sm font-medium rounded-lg text-gray-300 flex items-center gap-2 hover:bg-[#2A2A2A] transition">
            Rating: <span className="text-white">{reviewRating}</span> <ChevronDown size={14} />
          </button>
        </div>
        <p className="text-sm text-[#6B7280]">
          Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredReviews.length)}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredReviews.length)} of {filteredReviews.length} reviews
        </p>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {paginatedReviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            initials={review.initials}
            name={review.name}
            date={review.date}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>

      {/* Pagination */}
      <PaginationControls 
        currentPage={currentPage}
        totalItems={filteredReviews.length}
        onPageChange={setCurrentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default ReviewsTab;