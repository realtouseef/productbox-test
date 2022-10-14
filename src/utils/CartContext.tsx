import { ChildrenProps } from "@/types/types";
import { createContext, useState } from "react";

export const Cart = createContext({});

export const CartContext = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState([]);

  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};
