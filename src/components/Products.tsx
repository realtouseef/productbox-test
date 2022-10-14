import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [items, setItems] = useState<[]>([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <main className="grid grid-cols-2 lg:grid-cols-4 place-items-center my-20 gap-10 ">
        {items?.map(({ id, name, price, img }) => {
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
      </main>
    </>
  );
};

export default Products;
