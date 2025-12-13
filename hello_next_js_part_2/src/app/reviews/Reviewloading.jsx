import ReviewCardSkeleton from "@/components/Skeletons/ReviewCardSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
