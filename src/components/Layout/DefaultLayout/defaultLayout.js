import React from "react";
import Navbar from "./Navbar/index";
import Footer from "./Footer/Footer";
import Login from "./Login/login";
import CartList from "./CartList/cartList";
import SewingSet from "./SewingSet/sewingSet";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Login />
      <CartList />
      <SewingSet />
      <Footer />
    </div>
  );
}
