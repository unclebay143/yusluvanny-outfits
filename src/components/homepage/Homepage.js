import React from "react";
import { NavBar } from "../layouts/navbar/NavBar";
import { ControlledCarousel } from "./carousel/Carousel";
import "./homepage.css";
import { SortButton } from "./sortbutton/SortButton";
import { TwoRowProducts } from "./tworowproducts/TwoRowProducts";

export const Homepage = () => {
  return (
    <React.Fragment>
      <div className="">
        <NavBar />
        <ControlledCarousel />
        <SortButton />
        <TwoRowProducts />
      </div>
    </React.Fragment>
  );
};
