import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavBar } from "../layouts/navbar/NavBar";
import { ControlledCarousel } from "./carousel/Carousel";
import "./homepage.css";
import { SortButton } from "./sortbutton/SortButton";
import { TwoRowProducts } from "./tworowproducts/TwoRowProducts";

export const Homepage = () => {
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setisLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="homepage">
        {isLoaded ? (
          <ControlledCarousel />
        ) : (
          <div className="text-center">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        )}
        <SortButton />
        <TwoRowProducts />
      </div>
    </React.Fragment>
  );
};
