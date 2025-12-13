"use client";

import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-1/4" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
        ))}
      </div>

      {/* Review Text */}
      <div className="h-16 bg-gray-200 rounded mb-4"></div>

      {/* Likes & Like Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-3 bg-gray-200 rounded w-12"></div>
        </div>
        <div className="w-12 h-6 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
