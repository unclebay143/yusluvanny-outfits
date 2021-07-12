import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "./../../../assets/carousel-1.jpg";
import carouselImage2 from "./../../../assets/carousel-2.jpg";
import carouselImage3 from "./../../../assets/carousel-3.jpg";
import "./carousel.css";

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      image: carouselImage1,
    },
    {
      image: carouselImage2,
    },
    {
      image: carouselImage3,
    },
  ];

  return (
    <React.Fragment>
      <section className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data?.map((slide, index) => {
            return (
              <Carousel.Item key={index} className="image-item">
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
