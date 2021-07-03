import React, { useEffect, useState } from "react";
import { TwoRowProductsCard } from "./TwoRowProductsCard";
import tshirt from "./../../../assets/t-shirt.jpg";
import belt from "./../../../assets/belt.jpg";
import watch from "./../../../assets/watch.jpg";
import axios from "axios";

export const TwoRowProducts = () => {
  const [fakeProducts, setfakePproducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setfakePproducts(response.data);
    }

    fetchProducts();
  }, []);

  console.log(fakeProducts);

  // const products = [
  //   {
  //     imageSrc: tshirt,
  //     name: "Timber land",
  //     price: "10, 000",
  //   },

  // ];

  return (
    <React.Fragment>
      <section className="row two-row-products-container">
        {fakeProducts
          ?.sort((a, b) => a.price - b.price)
          .map(({ image, category, price, id }) => {
            return (
              <TwoRowProductsCard
                key={id}
                imageSrc={image}
                name={category}
                price={price}
              />
            );
          })}
      </section>
    </React.Fragment>
  );
};
