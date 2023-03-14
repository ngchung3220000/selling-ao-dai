import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import CartPageItem from "./cartPageItem";
import _ from "lodash";
import { Link } from "react-router-dom";
import { handleTotalPrice } from "../../helper/index";
import { priceCartIcon } from "../../redux/Slices/navbarSlice";
import { useState } from "react";

export default function CartPage() {
  const disPatch = useDispatch();
  const cartList = useSelector((state) => state.cart);
  const totalPriceCart = useSelector((state) => state.navbar.price);

  const [totalPrice, setTotalPrice] = useState(totalPriceCart);

  const handleUpdateCart = () => {
    setTotalPrice(handleTotalPrice(cartList, "quantity"));
    disPatch(priceCartIcon(handleTotalPrice(cartList, "quantity")));
  };

  return (
    <div className="cartpage-container">
      {cartList.length > 0 ? (
        <div className="cartpage-wrap">
          <div className="cartpage-product">
            <table className="cartpage-table">
              <thead>
                <tr className="table-title">
                  <th colSpan={3}>SẢN PHẨM</th>
                  <th>GIÁ</th>
                  <th>SỐ LƯỢNG</th>
                  <th>TẠM TÍNH</th>
                </tr>
              </thead>

              <tbody>
                {_.map(cartList, (product, index) => {
                  return <CartPageItem key={index} product={product} />;
                })}

                <tr className="actions">
                  <td colSpan={6}>
                    <Link to="/product" className="continue-shopping">
                      TIẾP TỤC XEM SẢN PHẨM
                    </Link>
                    <button className="submit" onClick={handleUpdateCart}>
                      CẬP NHẬT GIỎ HÀNG
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cartpage-total">
            <table className="cart-header">
              <thead>
                <tr className="sub-title">
                  <th>CỘNG GIỎ HÀNG</th>
                </tr>
              </thead>
            </table>

            <table className="cart-body">
              <tbody>
                <tr className="subtotal">
                  <th>Tạm tính</th>
                  <td>
                    <span>{totalPrice}.000 ₫</span>
                  </td>
                </tr>
                <tr className="order-total">
                  <th>Tổng</th>
                  <td>{totalPrice}.000 ₫</td>
                </tr>
              </tbody>
            </table>

            <div className="make-payment">
              <Link to="/thanh-toan">TIẾN HÀNH THANH TOÁN</Link>
            </div>

            <form className="coupons">
              <h3>
                <i className="fa-solid fa-tag"></i>
                Phiếu ưu đãi
              </h3>
              <input placeholder="Mã ưu đãi" />
              <button>Áp dụng</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="return-wrap">
          <p>Chưa có sản phẩm nào trong giỏ hàng</p>
          <Link to="/product" className="return-to-shop">
            <span>QUAY TRỞ LẠI CỬA HÀNG</span>
          </Link>
        </div>
      )}
    </div>
  );
}
