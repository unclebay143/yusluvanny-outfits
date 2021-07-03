import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import tshirt from "./../../../assets/t-shirt.jpg";
import belt from "./../../../assets/belt.jpg";
import watch from "./../../../assets/watch.jpg";

import "./carousel.css";

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      image: belt,
    },
    {
      image: watch,
    },
    {
      image: tshirt,
    },
  ];

  return (
    <React.Fragment>
      <section className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data?.map((slide, index) => {
            return (
              <Carousel.Item className="image-item">
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </React.Fragment>
  );
};
