import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    search: "",
    login: false,
    cart: false,
    request: false,
    price: 0,
  },
  reducers: {
    searchText: (state, action) => {
      state.search = action.payload;
    },

    toggleLogin: (state, action) => {
      state.login = action.payload;
    },

    toggleCartIcon: (state, action) => {
      state.cart = action.payload;
    },

    toggleRequest: (state, action) => {
      state.order = action.payload;
    },

    priceCartIcon: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  searchText,
  toggleLogin,
  toggleCartIcon,
  toggleRequest,
  priceCartIcon,
} = navbarSlice.actions;
export default navbarSlice.reducer;
