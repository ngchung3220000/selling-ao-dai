import React from "react";
import "./Relate.scss";
import iconHead from "../../../../assets/images/icon-heading.png";
import { data } from "./components/data";
import RelateRender from "./components/RelateRender";

export default function RelateProduct() {
  return (
    <div className="relate-container">
      <div className="relate-wrap">
        <div className="relate-title">
          <h2>SẢN PHẨM LIÊN QUAN</h2>
        </div>

        <div>
          <img src={iconHead} />
        </div>

        <div className="relate-product">
          <button>Prev</button>
          {data.map((data, index) => {
            return <RelateRender key={index} data={data} />;
          })}
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
