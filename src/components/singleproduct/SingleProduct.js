import React, { useEffect, useState } from "react";
import "./singleproduct.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pageUrl } from "../constants/pageurl";

import { useParams } from "react-router";
import axios from "axios";
import { GoldenLoader } from "../layouts/loader/GoldenLoader";

export const SingleProduct = () => {
  const { id } = useParams();

  const [selectedProduct, setselectedProduct] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://localhost:3003/products/all");
      const getSelectedProduct = data.data.filter(
        (product) => product.image_url === id
      );
      setselectedProduct(getSelectedProduct[0]);
    }

    fetchProducts();
  }, [id]);

  if (!selectedProduct) {
    return <GoldenLoader />;
  }

  const { image_url, imgExtension, productName, productPrice } =
    selectedProduct;
  return (
    <React.Fragment>
      {selectedProduct && (
        <section className="container single-product">
          <div className="row image-wrapper">
            <img
              src={`https://res.cloudinary.com/drk2xigke/image/upload/v1625524208/yuslovanny/${image_url}.${imgExtension.slice(
                0,
                -1
              )}`}
              alt={`${productName}-${productPrice}`}
              className="single-product-image"
              width="250"
            />
          </div>
          <div className="details">
            <h3 className="description">{productName}</h3>
            <p className="price">#{productPrice}</p>
            <section className="single-product-button-group">
              <a
                href={`https://api.whatsapp.com/send?phone=2349061610159&text=Hello, I want to make an order for the ${productName} which cost ${productPrice} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="send-order-btn">Order</Button>
              </a>
              <Link to={pageUrl.HOME_PAGE} className="continue-shopping">
                continue shopping
              </Link>
            </section>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};
