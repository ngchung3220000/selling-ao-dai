import "./SearchIcon.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useDebounce from "../../../../../../hooks/useDebounce";
import { searchText } from "../../../../../../redux/Slices/navbarSlice";

export default function SearchIcon() {
  const disPatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const debounce = useDebounce(searchInput, 500);

  const handleDispathValueSearch = () => {
    disPatch(searchText(debounce));
  };

  const handleChangeValueSearch = (e) => {
    e.target.value[0] !== " " && setSearchInput(e.target.value);
  };
  return (
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
  );
}
