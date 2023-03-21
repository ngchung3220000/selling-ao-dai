import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delItem } from "../../../../../redux/Slices/cartSlice";

export default function CartItem({ product }) {
  const disPatch = useDispatch();

  const handleDelItem = () => {
    disPatch(delItem(product.id));
  };

  return (
    <div>
      <li className="cart-item">
        <a href="#" className="remove-item" onClick={handleDelItem}>
          <span>x</span>
        </a>
        <Link className="img-item">
          <img src={product.img} />
          <span>{product.name}</span>
        </Link>
        <p className="price-item">
          {product.quantity} x <span>{product.price}.000 ₫</span>
        </p>
      </li>
      <div className="line"></div>
    </div>
  );
}
