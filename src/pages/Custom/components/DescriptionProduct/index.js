import React from "react";
import "./Description.scss";
import img from "../../../../assets/images/red.jpg";

export default function DescriptionProduct() {
  return (
    <div className="description-product">
      <div className="product-thumnail">
        <a>
          <img src={img} />
        </a>
      </div>

      <div className="product-info">
        <section className="info-name">
          <h2>Lụa in 3D </h2>
        </section>

        <section className="info-price">
          <span>380</span>
        </section>

        <section className="size">
          <a>Bảng size</a>
        </section>

        <section className="info-quantity">
          <div className="quantity">
            <button>-</button>
            <input value={1} />
            <button>+</button>
          </div>
          <button className="add-to-cart">THÊM VÀO GIỎ HÀNG</button>
        </section>

        <section className="accordion">
          <div className="accordion-item">
            <a>MÔ TẢ SẢN PHẨM</a>
          </div>
          <div className="accordion-item">
            <a>QUY ĐỊNH ĐỔI HÀNG</a>
          </div>
          <div className="accordion-item">
            <a>PHÍ VẪN CHUYỂN</a>
          </div>
        </section>

        <section className="product-meta">
          <div className="sku-wrap">
            <span>Mã: </span>AM063-041
          </div>

          <div className="poster-in">
            <span>Danh mục: </span>
            <a>In 3D</a>
            <a>In 3D</a>
            <a>In 3D</a>
          </div>
        </section>

        <a className="order-request">
          <button>ĐẶT MAY THEO YÊU CẦU</button>
        </a>
      </div>
    </div>
  );
}
