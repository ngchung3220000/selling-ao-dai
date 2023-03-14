import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "main",
  initialState: {},
  reducers: {
    infoProduct: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { infoProduct } = MainSlice.actions;
export default MainSlice.reducer;
