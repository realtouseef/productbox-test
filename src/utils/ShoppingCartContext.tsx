import { ChildrenProps } from "@/types/types";
import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "src/hooks/useLocalStorage";

type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartItemsQuantity: number;
  cartItem: CartItemProps[];
};

// add item to the cart

export type CartItemProps = {
  id: number;
  quantity: number;
};

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCardProvider = ({ children }: ChildrenProps) => {
  const [cartItem, setCartItem] = useLocalStorage<CartItemProps[]>(
    "shopping-cart",
    []
  );

  const cartItemsQuantity = cartItem?.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  function increaseCartQuantity(id: number) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const getItemQuantity = (id: number) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const removeItem = (id: number) => {
    setCartItem((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        removeItem,
        cartItemsQuantity,
        cartItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
