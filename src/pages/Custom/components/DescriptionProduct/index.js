import "./Description.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../redux/Slices/cartSlice";

export default function DescriptionProduct() {
  const disPatch = useDispatch();
  const product = useSelector((state) => state.main);

  const [quantity, setQuantity] = useState(product.quantity);
  const handleAddToCart = () => {
    disPatch(addToCart({ ...product, quantity: quantity }));
  };

  return (
    <div className="description-product">
      <div className="product-thumnail">
        <a href="#">
          <img src={product.img} />
        </a>
      </div>

      <div className="product-info">
        <section className="info-name">
          <h2>{product.name} </h2>
        </section>

        <section className="info-price">
          <span>{product.price}.000 ₫</span>
        </section>

        <section className="size">
          <a href="#">Bảng size</a>
        </section>

        <section className="info-quantity">
          <div className="quantity">
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <input value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <Link
            to="/gio-hang"
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            THÊM VÀO GIỎ HÀNG
          </Link>
        </section>

        <section className="accordion">
          <div className="accordion-item">
            <a href="#">MÔ TẢ SẢN PHẨM</a>
          </div>
          <div className="accordion-item">
            <a href="#">QUY ĐỊNH ĐỔI HÀNG</a>
          </div>
          <div className="accordion-item">
            <a href="#">PHÍ VẪN CHUYỂN</a>
          </div>
        </section>

        <section className="product-meta">
          <div className="sku-wrap">
            <span>Mã: </span>AM063-041
          </div>

          <div className="poster-in">
            <span>Danh mục: </span>
            <a href="#">In 3D</a>
            <a href="#">In 3D</a>
            <a href="#">In 3D</a>
          </div>
        </section>

        <a href="#" className="order-request">
          <button>ĐẶT MAY THEO YÊU CẦU</button>
        </a>
      </div>
    </div>
  );
}
