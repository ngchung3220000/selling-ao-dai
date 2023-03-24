import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = _.findIndex(
        state.cartList,
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex !== -1) {
        if (action.payload.quantity) {
          state.cartList[itemIndex].quantity += action.payload.quantity;
        } else {
          state.cartList[itemIndex].quantity += 1;
        }
      } else {
        const cartItem = {
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,
        };
        state.cartList.push(cartItem);
        console.log(action.payload.quantity);
      }
    },
    delItem: (state, action) => {
      const removeItem = _.filter(
        state.cartList,
        (obj) => obj.id !== action.payload
      );

      state.cartList = removeItem;
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = _.findIndex(
        state.cartList,
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartList[itemIndex].quantity > 1) {
        state.cartList[itemIndex].quantity -= 1;
      } else if (state.cartList[itemIndex].quantity === 1) {
        state.cartList.splice(itemIndex, 1);
      }
    },

    subTotal: (state) => {
      const total = _.reduce(
        state.cartList,
        (total, cartItem) => {
          const itemTotal = cartItem.price * cartItem.quantity;
          return (total += itemTotal);
        },
        0
      );
      state.totalAmount = total;
    },
  },
});

export const { addToCart, delItem, decreaseQuantity, subTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
