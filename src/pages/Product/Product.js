import "./product.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { dataShopOnline } from "./data";
import { searchText } from "../../redux/Slices/navbarSlice";
import ProductRender from "./ProductRender";

export default function Product() {
  const disPatch = useDispatch();
  const searchItems = useSelector((state) => state.navbar.search);
  console.log(searchItems);

  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [newPerPage, setNewPerPage] = useState(12);

  const products = _.filter(dataShopOnline, (data) => {
    return _.includes(_.lowerCase(data.name), _.trim(searchItems));
  });

  const indexOfLast = currentPage * newPerPage;
  const indexOfFirst = indexOfLast - newPerPage;
  const dataSlice = _.slice(products, indexOfFirst, indexOfLast);
  console.log(products.length);

  const pageNumbers = [];
  for (let i = 1; i <= _.ceil(products.length / newPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleOnChangeSelect = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handlePrevIcon = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const handleNextIcon = () => {
    if (currentPage !== _.ceil(dataShopOnline.length / newPerPage))
      setCurrentPage(currentPage + 1);
  };

  const handleSortProduct = () => {
    let listProduct = products;

    if (sortBy === "price")
      listProduct = _.orderBy(products, ["price"], ["asc"]);
    if (sortBy === "price-desc")
      listProduct = _.orderBy(products, ["price"], ["desc"]);

    return _.map(_.slice(listProduct, indexOfFirst, indexOfLast), (product) => {
      return <ProductRender key={product.id} product={product} />;
    });
  };

  return (
    <div className="shop-online">
      <div className="nav-shop">
        <div className="nav-shop-left">
          {" "}
          <Link to={"/"}>Trang chủ</Link>
          <span>/</span>
          {searchItems.length ? (
            <>
              <Link to={"/product"} onClick={() => disPatch(searchText(""))}>
                Sản phẩm
              </Link>
              <span>/</span> Kết quả tìm kiếm cho "{searchItems}"
            </>
          ) : currentPage !== 1 ? (
            <>
              <Link
                to={"/product"}
                onClick={() => {
                  setCurrentPage(1);
                  setSortBy("date");
                }}
              >
                Sản phẩm
              </Link>
              <span>/</span> Trang {currentPage}
            </>
          ) : (
            "Sản phẩm"
          )}
        </div>

        <div className="nav-shop-right">
          <p>
            Hiển thị {indexOfFirst + 1} -{" "}
            {dataSlice.length === newPerPage ? indexOfLast : products.length}{" "}
            của {products.length} kết quả
          </p>
          <select
            value={sortBy}
            className="sort-by"
            onChange={handleOnChangeSelect}
          >
            <option value="popular">Thứ tự theo mức độ phổ biến</option>
            <option value="rate">Thứ tự theo điểm đánh giá</option>
            <option value="date">Mới nhất</option>
            <option value="price">Thứ tự theo giá: thấp đến cao</option>
            <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
          </select>
        </div>
      </div>

      <div className="shop-online-bt">
        {/* {
          _.map(
            sortBy === "price-desc"
              ? priceDown
              : sortBy === "price"
              ? priceUp
              : products,
            (product) => {
              return <ProductRender key={product.id} product={product} />;
            }
          )
          : sortBy === "price"
          ? priceUp.map((product) => {
              return <ProductRender key={product.id} product={product} />;
            })
        } */}

        {handleSortProduct()}
      </div>

      <div className="pagination-page">
        <ul className="page-numbers">
          <li
            className={`page-number-item ${
              currentPage === 1 && "display-none"
            }`}
            onClick={handlePrevIcon}
          >
            <a href="#">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          </li>

          {_.map(pageNumbers, (number) => {
            return (
              <li
                key={number}
                className={`page-number-item ${
                  currentPage === number ? "current-page" : ""
                }`}
                onClick={() => setCurrentPage(number)}
              >
                <a>{number}</a>
              </li>
            );
          })}

          <li
            className={`page-number-item ${
              currentPage === _.ceil(dataShopOnline.length / newPerPage) &&
              "display-none"
            }`}
            onClick={handleNextIcon}
          >
            <a href="#">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
