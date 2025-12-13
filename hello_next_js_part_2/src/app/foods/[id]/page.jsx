import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.details;
};

export default async function Page({ params }) {
  if (!params?.id) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-600">Invalid Food ID</h2>
      </div>
    );
  }

  const food = await getSingleFood(params.id);

  if (!food) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-600">
          Food is not available
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-96 object-cover rounded-2xl shadow"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{food.title}</h1>

          <p className="text-gray-500 text-lg">
            Category: <span className="font-medium">{food.category}</span>
          </p>

          <p className="text-3xl font-bold text-green-600">৳ {food.price}</p>

          <div className="flex gap-4 pt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition">
              Add to Cart
            </button>

            <button className="border border-gray-300 hover:border-gray-500 px-6 py-3 rounded-xl transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
