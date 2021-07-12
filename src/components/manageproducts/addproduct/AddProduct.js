import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pageUrl } from "../../constants/pageurl";

import "./addproduct.css";

export const AddProduct = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [convertedImage, setConvertedImage] = useState(null);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleProductNameChange = (e) => {
    const { value } = e.target;
    setproductName(value);
  };

  const handleProductPriceChange = (e) => {
    const { value } = e.target;
    setproductPrice(value);
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => {
      // set image data url
      setConvertedImage(reader.result);
    };
    reader.onerror = () => {
      console.error("something went wrong!");
    };
  };

  const handleSubmit = async (e) => {
    //
    e.preventDefault();

    // const reader = new FileReader();
    // productImage !== null && reader.readAsDataURL(productImage);

    // reader.onloadend = () => {
    //   //   console.log(reader.result);
    //   setConvertedImage(reader.result);
    // };
    // reader.onerror = () => {
    //   console.error("something went wrong!");
    // };

    const newProductDetails = {
      productName,
      productPrice,
    };

    const data = new FormData();
    console.log(convertedImage);
    data.append("file", convertedImage);
    data.append("data", JSON.stringify(newProductDetails));

    try {
      console.log(convertedImage);

      if (convertedImage) {
        setLoading(true);
        const res = await axios.post(
          `${process.env.REACT_APP_STORE_ENDPOINT}/products/upload`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(res);
        setMessage("Product Added Successfully");
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage("Add again");
      }
    } catch (error) {
      console.error(error);
      setError("Upload your image again");

      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      {message && (
        <p className="text-center bg-success text-white mb-4">{message}</p>
      )}
      {error && (
        <p className="text-center bg-danger text-white mb-4">{error}</p>
      )}
      <div className="add-product-container container">
        <h1 className="mb-3">New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-product-input-wrapper d-flex flex-column mb-3">
            <label className="mb-2">Product Name</label>
            <input
              required
              name="productName"
              type="text"
              placeholder="Enter Product name"
              className="add-product--input p-2"
              onChange={handleProductNameChange}
            />
          </div>
          <div className="add-product-input-wrapper d-flex flex-column mb-3">
            <label className="mb-2">Product Price</label>
            <input
              required
              name="productPrice"
              type="number"
              placeholder="Enter Product Price"
              className="add-product--input p-2"
              onChange={handleProductPriceChange}
            />
          </div>
          <div className="add-product-input-wrapper d-flex flex-column mb-3">
            <label className="mb-2">Select Product Image</label>
            <input
              required
              type="file"
              name="file"
              onChange={handleFileChange}
            />
          </div>

          <div className="d-flex align-items-center gap-1 mt-4">
            <input required id="confirm-form" type="checkbox" />
            <label htmlFor="confirm-form">
              Confirm details before submitting
            </label>
          </div>
          <div className="add-product-input-wrapper d-flex flex-column mb-3">
            <button type="submit" className="add-product-btn p-2 mt-2">
              {loading ? "Adding" : "Submit"}
            </button>
          </div>
          <div className="mb-5 d-flex justify-content-between">
            <a href={`/#${pageUrl.HOME_PAGE}`}>Back to store</a>
            <a href={`/#${pageUrl.DELETE_PRODUCT}`} className="text-danger">
              Delete Product
            </a>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
