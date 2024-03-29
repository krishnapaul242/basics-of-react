import React from "react";
import QuantityInputBox from "./QuantityInputBox";

const CartItem = ({ id, name, price, quantity, onRemove, onQuantityChange }) => {
    const handleQuantityChange = onQuantityChange(id)
  return (
    <div className="flex flex-row justify-start items-center gap-4 p-2">
      <div className="text-lg w-2/5 font-semibold">{name}</div>
      <div className="text-lg w-1/5 font-semibold">{price}</div>
      <div className="text-lg w-1/8 font-semibold">
        <QuantityInputBox quantity={quantity} onChange={handleQuantityChange} />
      </div>
      <span className="flex-grow" />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onRemove({ id })}
      >
        Remove from cart
      </button>
    </div>
  );
};

export default CartItem;
