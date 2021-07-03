import React from "react";
import "./singleproduct.css";
import dummyImage from "./../../assets/t-shirt.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pageUrl } from "../constants/pageurl";

export const SingleProduct = () => {
  const data = {
    title: "Men's T-shirt",
    price: "5000",
  };

  const { title, price } = data;
  return (
    <React.Fragment>
      <section className="container single-product">
        <div className="row">
          <img src={dummyImage} alt="smek" className="single-product-image" />
        </div>
        <div className="details">
          <h3 className="description">{title}</h3>
          <p className="price">#{price}</p>
          <section className="single-product-button-group">
            <a
              href={`https://api.whatsapp.com/send?phone=2349061610159&text=Hello, I want to make an order for the ${title} which cost ${price} `}
            >
              <Button className="send-order-btn">Order</Button>
            </a>
            <Link to={pageUrl.HOME_PAGE} className="continue-shopping">
              continue shopping
            </Link>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};
