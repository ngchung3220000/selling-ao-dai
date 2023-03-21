import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "main",
  initialState: {},
  reducers: {
    infoProduct: (state, action) => {
      const item = { ...action.payload, quantity: 1 };
      return (state = item);
    },
  },
});

export const { infoProduct } = MainSlice.actions;
export default MainSlice.reducer;
