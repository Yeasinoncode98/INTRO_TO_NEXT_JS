"use client";
import ReviewCard from "@/components/Cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./Reviewloading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setloading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-600">{reviews.length} Found</span>
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <ReviewCard review={rev} key={rev.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
