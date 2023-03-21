import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/Slices/cartSlice";
import { infoProduct } from "../../redux/Slices/mainSlice";
export default function ProductRender({ product }) {
  const disPatch = useDispatch();

  const handleAddToCart = () => {
    disPatch(addToCart(product));
  };

  return (
    <div className="shop-item">
      <div className="shop-img">
        <Link to="/custom" onClick={() => disPatch(infoProduct(product))}>
          <img src={product.img} />
        </Link>

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
        <Link to="/custom" onClick={() => disPatch(infoProduct(product))}>
          {product.name}
        </Link>
        <p>{product.price}.000 ₫</p>
      </div>
    </div>
  );
}
