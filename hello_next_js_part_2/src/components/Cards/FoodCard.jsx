"use client";

import Link from "next/link";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-xl">
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{food.title}</h3>

        <p className="text-sm text-gray-500">
          Category: <span className="font-medium">{food.category}</span>
        </p>

        <p className="text-xl font-bold text-green-600">৳ {food.price}</p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        {/* <button
          onClick={() => onAddToCart?.(food)}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition"
        >
          Add to Cart
        </button> */}

        <CartButton food={food}></CartButton>

        <Link
          href={`/foods/${food.id}`}
          className="flex-1 text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
