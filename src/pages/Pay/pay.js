import _ from "lodash";
import { useSelector } from "react-redux";
import "./Pay.scss";

export default function Pay() {
  const cartList = useSelector((state) => state.cart.cartList);
  const totalPriceCart = useSelector((state) => state.cart.totalAmount);
  console.log(cartList);

  return (
    <div className="pay-container">
      <div className="pay-wrap">
        <div className="pay-message">
          <span>Bạn có mã ưu đãi? </span>
          <a className="toggle-coupon">Ấn vào đây để nhập mã</a>
        </div>

        <form className="pay-coupon">
          <p>Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.</p>
          <div className="enter-coupon">
            <input placeholder="Mã ưu đãi" />
            <button className="submit">ÁP DỤNG</button>
          </div>
        </form>

        <div className="pay-main">
          <div className="pay-left">
            <div className="billing-info">
              <h3>THÔNG TIN THANH TOÁN</h3>

              <p className="info-fullname info-item">
                <label htmlFor="fullName">
                  Họ và tên <span>*</span>
                </label>
                <input type="text" id="fullName" />
              </p>

              <p className="info-address info-item">
                <label htmlFor="address">
                  Địa chỉ <span>*</span>
                </label>
                <input type="text" id="address" />
              </p>

              <p className="info-phonenumber info-item">
                <label htmlFor="phoneNumber">
                  Số điện thoại <span>*</span>
                </label>
                <input id="phoneNumber" type="number" />
              </p>

              <p className="info-email info-item">
                <label htmlFor="email">
                  Địa chỉ email <span>*</span>
                </label>
                <input id="email" type="email" />
              </p>
            </div>

            <div className="add-info">
              <h3>THÔNG TI BỔ SUNG</h3>
              <p className="info-message">
                <label htmlFor="message">Ghi chú đơn hàng (tùy chọn)</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Ghi chú về đơn hàng"
                ></textarea>
              </p>
            </div>
          </div>

          <div className="pay-right">
            <div className="order-review">
              <h3>ĐƠN HÀNG CỦA BẠN</h3>
              <table className="order-table">
                <thead>
                  <tr className="order-header">
                    <th className="order-name">SẢN PHẨM</th>
                    <th className="product-subtotal text-right">TẠM TÍNH</th>
                  </tr>
                </thead>

                {cartList.length > 0 &&
                  _.map(cartList, (product, index) => {
                    return (
                      <tbody key={index}>
                        <tr className="order-product">
                          <td>
                            {product.name} x {product.quantity}
                          </td>
                          <td className="text-right">
                            {product.price * product.quantity}.000 ₫
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}

                <tfoot>
                  <tr className="order-subtotal">
                    <th>Tạm tính</th>
                    <td className="text-right">{totalPriceCart}.000 ₫</td>
                  </tr>
                  <tr className="order-total">
                    <th>Tổng</th>
                    <td className="text-right">{totalPriceCart}.000 ₫</td>
                  </tr>
                </tfoot>
              </table>

              <div className="checkout-payment">
                <p>Trả tiền mặt khi nhận hàng</p>
                <p>Trả tiền mặt khi giao hàng</p>
                <button>ĐẶT HÀNG</button>
                <p className="policy-link">
                  <a>Xem chính sách riêng tư</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
