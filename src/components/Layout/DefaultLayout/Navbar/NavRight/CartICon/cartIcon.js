import "./CartIcon.scss";
import { handleTotalPrice } from "../../../../../../helper";
import { toggleCartIcon } from "../../../../../../redux/Slices/navbarSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartIcon() {
  const disPatch = useDispatch();
  const toggle = useSelector((state) => state.navbar.cart);
  const cartList = useSelector((state) => state.cart);

  return (
    <li className="cart">
      <a href="#" onClick={() => disPatch(toggleCartIcon(!toggle))}>
        {cartList.length > 0 ? (
          <>
            {/* {_.reduce(
                  cartList,
                  (total, product) => {
                    return total + product.price;
                  },
                  0
                )} */}
            {handleTotalPrice(cartList, "price")}
            <span>.000 ₫ </span>
          </>
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
