// shows every products/items

import SingleProduct from "@/components/SingleProduct";
import { SingleProductProps } from "@/types/types";
import { Cart } from "@/utils/CartContext";
import { useContext } from "react";

const basket = () => {
  const { cart } = useContext(Cart);

  return (
    <>
      <section>
        {cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <section>
            {cart.map(({ id, name, price, img }: SingleProductProps) => {
              return (
                <SingleProduct
                  id={id}
                  name={name}
                  price={price}
                  img={img}
                  key={id}
                />
              );
            })}
          </section>
        )}
      </section>
    </>
  );
};

export default basket;
