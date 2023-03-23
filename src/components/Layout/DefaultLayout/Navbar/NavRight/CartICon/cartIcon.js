import "./CartIcon.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTotalPrice } from "../../../../../../helper";
import { toggleCartIcon } from "../../../../../../redux/Slices/navbarSlice";
import { subTotal } from "../../../../../../redux/Slices/cartSlice";

export default function CartIcon() {
  const disPatch = useDispatch();
  const toggle = useSelector((state) => state.navbar.cart);
  const cartList = useSelector((state) => state.cart.cartList);
  const totalPriceCart = useSelector((state) => state.cart.totalAmount);
  console.log(cartList);

  useEffect(() => {
    disPatch(subTotal());
  }, [cartList]);

  return (
    <li className={`cart`}>
      <a href="#" onClick={() => disPatch(toggleCartIcon(!toggle))}>
        {cartList.length <= 0 ? (
          <span>0 ₫ </span>
        ) : (
          <span>{totalPriceCart}.000 ₫ </span>
        )}

        <i className="fa-solid fa-basket-shopping"></i>
      </a>
      <ul>
        <li> Giỏ hàng</li>
      </ul>
    </li>
  );
}
