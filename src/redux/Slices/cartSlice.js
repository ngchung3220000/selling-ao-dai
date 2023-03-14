import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, actions) => {
      state.push(actions.payload);
    },
    delItem: (state, actions) => {
      return _.filter(state, (obj) => obj.id !== actions.payload);
    },
    totalQuantity: (state, actions) => {
      _.map(state, (obj) => {
        if (obj.id === actions.payload.id) {
          obj.quantity = actions.payload.quantity;
        }
      });
    },
  },
});

export const { addToCart, delItem, totalQuantity } = cartSlice.actions;
export default cartSlice.reducer;
