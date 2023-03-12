import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";
export default function ProductRender({ product }) {
  const disPatch = useDispatch();

  const handleAddToCart = () => {
    disPatch(addToCart(product));
  };

  return (
    <div className="shop-item">
      <div className="shop-img">
        <a href="/custom">
          <img src={product.img} />
        </a>

        <div className="add-cart">
          <a onClick={handleAddToCart} className="add-cart-icon">
            <span>+</span>
          </a>
        </div>
      </div>

      <div className="shop-text">
        <p>
          <span>IN 3D</span>
        </p>
        <a>{product.name}</a>
        <p>{product.price}.000 ₫</p>
      </div>
    </div>
  );
}
