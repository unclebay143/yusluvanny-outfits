// Product sorting functions

export const sortProductByLowestPrice = (products) => {
  return (
    products && [...products].sort((a, b) => a.productPrice - b.productPrice)
  );
};

export const sortProductByHighestPrice = (products) => {
  return (
    products && [...products].sort((a, b) => b.productPrice - a.productPrice)
  );
};

export const sortProductByNew = (products) => {
  return (
    products &&
    [...products].sort((a, b) => b.__createdtime__ - a.__createdtime__)
  );
};

export const sortProductByOld = (products) => {
  return (
    products &&
    [...products].sort((a, b) => a.__createdtime__ - b.__createdtime__)
  );
};
