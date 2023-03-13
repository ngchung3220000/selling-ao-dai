import "./Navbar.scss";
import brand from "../../../.././assets/images/brand.png";
import NavMain from "./NavMain";
import NavRight from "./NavRight";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={brand} />
        </Link>
      </div>

      <NavMain />
      <NavRight />
    </div>
  );
}
