import Blog from "../pages/Blog/Blog";
import CartPage from "../pages/CartPage/cartPage";
import Custom from "../pages/Custom/custom";
import Main from "../pages/Main/Main";
import Pay from "../pages/Pay/pay";
import Product from "../pages/Product/Product";

export const publicRoutes = [
  { path: "/", component: Main },
  { path: "/product", component: Product },
  { path: "/blog", component: Blog },
  { path: "/custom", component: Custom },
  { path: "/thanh-toan", component: Pay },
  { path: "/gio-hang", component: CartPage },
];

export const privateRoutes = [];
