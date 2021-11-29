import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../features/cart/amountReducer";

export const store = configureStore({
  reducer: {
    amount: amountReducer
  }
})