import { SingleProductProps } from "@/types/types";
import { useShoppingCart } from "@/utils/ShoppingCartContext";
import Image from "next/image";

const SingleProduct = ({ id, name, img, price }: SingleProductProps) => {
  const { getItemQuantity, increaseCartQuantity, removeItem } =
    useShoppingCart();

  return (
    <div className="px-6">
      <Image src={img} alt={name} width="300" height="300" />
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>$ {price}</p>
      </div>

      {getItemQuantity(id) === 0 ? (
        <button
          onClick={() => increaseCartQuantity(id)}
          className="w-full bg-blue-200 hover:bg-blue-300 py-2 mt-2 font-bold "
        >
          Add to cart{" "}
        </button>
      ) : (
        <button
          onClick={() => removeItem(id)}
          className="w-full bg-red-200 hover:bg-red-300 py-2 mt-2 font-bold"
        >
          Remove from cart{" "}
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
