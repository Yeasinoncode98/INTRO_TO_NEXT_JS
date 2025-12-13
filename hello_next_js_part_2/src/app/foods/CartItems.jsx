"use client";

import { CartContext } from "@/context/CartProvider";
import React, { use, useContext } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);

  return <div>{0} Items Added</div>;
};

export default CartItems;
