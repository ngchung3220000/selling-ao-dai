import { Link } from "react-router-dom";
import "./NavMain.scss";
export default function NavMain() {
  return (
    <div className="nav_main">
      <ul className="nav_main-menu">
        <li>
          <Link to="/">GIỚI THIỆU</Link>
        </li>
        <li className="shop-hover">
          <Link to="/product">
            SHOP ONLINE
            <i className="fa-solid fa-angle-down"></i>
          </Link>
          <ul className="shop-list">
            <li>
              <Link to="#">Đầm ngủ</Link>
            </li>
            <li>
              <Link to="#">Áo linen</Link>
            </li>
            <li>
              <Link to="#">Túi xách</Link>
            </li>
            <li>
              <Link to="#">Áo phong cách</Link>
            </li>
            <li>
              <Link to="#">Váy ngắn</Link>
            </li>
            <li>
              <Link to="#">Sơ mi linen</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <li>
          <Link to="#">LIÊN HỆ</Link>
        </li>
      </ul>
    </div>
  );
}
