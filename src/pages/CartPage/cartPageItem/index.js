import "./cartPageItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartPageItem({ product }) {
  return (
    <tr className="table-item">
      <td className="remove-product">
        <Link to="">x</Link>
      </td>
      <td className="product-thumbnail">
        <Link to="">
          <img src={product.img} />
        </Link>
      </td>
      <td className="product-name">
        <Link to="">{product.name}</Link>
      </td>
      <td className="product-price">
        <span>{product.price}.000 ₫</span>
      </td>
      <td className="product-quantity">
        <button>-</button>
        <input defaultValue={1} />
        <button>+</button>
      </td>
      <td className="product-subtotal">
        <span>380.000 ₫</span>
      </td>
    </tr>
  );
}
