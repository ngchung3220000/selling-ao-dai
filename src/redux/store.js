import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./Slices/navbarSlice";
import cartSlice from "./Slices/cartSlice";
import mainSlice from "./Slices/mainSlice";
import quantitySlice from "./Slices/quantitySlice";

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    cart: cartSlice,
    main: mainSlice,
    quantity: quantitySlice,
  },
});
