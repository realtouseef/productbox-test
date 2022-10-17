import Head from "next/head";
import { useShoppingCart } from "@/utils/ShoppingCartContext";
import CartItems from "@/components/CartItems";

const basket: React.FunctionComponent = () => {
  const { cartItem, cartItemsQuantity } = useShoppingCart();

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <p className="text-xl font-semibold">
        Total Items: {cartItemsQuantity && cartItemsQuantity}
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
