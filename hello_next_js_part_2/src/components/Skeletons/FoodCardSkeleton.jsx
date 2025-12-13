const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-200 rounded-xl"></div>

      {/* Text Skeleton */}
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-4 flex gap-3">
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
