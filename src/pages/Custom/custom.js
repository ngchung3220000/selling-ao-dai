import DescriptionProduct from "./components/DescriptionProduct";
import RelateProduct from "./components/RelateProduct";
import "./Custom.scss";

export default function Custom() {
  return (
    <div className="custom-page">
      <div className="custom-nav">
        <a>Trang chủ</a>
        <span> / </span>
        <a>Sản phẩm</a>
        <span> / </span>
        <a>In 3D</a>
      </div>

      <DescriptionProduct />
      <div className="title-main">
        <h2>MÔ TẢ SẢN PHẨM</h2>
      </div>
      <RelateProduct />
    </div>
  );
}
