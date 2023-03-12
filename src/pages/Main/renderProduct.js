import React from "react";

export default function Product({ product }) {
  return (
    <div key={product.id} className="product-item">
      <div className="product-img">
        <a href="/custom">
          <img src={product.img} />
        </a>
      </div>
      <div className="product-text">
        <a href="/custom">{product.name}</a>
        <p>{product.price} ₫</p>
      </div>
    </div>
  );
}
