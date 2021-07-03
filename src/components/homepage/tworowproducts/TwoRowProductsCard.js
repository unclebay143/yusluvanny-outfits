import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tworowproductscard.css";

export const TwoRowProductsCard = ({ url, imageSrc, price, name }) => {
  return (
    <React.Fragment>
      <div className="col-4 col-lg-2 two-row-products-wrapper">
        <Link to="/">
          <section className="two-row-products-card">
            <div className="two-row-product-image">
              <img
                src={imageSrc}
                alt="two row products"
                className="img-fluid"
              />
            </div>
            <div className="two-row-product-title">
              <p>{name}</p>
              <span>#{price}</span>
              <Button className="buy-btn">Buy</Button>
            </div>
          </section>
        </Link>
      </div>
    </React.Fragment>
  );
};
