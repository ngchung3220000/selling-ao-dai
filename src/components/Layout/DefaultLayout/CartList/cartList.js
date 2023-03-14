import "./CartList.scss";
import _ from "lodash";
import CartItem from "./CartItem/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartIcon } from "../../../../redux/Slices/navbarSlice";
import { UseOutsideClick } from "../../../.././hooks/useOutsideClick";
import { handleTotalPrice } from "../../../../helper";

export default function CartList() {
  const disPatch = useDispatch();
  const toggle = useSelector((state) => state.navbar.cart);
  const cartList = useSelector((state) => state.cart);

  const ref = UseOutsideClick(() => disPatch(toggleCartIcon(false)));

  return (
    <div className={`cart-container ${toggle ? "visible" : "hidden"}`}>
      <div ref={ref} className={`cart-wrap `}>
        <h3>GIỎ HÀNG</h3>
        <div className="divider"></div>

        {cartList.length <= 0 ? (
          <p>Chưa có sản phẩm trong giỏ hàng</p>
        ) : (
          <div className="cart-content">
            <ul className="cart-list">
              {_.map(cartList, (product, index) => {
                return <CartItem key={index} product={product} />;
              })}
            </ul>
            <p className="total-price">
              Tổng số phụ: {handleTotalPrice(cartList, "price")}
              <span>.000 ₫</span>
            </p>
            <p className="buttons">
              <Link
                to="/gio-hang"
                className="button"
                onClick={() => disPatch(toggleCartIcon(false))}
              >
                XEM GIỎ HÀNG
              </Link>
              <Link
                to="/thanh-toan"
                className="button"
                onClick={() => disPatch(toggleCartIcon(false))}
              >
                THANH TOÁN
              </Link>
            </p>
          </div>
        )}
      </div>
      <button
        className="close-cart"
        onClick={() => disPatch(toggleCartIcon(false))}
      >
        X
      </button>
    </div>
  );
}
