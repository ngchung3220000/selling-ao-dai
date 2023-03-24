import { Link } from "react-router-dom";
import DescriptionProduct from "./components/DescriptionProduct";
import RelateProduct from "./components/RelateProduct";
import "./Custom.scss";

export default function Custom() {
  return (
    <div className="custom-page">
      <div className="custom-nav">
        <Link to="/">Trang chủ</Link>
        <span> / </span>
        <Link to="/product">Sản phẩm</Link>
        <span> / </span>
        <a>Mô tả sản phẩm</a>
      </div>

      <DescriptionProduct />
      <div className="title-main">
        <h2>MÔ TẢ SẢN PHẨM</h2>
      </div>
      <RelateProduct />
    </div>
  );
}
