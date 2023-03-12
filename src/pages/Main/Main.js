import React from "react";
import imageMain from "../.././assets/images/babnner.jpg";
import imgNews from "../.././assets/images/news.jpg";
import "./main.css";
import { highlightData } from "../.././components/ProductData/highlightData";
import { discountData } from "../.././components/ProductData/discountData";
import Product from "./renderProduct";

export default function Main() {
  return (
    <div className="main">
      <section className="img_main">
        <img src={imageMain} />
      </section>

      <section className="highlights_products">
        <div className="highlight_text">
          <h2>SẢN PHẨM NỔI BẬT</h2>
        </div>

        <div className="highlights_products-item">
          {highlightData.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </section>

      <section className="discount_products">
        <div className="discount_text">
          <h2>SẢN PHẨM GIẢM GIÁ</h2>
        </div>

        <div className="discount_products-item">
          {discountData.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </section>

      <section className="news">
        <div className="news-title">
          <h2>TIN TỨC</h2>
        </div>

        <div className="news_products">
          <div className="news_products-item">
            <a className="plain">
              <div className="plain-img">
                <img src={imgNews} />
              </div>

              <div className="plain-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian cho khâu trang điểm, làm tóc thì khâu
                  chọn trang phục cũng rất quan trọng. Bởi lẽ, nếu chọn trang
                  phục quá nhạt nhòa có thể làm bạn thiếu nổi bật, còn chọn
                  trang phục quá “lố” thì lại kém duyên.
                </p>
              </div>
            </a>
          </div>
          <div className="news_products-item">
            <a className="plain">
              <div className="plain-img">
                <img src={imgNews} />
              </div>

              <div className="plain-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian cho khâu trang điểm, làm tóc thì khâu
                  chọn trang phục cũng rất quan trọng. Bởi lẽ, nếu chọn trang
                  phục quá nhạt nhòa có thể làm bạn thiếu nổi bật, còn chọn
                  trang phục quá “lố” thì lại kém duyên.
                </p>
              </div>
            </a>
          </div>
          <div className="news_products-item">
            <a className="plain">
              <div className="plain-img">
                <img src={imgNews} />
              </div>

              <div className="plain-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian cho khâu trang điểm, làm tóc thì khâu
                  chọn trang phục cũng rất quan trọng. Bởi lẽ, nếu chọn trang
                  phục quá nhạt nhòa có thể làm bạn thiếu nổi bật, còn chọn
                  trang phục quá “lố” thì lại kém duyên.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
