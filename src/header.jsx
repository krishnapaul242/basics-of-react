import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "./redux/cartSlice";
import CartItem from "./CartItem";
import { SampleAsyncThunk } from "./sampleAsyncTask";

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [collapsed, toggleCollapsed] = useReducer((state) => !state, true);
  const totalProductCount = cartData.length;
  const totalPrice = cartData.reduce(
    (totalPrice, currentItem) =>
      totalPrice + currentItem.price * currentItem.quantity,
    0
  );
  const totalItemCount = cartData // Array<ProductItem>
    .map((cartItem) => cartItem.quantity) // Array<number>
    .reduce((totalItems, currentItem) => totalItems + currentItem, 0); // [1, 2, 3, 4, 5, 6]
  const handleClearCartClick = () => {
    dispatch(clearCart());
  };
  const handleRemoveCartClick = ({ id }) => {
    dispatch(removeFromCart({ id }));
  };
  const handleCheckoutClick = () => {
    dispatch(SampleAsyncThunk({time: 5, taskName: "Test Task"}))
  }
  const handleQuantityChange = (id) => (quantity) => {
    if (quantity === 0 || quantity < 0) {
      dispatch(removeFromCart({ id }));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };
  return (
    <div className="sticky top-0">
      <div className="bg-sky-300 flex flex-row justify-start items-center gap-4 p-4">
        Cart:
        <span>{totalProductCount} product(s)</span>
        <span>{totalItemCount} item(s)</span>
        <span>Amount: {totalPrice}</span>
        <span className="flex-grow"></span>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleClearCartClick}
        >
          Clear Cart
        </button>
        <button
          className="bg-gray-400 text-gray-800 py-2 px-4 rounded"
          onClick={toggleCollapsed}
        >
          {collapsed ? "Show Cart Items" : "Hide Cart Items"}
        </button>
        <button
          className="bg-green-800 text-white py-2 px-4 rounded"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>
      {!collapsed && (
        <div className="p-4 mb-4 bg-white border-b-2">
          {totalProductCount === 0 && (
            <div className="text-center text-sm text-gray-700">
              Please add some products in cart to checkout.
            </div>
          )}
          {cartData.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemoveCartClick}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
