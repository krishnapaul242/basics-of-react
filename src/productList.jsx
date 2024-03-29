import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import { addToCart } from "./redux/cartSlice";
import Header from "./header";

const data = require("./mockdata.json");

const ProductList = () => {
  const [products, setProducts] = useState(data);
  const dispatch = useDispatch();
  // const fetchAndSetProducts = async () => {
  //   const response = await fetch("http://localhost:3001/");
  //   const data = await response.json();
  //   setProducts(data);
  // };
  const handleClick = ({ id, name, price }) => {
    dispatch(addToCart({ id, name, price }));
  };
  // useEffect(() => {
  //   fetchAndSetProducts();
  // }, [])
  return (
    <>
      <Header />
      <div className="flex flex-col justify-start items-stretch gap-1 px-4">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} onClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
