import "./cartPageItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delItem, totalQuantity } from "../../../redux/Slices/cartSlice";
import { useEffect, useState } from "react";
import { quantityItem, productItem } from "../../../redux/Slices/quantitySlice";

export default function CartPageItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const disPatch = useDispatch();
  const handleDelItem = () => {
    disPatch(delItem(product.id));
  };

  useEffect(() => {
    // disPatch(quantityItem(Number(quantity)));
    // disPatch(productItem(product));
    disPatch(
      totalQuantity({ id: product.id, quantity: product.price * quantity })
    );
    console.log(quantity, product.price * quantity, product.id);
  }, [quantity]);

  const handleSubItem = () => {
    if (quantity >= 1) setQuantity(quantity - 1);
  };

  const handleAddItem = () => {
    setQuantity(Number(quantity) + 1);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <tr className="table-item">
      <td className="remove-product">
        <Link to="" onClick={handleDelItem}>
          x
        </Link>
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
        <button onClick={handleSubItem}>-</button>
        <input type="number" value={quantity} onChange={handleChangeQuantity} />
        <button onClick={handleAddItem}>+</button>
      </td>
      <td className="product-subtotal">
        <span>{product.quantity}.000 ₫</span>
      </td>
    </tr>
  );
}
