import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./redux/counterSlice";
import { cartReducer } from "./redux/cartSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
