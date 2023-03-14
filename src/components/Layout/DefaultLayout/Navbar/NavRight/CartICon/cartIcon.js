import "./CartIcon.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTotalPrice } from "../../../../../../helper";
import {
  toggleCartIcon,
  priceCartIcon,
} from "../../../../../../redux/Slices/navbarSlice";

export default function CartIcon() {
  const disPatch = useDispatch();
  const toggle = useSelector((state) => state.navbar.cart);
  const cartList = useSelector((state) => state.cart);
  const totalPriceCart = useSelector((state) => state.navbar.price);

  useEffect(() => {
    if (cartList.length > 0) {
      disPatch(priceCartIcon(handleTotalPrice(cartList, "price")));
    }
  }, [cartList]);

  return (
    <li className={`cart`}>
      <a href="#" onClick={() => disPatch(toggleCartIcon(!toggle))}>
        {cartList.length > 0 ? (
          <span>{totalPriceCart}.000 ₫ </span>
        ) : (
          <span>0 ₫ </span>
        )}

        <i className="fa-solid fa-basket-shopping"></i>
      </a>
      <ul>
        <li> Giỏ hàng</li>
      </ul>
    </li>
  );
}
