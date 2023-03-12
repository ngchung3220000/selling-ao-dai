import React from "react";
import imgNews from "../../assets/images/news.jpg";
import "./blog.scss";

export default function Blog() {
  return (
    <div className="blog">
      <div className="header-blog">
        <h2>CATEGORY ARCHIVES: BLOG</h2>
      </div>

      <div className="blog-container">
        <div className="blog-wrapper">
          <div className="blog-item">
            <a href="#">
              <div className="item-image">
                <img src={imgNews} />
              </div>

              <div className="item-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="item-line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian...
                </p>
              </div>
            </a>
          </div>
          <div className="blog-item">
            <a href="#">
              <div className="item-image">
                <img src={imgNews} />
              </div>

              <div className="item-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="item-line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian...
                </p>
              </div>
            </a>
          </div>
          <div className="blog-item">
            <a href="#">
              <div className="item-image">
                <img src={imgNews} />
              </div>

              <div className="item-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="item-line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian...
                </p>
              </div>
            </a>
          </div>
          <div className="blog-item">
            <a href="#">
              <div className="item-image">
                <img src={imgNews} />
              </div>

              <div className="item-text">
                <h4>4 Kiểu váy đầm đi đám cưới xinh lung linh cho phái đẹp</h4>
                <div className="item-line-news"></div>
                <p>
                  Khi nhận được lời mời dự tiệc cưới, bên cạnh việc bạn phải
                  dành nhiều thời gian...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
