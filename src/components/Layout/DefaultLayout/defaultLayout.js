import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Login from "./Navbar/Login/login";
import CartIcon from "./Navbar/CartICon/cartIcon";
import SewingSet from "./Navbar/SewingSet/sewingSet";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Login />
      <CartIcon />
      <SewingSet />
      <Footer />
    </div>
  );
}
