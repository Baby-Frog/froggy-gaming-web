import React, { useEffect, useRef } from "react";
import lodash from "lodash";
import axios from "axios";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "../../../assets/froggy-gaming-icon-2.png";
import NavCategory from "./NavCategory";
import useScrolled from "../../../hooks/useScrolled";
import LoadingSkeleton from "../../SkeletonLoading/LoadingSkeleton";
import { NavigationLinkList } from "./NavigationLinkList";
import { useState } from "react";
import { useSearch } from "../../../contexts/search-context";
import { useCart } from "../../../contexts/cart-context";

const Nav = () => {
  const [data, setData] = useState([]);
  const { query, setQuery, handleSearch } = useSearch();
  const [mobileNav, setMobileNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { cartItems, removeAllFromCart } = useCart();
  const { height, isScrolled, setIsScrolled } = useScrolled(100);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1024 && window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [height, setIsScrolled]);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    setLoading(true);
    if (!query === 0 || query === null) {
      setLoading(false);
    }
    try {
      const response = await axios.get(
        `http://localhost:8386/api/v1/product/search/query=${query}&page=1`
      );
      setData(response.data.data.content || []);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      return error;
    }
  };

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
    document.body.classList.toggle("nav-open");
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const debounceChange = lodash.debounce(handleChange, 500);

  useEffect(() => {
    handleFetchData.current(query);
  }, [query]);

  const signOut = async () => {
    localStorage.clear();
    await removeAllFromCart();
    navigate("/dang-nhap");
  };
  return (
    <>
      <div
        className={`header ${mobileNav && "active"} ${
          isScrolled && "header--fixed"
        }`}
      >
        <div className="header-hamburger-toggle">
          <i className="fa-solid fa-bars" onClick={handleMobileNav}></i>
        </div>
        <Link to={"/"} className="header-logo">
          <img src={Logo} alt="Logo" className="header-icon" />
          <span className="header-brand">
            <span>Froggy</span>
            <span>Gaming</span>
          </span>
        </Link>
        <div className="header-invin-flex">
          <div className="header-hamburger-toggle">
            <i className="fa-solid fa-bars" onClick={handleMobileNav}></i>
          </div>
        </div>
        <div className={`header-navigation ${mobileNav ? "active" : ""}`}>
          <ul className="header-navigation-list">
            <li className="header-navigation-item mobile">
              <form className="header-navigation-form" autoComplete="off">
                <div className="header-navigation-form-find mobile">
                  <input
                    type={"search"}
                    htmlFor="search"
                    className="header-navigation-form-input"
                    placeholder="Nhập vào sản phẩm muốn tìm"
                  />
                </div>
                {loading && (
                  <div
                    className="header-navigation-form-query"
                    style={{
                      height: !query || query === null ? "0px" : "260px",
                    }}
                  >
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                  </div>
                )}
                {!loading && (
                  <div
                    className="header-navigation-form-query"
                    style={{
                      height: !query || query === null ? "0px" : "260px",
                      marginBlock: !query || query === null ? "0px" : "1rem",
                    }}
                  >
                    {data.length > 0 &&
                      data.map((item) => (
                        <ProductItems
                          key={item.proId}
                          data={item}
                        ></ProductItems>
                      ))}
                    {data.length <= 0 && (
                      <div className="header-navigation-form-notfound">
                        Không có sản phẩm nào
                      </div>
                    )}
                  </div>
                )}
              </form>
            </li>

            {NavigationLinkList.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  "header-navigation-item header-navigation-item--flex" +
                  (isActive ? " header-navigation-item--selected" : "")
                }
                to={item.to}
                key={item.id}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.dropdown && <i className="fa-solid fa-angle-down"></i>}
                {item.dropdown && <NavCategory></NavCategory>}
              </NavLink>
            ))}
            <li className="header-navigation-item header-navigation-item--divider"></li>
            <li className="header-navigation-item">
              <ion-icon name="search-outline"></ion-icon>
              <form
                className="header-navigation-form"
                onSubmit={
                  data.length > 0 && !loading
                    ? handleSearch
                    : function () {
                        return;
                      }
                }
                autoComplete="off"
              >
                <div className="header-navigation-form-find">
                  <input
                    type={"search"}
                    htmlFor="search"
                    className="header-navigation-form-input"
                    placeholder="Nhập vào sản phẩm muốn tìm"
                    onChange={debounceChange}
                  />
                  {!loading ? (
                    <span className="cursor-pointer" onClick={handleSearch}>
                      <ion-icon name="search-outline"></ion-icon>
                    </span>
                  ) : (
                    <div className="loading-circle"></div>
                  )}
                </div>
                {loading && (
                  <div
                    className="header-navigation-form-query"
                    style={{
                      height: !query || query === null ? "0px" : "260px",
                    }}
                  >
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                    <ProductItemsSkeleton></ProductItemsSkeleton>
                  </div>
                )}
                {!loading && (
                  <div
                    className="header-navigation-form-query"
                    style={{
                      height: !query || query === null ? "0px" : "260px",
                      marginBlock: !query || query === null ? "0px" : "1rem",
                    }}
                  >
                    {data.length > 0 &&
                      data.map((item) => (
                        <ProductItems
                          key={item.proId}
                          data={item}
                        ></ProductItems>
                      ))}
                    {data.length <= 0 && (
                      <div className="header-navigation-form-notfound">
                        Không có sản phẩm nào
                      </div>
                    )}
                  </div>
                )}
              </form>
            </li>

            <li className="header-navigation-item">
              {!localStorage.getItem("roles") && (
                <div
                  className="header-navigation-user"
                  onClick={() => navigate("/dang-nhap")}
                >
                  <span className="header-navigation-sign">
                    <ion-icon name="person-circle-outline"></ion-icon>
                  </span>
                  <span className="header-navigation-sign header-navigation-sign--mobile">
                    Đăng nhập/Đăng ký
                  </span>
                </div>
              )}
              {localStorage.getItem("roles") && (
                <span className="header-navigation-signed" onClick={signOut}>
                  <i className="fa-solid fa-door-open"></i>
                  {localStorage.getItem("username")}
                </span>
              )}
            </li>
            <li
              className="header-navigation-item"
              onClick={() => navigate("/gio-hang")}
            >
              <div className="header-navigation-cart">
                <ion-icon name="cart-outline"></ion-icon>
                <span>Giỏ hàng</span>
                <div className="header-navigation-cart-number">
                  {cartItems.length}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-close" onClick={handleMobileNav}>
          <i className="fa-solid fa-times"></i>
        </div>
        <div className="header-overlay" onClick={handleMobileNav}></div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
// localhost:8386/api/v1/fileupload/file/banphimakkov2rgbwhite1.png
const ProductItems = ({ data }) => {
  const navigate = useNavigate();
  const { proId } = data;
  return (
    <div>
      <div
        onClick={() => navigate(`/san-pham/${proId}`)}
        className="header-navigation-form-query-flex"
      >
        <img
          src={`${data.images[0].imgPath.replaceAll("-", "")}`}
          alt=""
          className="header-navigation-form-query-img"
        />
        <div className="header-navigation-form-query-description">
          <span className="header-navigation-form-query-title">
            {data.proName}
          </span>
          <div className="header-navigation-form-query-overview">
            {data.proDesc}
          </div>
          <div className="header-navigation-form-query-cost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              version="1.1"
              viewBox="0 0 700 700"
            >
              <g>
                <path
                  d="m350 155.61c-68.578 0-124.41 55.812-124.41 124.39s55.836 124.41 124.41 124.41 124.39-55.836 124.39-124.41-55.789-124.39-124.39-124.39zm0 230.11c-58.309 0-105.72-47.414-105.72-105.72 0-58.285 47.414-105.7 105.72-105.7 58.285 0 105.7 47.414 105.7 105.7 0.023437 58.309-47.391 105.72-105.7 105.72z"
                  fill="green"
                />
                <path
                  fill="green"
                  d="m608.14 117.51h-516.27c-11.809 0-21.422 9.6133-21.422 21.422v282.15c0 11.809 9.6133 21.422 21.422 21.422h516.27c11.809 0 21.422-9.6133 21.422-21.422v-282.15c0-11.805-9.6172-21.418-21.422-21.418zm-36.098 306.3h-444.08c-3.7812-19.133-19.039-33.809-38.852-37.379v-212.82c19.809-3.5703 35.047-18.246 38.852-37.402h444.06c3.7812 19.156 19.039 33.832 38.852 37.402v212.85c-19.793 3.543-35.051 18.223-38.832 37.355zm38.828-284.88v15.168c-9.2852-2.707-16.215-9.1484-19.227-17.898h16.473c1.5156 0 2.7539 1.2383 2.7539 2.7305zm-519-2.7305h16.473c-2.9844 8.75-9.9375 15.168-19.203 17.898v-15.168c0-1.4922 1.2383-2.7305 2.7305-2.7305zm-2.7305 284.88v-15.145c9.2852 2.707 16.215 9.125 19.227 17.875h-16.496c-1.4922 0-2.7305-1.2383-2.7305-2.7305zm519 2.7305h-16.473c2.9883-8.75 9.9414-15.168 19.227-17.875v15.145c-0.023437 1.4922-1.2617 2.7305-2.7539 2.7305z"
                />
                <path
                  fill="green"
                  d="m367.83 244.11v-25.223h-29.516l-0.003906-15.379h29.516l0.003906-11.477h28.91v11.48h12.715v15.375h-12.715v120.59h-27.695v-15.191c-4.1055 6.5586-8.75 11.316-13.93 14.258-5.2031 2.9414-11.691 4.4102-19.484 4.4102-12.715 0-23.402-5.1562-32.082-15.492-8.6797-10.312-13.02-23.543-13.02-39.668 0-18.738 4.2695-33.438 12.809-44.102 8.5391-10.664 19.996-16.008 34.348-16.008 6.6953 0 12.602 1.4688 17.734 4.4102 5.1523 2.9648 9.2812 6.9805 12.41 12.02zm-53.504 108.69h71.352v15.191h-71.352zm54.344-66.242c0-13.395-3.3594-22.961-10.078-28.699-4.1055-3.4062-9.0078-5.1328-14.629-5.1328-8.375 0-14.512 3.1484-18.434 9.4258-3.9219 6.3008-5.8789 14.094-5.8789 23.379 0 10.125 1.9844 18.176 5.9727 24.195 3.9883 6.0195 10.078 9.0312 18.316 9.0312 8.0977 0 14.234-2.9883 18.434-8.9141 4.1953-5.9492 6.2969-13.695 6.2969-23.285z"
                />
              </g>
            </svg>
            <span className="header-navigation-form-query-price">
              {data.proPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductItemsSkeleton = () => {
  return (
    <div>
      <div className="header-navigation-form-query-flex">
        <div className="header-navigation-form-query-img">
          <LoadingSkeleton radius="8px"></LoadingSkeleton>
        </div>

        <div className="header-navigation-form-query-description">
          <span className="header-navigation-form-query-title">
            <LoadingSkeleton height="20px"></LoadingSkeleton>
          </span>
          <div className="header-navigation-form-query-overview">
            <LoadingSkeleton height="90px" marginTop="10px"></LoadingSkeleton>
          </div>
          <div className="header-navigation-form-query-vote">
            <LoadingSkeleton
              width="90px"
              height="15px"
              marginTop="10px"
            ></LoadingSkeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
