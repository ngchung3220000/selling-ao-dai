import React from "react";

export default function RelateRender({ data }) {
  return (
    <div className="relate-item">
      <div className="relate-item-img">
        <a href="/custom">
          <img src={data.img} />
        </a>

        <div className="add-cart">
          <a className="add-cart-icon">
            <span>+</span>
          </a>
        </div>
      </div>

      <div className="relate-text">
        <p>
          <span>IN 3D</span>
        </p>
        <a>{data.name}</a>
        <p>{data.price} ₫</p>
      </div>
    </div>
  );
}
