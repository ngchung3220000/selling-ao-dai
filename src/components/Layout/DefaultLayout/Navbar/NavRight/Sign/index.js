import "./Sign.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../../../../../redux/Slices/navbarSlice";
export default function Sign() {
  const disPatch = useDispatch();
  const toggle = useSelector((state) => state.navbar.login);

  const handleHiddenLogin = () => {
    disPatch(toggleLogin(!toggle));
  };

  return (
    <li>
      <a href="#" className="nav_right-sign" onClick={handleHiddenLogin}>
        ĐĂNG NHẬP / ĐĂNG KÝ
      </a>
    </li>
  );
}
