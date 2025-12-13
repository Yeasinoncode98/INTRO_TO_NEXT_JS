"use client";

import React, { useState } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

const ReviewCard = ({ review, loading }) => {
  if (loading) {
    // Skeleton loader
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        <div className="h-16 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-12"></div>
          </div>
          <div className="w-12 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const { user, photo, rating, review: text, likes, date } = review;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-gray-400 text-sm">{formattedDate}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={18}
            className={`${
              i < rating ? "text-yellow-500" : "text-gray-300"
            } mr-1`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-4">{text}</p>

      {/* Likes & Like Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>{likeCount} Likes</span>
          {likes.length > 0 && (
            <div className="flex -space-x-2">
              {likes.map((likeEmail, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-700 border border-white"
                  title={likeEmail}
                >
                  {likeEmail.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleLike}
          className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
        >
          {liked ? <FaHeart /> : <FaRegHeart />} Like
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
