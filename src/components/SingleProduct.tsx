import { SingleProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const SingleProduct = ({ id, name, img, price }: SingleProductProps) => {
  return (
    <div className="px-6">
      <Image src={img} alt={name} width="300" height="300" />
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>$ {price}</p>
      </div>
      {/* {cart.includes(items) ? ( */}
      <button
        // onClick={() => setCart(cart.filter((c: string) => c.id !== items.id))}
        className="w-full bg-red-200 hover:bg-red-300 py-2 mt-2 font-bold"
      >
        Remove from cart{" "}
      </button>
      {/* ) : ( */}
      <button
        // onClick={() => setCart([...cart], items)}
        className="w-full bg-blue-200 hover:bg-blue-300 py-2 mt-2 font-bold "
      >
        Add to cart{" "}
      </button>
      {/* )} */}
    </div>
  );
};

export default SingleProduct;
