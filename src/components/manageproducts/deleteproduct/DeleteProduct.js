import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export const DeleteProduct = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_STORE_ENDPOINT}/products/all`
      );
      setProducts(data.data);
    }
    fetchProducts();
  }, []);

  const deleteSelectedProduct = (image_url, imgExtension, productName) => {
    // Confirm action
    if (!window.confirm(`${productName} will be deleted`)) {
      return;
    }

    const selectedProductID = {
      image_url,
      imgExtension: imgExtension.slice(0, -1),
    };

    axios.put(
      `${process.env.REACT_APP_STORE_ENDPOINT}/products/delete`,
      selectedProductID
    );
    // Refresh page
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <React.Fragment>
      <div className="container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(
                (
                  { productName, productPrice, image_url, imgExtension },
                  index
                ) => {
                  return (
                    <tr key={image_url}>
                      <td>{index + 1}</td>
                      <td>{productName}</td>
                      <td>{productPrice}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            deleteSelectedProduct(
                              image_url,
                              imgExtension,
                              productName
                            )
                          }
                        >
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};
