import React from "react";
import { TwoRowProductsCard } from "./TwoRowProductsCard";
import tshirt from "./../../../assets/t-shirt.jpg";
import belt from "./../../../assets/belt.jpg";
import watch from "./../../../assets/watch.jpg";

export const TwoRowProducts = () => {
  const products = [
    {
      imageSrc: tshirt,
      name: "Timber land",
      price: "10, 000",
    },
    {
      imageSrc: belt,
      name: "Coconut sea",
      price: "5, 000",
    },
    {
      imageSrc: tshirt,
      name: "Gucci",
      price: "3, 500",
    },
    {
      imageSrc: watch,
      name: "Gucci",
      price: "3, 500",
    },
    {
      imageSrc: belt,
      name: "Gucci",
      price: "3, 500",
    },
    {
      imageSrc: watch,
      name: "Gucci",
      price: "3, 500",
    },
  ];

  return (
    <React.Fragment>
      <section className="row two-row-products-container">
        {products?.map(({ imageSrc, name, price }, index) => {
          return (
            <TwoRowProductsCard
              key={index}
              imageSrc={imageSrc}
              name={name}
              price={price}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
};
