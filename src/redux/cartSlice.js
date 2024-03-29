import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {number} quantity
 * @property {number} price
 */

const cartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (state, action) => {
      const { id, ...details } = action.payload;
      const itemIndexInCart = state.findIndex((item) => item.id === id);
      if (itemIndexInCart > -1) {
        state[itemIndexInCart].quantity += 1;
      } else {
        state.push({ id, quantity: 1, ...details });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndexInCart = state.findIndex((item) => item.id === id);
      if (itemIndexInCart > -1) {
        state[itemIndexInCart].quantity  = quantity;
      }
    },
    clearCart: () => {
      return cartState;
    }
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions
export const cartReducer = cartSlice.reducer
