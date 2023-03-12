import "./Request.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleRequest } from "../../../../../../redux/Slices/navbarSlice";

export default function OnRequest() {
  const disPatch = useDispatch();
  const toggle = useSelector((state) => state.navbar.request);

  return (
    <li className="on-request">
      <a href="#" onClick={() => disPatch(toggleRequest(!toggle))}>
        <span>ĐẶT MAY THEO YÊU CẦU</span>
      </a>
    </li>
  );
}
