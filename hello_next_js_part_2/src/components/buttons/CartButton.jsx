"use client";

import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({ food }) => {
  const [incart, setIncart] = useState(false);

  const { addToCart } = use(CartContext);

  const handleadd2cart = () => {
    addToCart(food);
    setIncart(true);
  };

  return (
    <button
      onClick={handleadd2cart}
      disabled={incart}
      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:text-gray-400"
    >
      {incart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default CartButton;
