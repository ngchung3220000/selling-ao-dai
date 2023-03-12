import "./NavRight.scss";
import CartIcon from "./CartICon/cartIcon";
import SearchIcon from "./SearchIcon";
import Sign from "./Sign";
import OnRequest from "./Request";

export default function NavRight() {
  return (
    <div className="nav_right">
      <ul className="nav_right-menu">
        <SearchIcon />
        <Sign />
        <CartIcon />
        <OnRequest />
      </ul>
    </div>
  );
}
