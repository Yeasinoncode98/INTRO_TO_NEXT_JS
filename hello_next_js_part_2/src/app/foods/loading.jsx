import FoodCardSkeleton from "@/components/Skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid my-5 grid-cols-3 gap-5">
      {[...Array(12)].map((_, index) => (
        <FoodCardSkeleton key={index}></FoodCardSkeleton>
      ))}
    </div>
  );
};

export default loading;
