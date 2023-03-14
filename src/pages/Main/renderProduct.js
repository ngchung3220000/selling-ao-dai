import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { infoProduct } from "../../redux/Slices/mainSlice";

export default function Product({ product }) {
  const disPatch = useDispatch();
  const info = useSelector((state) => state.main);
  return (
    <div key={product.id} className="product-item">
      <div className="product-img">
        <Link to="/custom" onClick={() => disPatch(infoProduct(product))}>
          <img src={product.img} />
        </Link>
      </div>
      <div className="product-text">
        <Link to="/custom" onClick={() => disPatch(infoProduct(product))}>
          {product.name}
        </Link>
        <p>{product.price}.000 ₫</p>
      </div>
    </div>
  );
}
