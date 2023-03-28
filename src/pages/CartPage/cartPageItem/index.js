import "./cartPageItem.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  delItem,
  increaseQuantity,
} from "../../../redux/Slices/cartSlice";

export default function CartPageItem({ product }) {
  const disPatch = useDispatch();
  const handleDelItem = () => {
    disPatch(delItem(product.id));
  };

  return (
    <tr className="table-item">
      <td className="remove-product">
        <Link to="#" onClick={handleDelItem}>
          x
        </Link>
      </td>
      <td className="product-thumbnail">
        <Link to="#">
          <img src={product.img} />
        </Link>
      </td>
      <td className="product-name">
        <Link to="#">{product.name}</Link>
      </td>
      <td className="product-price">
        <span>{product.price}.000 ₫</span>
      </td>
      <td className="product-quantity">
        <button onClick={() => disPatch(decreaseQuantity(product))}>-</button>
        <input type="number" value={product.quantity} readOnly />
        <button onClick={() => disPatch(increaseQuantity(product))}>+</button>
      </td>
      <td className="product-subtotal">
        <span>{product.quantity * product.price}.000 ₫</span>
      </td>
    </tr>
  );
}
