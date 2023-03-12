import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./Slices/navbarSlice";
import cartSlice from "./Slices/cartSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    cart: cartSlice,
  },
});
