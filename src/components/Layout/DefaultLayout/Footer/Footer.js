import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left item-padding">
        <h3>
          <span className="hotline">HOTLINE: </span>
          <span className="number">
            <a href="#">0123456789</a>
          </span>
        </h3>

        <ul className="footer-left-item">
          <li>
            <a href="#">Chính sách bảo mật của K&K Fashion</a>
          </li>
          <li>
            <a href="#">Thời trang nữ - Thời trang công sở K&K Fashion</a>
          </li>
          <li>
            <a href="#">Bản quyền thuộc thời trang K&K Fashion</a>
          </li>
          <li>
            <a href="#">Powered by SaGo</a>
          </li>
        </ul>
      </div>

      <div className="footer-main item-padding">
        <h3>THÔNG TIN LIÊN HỆ</h3>
        <ul>
          <li>
            <a href="#">Về chúng tôi</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
          <li>
            <a href="#">Hệ thống 13 chi nhánh</a>
          </li>
        </ul>
      </div>

      <div className="footer-right item-padding">
        <div className="footer-right-icon">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <p>Đăng ký để nhận Special Offers từ K&K Fashion</p>

        <div className="footer-right-email">
          <input type="email" placeholder="Địa chỉ email của bạn" />
          <button className="btn-submit">
            <span>Gửi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
