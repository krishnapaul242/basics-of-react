import React from "react";

const QuantityInputBox = ({ quantity, onChange }) => {
  const handleQuantityChange = (e) => {
    const parsedValue = parseInt(e.target.value);
    const newQuantity = Number.isNaN(parsedValue) ? 0 : parsedValue;
    console.log("New Quantity: ", newQuantity, parsedValue);
    onChange(newQuantity);
  };
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    onChange(newQuantity);
  };
  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    onChange(newQuantity);
  };
  return (
    <div className="flex flex-row justify-center items-stretch">
      <div
        className="flex flex-1 flex-row justify-center items-center shadow-sm border-2 rounded-l cursor-pointer"
        onClick={handleIncrement}
      >
        +
      </div>
      <input
        className="flex flex-1 flex-row justify-center items-center outline-none px-2 min-w-0 text-center"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <div
        className="flex flex-1 flex-row justify-center items-center shadow-sm border-2 rounded-r cursor-pointer"
        onClick={handleDecrement}
      >
        -
      </div>
    </div>
  );
};

export default QuantityInputBox;
