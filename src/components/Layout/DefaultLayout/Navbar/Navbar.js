import React from "react";
import brand from "../../../.././assets/images/brand.png";
import "./navbar.scss";
import SearchText from "./SearchText";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={brand} />
        </a>
      </div>

      <div className="nav_main">
        <ul className="nav_main-menu">
          <li>
            <a href="/">GIỚI THIỆU</a>
          </li>
          <li className="shop-hover">
            <a href="/product">
              SHOP ONLINE
              <i className="fa-solid fa-angle-down"></i>
            </a>
            <ul className="shop-list">
              <li>
                <a href="#">Đầm ngủ</a>
              </li>
              <li>
                <a href="#">Áo linen</a>
              </li>
              <li>
                <a href="#">Túi xách</a>
              </li>
              <li>
                <a href="#">Áo phong cách</a>
              </li>
              <li>
                <a href="#">Váy ngắn</a>
              </li>
              <li>
                <a href="#">Sơ mi linen</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <li>
            <a href="#">LIÊN HỆ</a>
          </li>
        </ul>
      </div>
      <SearchText />
    </div>
  );
}
