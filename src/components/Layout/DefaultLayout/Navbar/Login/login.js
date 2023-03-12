import "./Login.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../../../redux/Slices/navbarSlice";
import { UseOutsideClick } from "../components/useOutsideClick";

export default function Login() {
  const disPatch = useDispatch();
  const visLogin = useSelector((state) => state.navbar.login);

  const handleOutLogin = () => {
    disPatch(login(false));
  };

  const ref = UseOutsideClick(() => disPatch(login(false)));

  return (
    <div className={`login-form ${visLogin ? "visibility" : "hidden"}`}>
      <button className="letter" onClick={handleOutLogin}>
        x
      </button>
      <div ref={ref} className="login-container">
        <h3>Đăng nhập</h3>
        <form className="account-form">
          <p className="form-username">
            <label htmlFor="username">Tên tài khoản hoặc địa chỉ imail *</label>
            <input type="text" name="username" />
          </p>
          <p className="form-password">
            <label htmlFor="password">Mật khẩu *</label>
            <input type="password" name="password" />
          </p>
          <p className="form-checkbox">
            <input type="checkbox" name="rememberme" />
            <label htmlFor="rememberme">Ghi nhớ mật khẩu</label>
          </p>
          <p className="form-submit">
            <button type="submit" name="login">
              ĐĂNG NHẬP
            </button>
          </p>
          <p className="form-forget-pw">
            <a href="#">Quên mật khẩu?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
