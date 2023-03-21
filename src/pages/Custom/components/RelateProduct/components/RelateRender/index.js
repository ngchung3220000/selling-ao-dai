import "./RelateRender.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { infoProduct } from "../../../../../../redux/Slices/mainSlice";
import { addToCart } from "../../../../../../redux/Slices/cartSlice";

export default function RelateRender({ product }) {
  const disPatch = useDispatch();

  return (
    <div className="relate-item">
      <div className="relate-item-img">
        <Link to="/custom" onClick={() => disPatch(infoProduct(product))}>
          <img src={product.img} />
        </Link>

        <div className="add-cart">
          <a
            className="add-cart-icon"
            onClick={() => disPatch(addToCart(product))}
          >
            <span>+</span>
          </a>
        </div>
      </div>

      <div className="relate-text">
        <p>
          <span>IN 3D</span>
        </p>
        <Link to="/custom">{product.name}</Link>
        <p>{product.price}.000 ₫</p>
      </div>
    </div>
  );
}
