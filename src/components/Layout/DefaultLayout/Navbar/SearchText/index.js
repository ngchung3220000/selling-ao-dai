import "./SearchText.scss";
import _ from "lodash";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchText,
  login,
  clickCart,
  openOrder,
} from "../../../../../redux/Slices/navbarSlice";
import useDebounce from "../../../../../hooks/useDebounce";
import { handleTotalPrice } from "../../../../../helper";

export default function SearchText() {
  const disPatch = useDispatch();
  const searchItems = useSelector((state) => state.navbar.search);
  const visLogin = useSelector((state) => state.navbar.login);
  const visCart = useSelector((state) => state.navbar.cart);
  const visSewing = useSelector((state) => state.navbar.order);
  const cartList = useSelector((state) => state.cart);

  const [searchInput, setSearchInput] = useState("");

  const debounce = useDebounce(searchInput, 500);
  console.log(debounce);

  const handleDispathValueSearch = () => {
    disPatch(searchText(debounce));
  };

  const handleChangeValueSearch = (e) => {
    e.target.value[0] !== " " && setSearchInput(e.target.value);
  };

  const handleHiddenLogin = () => {
    disPatch(login(!visLogin));
  };

  return (
    <div className="nav_right">
      <ul className="nav_right-menu">
        <li className="icon-search">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <ul className="input-search">
            <li>
              <input
                value={searchInput}
                type="text"
                placeholder="Tìm kiếm..."
                spellCheck={false}
                onChange={handleChangeValueSearch}
              ></input>
              <Link to={"/product"} onClick={handleDispathValueSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="nav_right-sign" onClick={handleHiddenLogin}>
            ĐĂNG NHẬP / ĐĂNG KÝ
          </a>
        </li>
        <li className="cart">
          <a href="#" onClick={() => disPatch(clickCart(!visCart))}>
            {cartList.length > 0 ? (
              <>
                {/* {_.reduce(
                  cartList,
                  (total, product) => {
                    return total + product.price;
                  },
                  0
                )} */}
                {handleTotalPrice(cartList, "price")}
                <span>.000 ₫ </span>
              </>
            ) : (
              <span>0 ₫ </span>
            )}

            <i className="fa-solid fa-basket-shopping"></i>
          </a>
          <ul>
            <li> Giỏ hàng</li>
          </ul>
        </li>
        <li className="on-request">
          <a href="#" onClick={() => disPatch(openOrder(!visSewing))}>
            <span>ĐẶT MAY THEO YÊU CẦU</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
