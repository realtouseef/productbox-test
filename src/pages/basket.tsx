import Head from "next/head";
import { useEffect, useState } from "react";
import { useShoppingCart } from "@/utils/ShoppingCartContext";
import CartItems from "@/components/CartItems";

const basket = () => {
  const [totalPrice, setTotalPrice] = useState<number>();
  const { cartItem, cartItemsQuantity } = useShoppingCart();

  // allItems + item.price * quantity
  console.log(cartItemsQuantity);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <h1 className="text-3xl font-bold">Total: Rs.{totalPrice}</h1>
      <p className="text-xl font-bold">
        {/* Total Items: {cartItemsQuantity && cartItemsQuantity} */}
      </p>
      <div>
        {cartItemsQuantity === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {cartItem?.map((item) => {
              return <CartItems {...item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default basket;
