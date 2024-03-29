import React from "react";

const ProductItem = ({ id, name, price, onClick }) => {
  return (
      <div className="flex flex-row justify-start items-center gap-4 p-2">
        <div className="text-lg w-1/2 font-semibold">{name}</div>
        <div className="text-lg w-1/4 font-semibold">{price}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onClick({ id, name, price })}
        >
          Add to cart
        </button>
    </div>
  );
};

export default ProductItem;
