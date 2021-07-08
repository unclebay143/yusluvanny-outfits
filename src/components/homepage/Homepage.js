import React, { useEffect, useState } from "react";
import { ControlledCarousel } from "./carousel/Carousel";
import "./homepage.css";
import { TwoRowProducts } from "./tworowproducts/TwoRowProducts";
import { GoldenLoader } from "./../layouts/loader/GoldenLoader";

export const Homepage = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setisLoading(false);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  // if (isLoading) {
  //   return <GoldenLoader />;
  // }

  return (
    <React.Fragment>
      <div className="homepage">
        <ControlledCarousel />
        <TwoRowProducts />
      </div>
    </React.Fragment>
  );
};
