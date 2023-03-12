import React from "react";
import "./CartItem.scss";
import { Link } from "react-router-dom";

export default function CartItem({ product }) {
  return (
    <div>
      <li className="cart-item">
        <a href="#" className="remove-item">
          <span>x</span>
        </a>
        <Link className="img-item">
          <img src={product.img} />
          <span>{product.name}</span>
        </Link>
        <p className="price-item">
          1 x <span>{product.price}.000 ₫</span>
        </p>
      </li>
      <div className="line"></div>
    </div>
  );
}
