import React from "react";
import "./Relate.scss";
import iconHead from "../../../../assets/images/icon-heading.png";
import { data } from "./components/data";
import RelateRender from "./components/RelateRender";
import SlickSlider from "../../../../hooks/slickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RelateProduct() {
 
  return (
    <div className="relate-container">
      <div className="relate-wrap">
        <div className="relate-title">
          <h2>SẢN PHẨM LIÊN QUAN</h2>
          <img src={iconHead} />
        </div>

    
        <div className="relate-product">
         {/* {SlickSlider(data.map((data, index) => {
              return <RelateRender key={index} data={data} />;
            }))} */}
            <SlickSlider data={data.map((data, index) => {
              return <RelateRender key={index} data={data} />;
            })}/>
         
        </div>
      </div>
    </div>
  );
}
