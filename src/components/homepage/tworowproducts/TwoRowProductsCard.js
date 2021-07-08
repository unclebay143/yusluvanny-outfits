import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pageUrl } from "../../constants/pageurl";
import "./tworowproductscard.css";

export const TwoRowProductsCard = ({
  url,
  imageSrc,
  imgExtension,
  price,
  name,
}) => {
  return (
    <React.Fragment>
      <div
        className="col-4 col-lg-2 two-row-products-wrapper"
        data-aos="fade-up"
      >
        {imageSrc !== "" && (
          <Link to={`${pageUrl.VIEW_PRODUCT}/${imageSrc}`}>
            <section className="two-row-products-card">
              <div className="two-row-product-image">
                <img
                  src={`https://res.cloudinary.com/drk2xigke/image/upload/v1625524208/yuslovanny/${imageSrc}.${imgExtension.slice(
                    0,
                    -1
                  )}`}
                  // src={`${process.env.CLOUDINARY_IMAGE_URL}${imageSrc}.png`}

                  alt="two row products"
                  className="img-fluid"
                />
              </div>
              <div className="two-row-product-title">
                <p>{name}</p>
                <span>#{price}</span>
                <Button className="buy-btn">
                  <FontAwesomeIcon icon={faCartArrowDown} /> Buy
                </Button>
              </div>
            </section>
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};
