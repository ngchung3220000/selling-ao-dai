import "./CartPage.scss";
import { useSelector } from "react-redux";
import CartPageItem from "./cartPageItem";
import _ from "lodash";

export default function CartPage() {
  const cartList = useSelector((state) => state.cart);
  return (
    <div className="cartpage-container">
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
                  <a className="continue-shopping">TIẾP TỤC XEM SẢN PHẨM</a>
                  <button className="submit">CẬP NHẬT GIỎ HÀNG</button>
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
                  <span>380.000 ₫</span>
                </td>
              </tr>
              <tr className="order-total">
                <th>Tổng</th>
                <td>380</td>
              </tr>
            </tbody>
          </table>

          <div className="make-payment">
            <a>TIẾN HÀNH THANH TOÁN</a>
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
    </div>
  );
}
