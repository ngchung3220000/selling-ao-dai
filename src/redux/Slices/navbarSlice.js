import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    search: "",
    login: false,
    cart: false,
    order: false,
    sortBy: "",
  },
  reducers: {
    searchText: (state, action) => {
      state.search = action.payload;
    },

    login: (state, action) => {
      state.login = action.payload;
    },

    clickCart: (state, action) => {
      state.cart = action.payload;
    },

    openOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { searchText, login, clickCart, openOrder } = navbarSlice.actions;
export default navbarSlice.reducer;
