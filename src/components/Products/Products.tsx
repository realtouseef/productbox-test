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
        {items?.map(({ id, name, img, price }) => {
          return (
            <SingleProduct
              key={id}
              id={id}
              name={name}
              img={img}
              price={price}
            />
          );
        })}
      </main>
    </>
  );
};

export default Products;
