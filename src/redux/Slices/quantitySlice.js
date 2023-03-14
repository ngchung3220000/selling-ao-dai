import { createSlice } from "@reduxjs/toolkit";

const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    product: {},
    quantity: 0,
  },
  reducers: {
    productItem: (state, action) => {
      state.product = action.payload;
    },
    quantityItem: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { productItem, quantityItem } = quantitySlice.actions;
export default quantitySlice.reducer;
