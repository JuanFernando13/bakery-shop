import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../features/cart/amountReducer";
import productReducer from "../features/cart/productReducer";

export const store = configureStore({
  reducer: {
    amount: amountReducer,
    product: productReducer
  }
})