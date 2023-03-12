import "./SewingSet.scss";
import { useDispatch, useSelector } from "react-redux";
import { openOrder } from "../../../../../redux/Slices/navbarSlice";
import { UseOutsideClick } from "../components/useOutsideClick";

export default function SewingSet() {
  const disPatch = useDispatch();
  const visSewing = useSelector((state) => state.navbar.order);

  const ref = UseOutsideClick(() => disPatch(openOrder(false)));
  return (
    <div className={`sewing-container ${visSewing ? "open" : "close"}`}>
      <button
        className="close-sewing"
        onClick={() => disPatch(openOrder(false))}
      >
        x
      </button>
      <div ref={ref} className="sewing-wrap">
        <h3>ĐẶT MAY THEO YÊU CẦU</h3>
        <form className="sewing-form">
          <p className="form-item">
            <label htmlFor="fullname">Họ và tên</label>
            <input type="text" name="" />
          </p>
          <p className="form-item">
            <label htmlFor="your-phone">Số điện thoại</label>
            <input type="number" name="your-phone" />
          </p>
          <p className="form-item">
            <label htmlFor="height">Chiều cao</label>
            <input type="text" name="height" />
          </p>
          <p className="form-item">
            <label htmlFor="weight">Cân nặng</label>
            <input type="text" name="weight" />
          </p>
          <p className="form-sample">
            <label htmlFor="sample">Mẫu cần đặt</label>
            <input type="file" name="sample" />
          </p>
          <p className="form-message">
            <label htmlFor="message">Lời nhắn</label>
            <textarea name="your-message"></textarea>
          </p>
          <p className="form-submit">
            <button type="submit">GỬI ĐI</button>
          </p>
        </form>
      </div>
    </div>
  );
}
