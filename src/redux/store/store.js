import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import productsSlice from "../slice/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
  },
});
