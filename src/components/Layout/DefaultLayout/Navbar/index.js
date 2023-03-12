import React from "react";
import brand from "../../../.././assets/images/brand.png";
import "./Navbar.scss";
import NavMain from "./NavMain";
import NavRight from "./NavRight";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={brand} />
        </a>
      </div>

      <NavMain />
      <NavRight />
    </div>
  );
}
