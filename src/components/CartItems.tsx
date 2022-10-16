import { CartItemProps, useShoppingCart } from "@/utils/ShoppingCartContext";
import { items } from "data/items";
import Image from "next/image";

const CartItems = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <>
      <div className="p-6 max-w-md mx-auto ">
        <Image
          src={item?.img as string}
          alt={item?.name}
          width="400"
          height="400"
        />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">{item?.name}</h2>
          <p>$ {item?.price}</p>
        </div>
        <button
          onClick={() => removeItem(id)}
          className="w-full bg-red-200 hover:bg-red-300 py-2 mt-2 font-bold"
        >
          Remove from Cart
        </button>
      </div>
    </>
  );
};

export default CartItems;
