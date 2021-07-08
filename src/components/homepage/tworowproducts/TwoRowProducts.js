import React, { useEffect, useState } from "react";
import { TwoRowProductsCard } from "./TwoRowProductsCard";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import "../sortbutton/sortbutton.css";
import {
  sortProductByHighestPrice,
  sortProductByLowestPrice,
  sortProductByNew,
  sortProductByOld,
} from "./sortProduct";

export const TwoRowProducts = () => {
  const [products, setProducts] = useState();
  const [sortOption, setSortOption] = useState("low");

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("http://localhost:3003/products/all");
      setProducts(data.data);
    }
    fetchProducts();
  }, []);

  // Keep all sorting type and function in a map here
  const sorting = {
    high: sortProductByHighestPrice,
    low: sortProductByLowestPrice,
    old: sortProductByOld,
    new: sortProductByNew,
  };

  // Keep their result here based on selected sorting Type
  const sortedProduct = sorting[sortOption];

  return (
    <React.Fragment>
      <section className="sortby-button-container">
        <Dropdown>
          <Dropdown.Toggle id="sortby">Sort products by</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={() => setSortOption("low")}>
              Price, low to high{" "}
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => setSortOption("high")}>
              Price, high to low
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => setSortOption("new")}>
              Date, new to old
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => setSortOption("old")}>
              Date, old to new
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
      {/*  */}
      <section className="row two-row-products-container">
        {products &&
          sortedProduct(products).map(
            ({ image_url, imgExtension, productName, productPrice }) => {
              return (
                <TwoRowProductsCard
                  key={image_url}
                  imageSrc={image_url}
                  imgExtension={imgExtension}
                  name={productName}
                  price={productPrice}
                />
              );
            }
          )}
      </section>
    </React.Fragment>
  );
};
