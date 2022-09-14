import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useSearch } from "../../contexts/search-context";
import ProductCard from "../../global/products/ProductCard";
import useClickOutside from "../../hooks/useClickOutside";
import useDropdown from "../../hooks/useDropdown";
import useScrolled from "../../hooks/useScrolled";
import "./styles/productlist.css";
const itemsPerPage = 12;
const ProductList = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { searchResult, url, setUrl, nextPage, setNextPage, query } =
    useSearch();
  const { nodeRef, setShow, show } = useClickOutside(false);
  const [selected, setSelected] = useState("Giá (Thấp -> Cao)");
  const { height, setIsScrolled } = useScrolled(300);
  const { data } = useSWR(url, fetcher);
  const handleSelect = (e) => {
    setSelected(e.target.textContent);
    if (e.target.textContent === "Giá (Thấp -> Cao)") {
      setUrl(
        `http://localhost:8386/api/v1/product/search/query=${query}&page=${nextPage}/sort=pro.price&order=asc`
      );
    }
    if (e.target.textContent === "Giá (Cao -> Thấp)") {
      setUrl(
        `http://localhost:8386/api/v1/product/search/query=${query}&page=${nextPage}/sort=pro.price&order=desc`
      );
    }
    if (e.target.textContent === "Từ (A -> Z)") {
      setUrl(
        `http://localhost:8386/api/v1/product/search/query=${query}&page=${nextPage}/sort=pro.name&order=asc`
      );
    }
    if (e.target.textContent === "Từ (Z -> A)") {
      setUrl(
        `http://localhost:8386/api/v1/product/search/query=${query}&page=${nextPage}/sort=pro.name&order=desc`
      );
    }
    setShow(false);
  };

  useEffect(() => {
    setUrl(
      `http://localhost:8386/api/v1/product/search/query=${query}&page=${nextPage}/sort=pro.price&order=asc`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage, setUrl]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 1024 && window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [height, setIsScrolled]);
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const products = data?.data?.content || [];
  const queryInfo = data?.data || [];
  useEffect(() => {
    if (!data) return;

    // Fetch items from another resources.
    setPageCount(Math.ceil(data.data.totalElements / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.data.totalElements;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="wrapper">
      <div className="breadcrumbs">
        <span>
          <Link to={"/"}>Trang chủ</Link>
        </span>
        <span>{">"}</span>
        <span>
          <Link to={"/chi-tiet"}>Sản phẩm</Link>
        </span>
      </div>
      <div className="product">
        <ProductFilter></ProductFilter>
        <div className="product-section">
          <div className="product-top">
            <div className="product-count">
              <h3 className="product-found">Tìm kiếm - {searchResult}</h3>
              <span className="product-amount">
                [{queryInfo.numberOfElements} sản phẩm]
              </span>
            </div>
            <div className="product-sort" ref={nodeRef}>
              <span>Sắp xếp theo:</span>
              <div
                className="product-sort-selected"
                onClick={() => setShow(!show)}
              >
                <span className="product-sort-current">{selected}</span>
                <i
                  className={`fa-solid ${
                    show ? "fa-angle-down" : "fa-angle-up"
                  }`}
                ></i>
              </div>

              <div
                className={`product-sort-selection ${
                  show ? "visible" : "hidden"
                }`}
              >
                <span className="product-sort-option" onClick={handleSelect}>
                  Giá (Thấp {"->"} Cao)
                </span>
                <span className="product-sort-option" onClick={handleSelect}>
                  Giá (Cao {"->"} Thấp)
                </span>
                <span className="product-sort-option" onClick={handleSelect}>
                  Từ (A {"->"} Z)
                </span>
                <span className="product-sort-option" onClick={handleSelect}>
                  Từ (Z {"->"} A)
                </span>
              </div>
            </div>
          </div>
          <div className="product-list">
            {products.length > 0 &&
              products.map((item) => (
                <ProductCard key={item.proId} item={item}></ProductCard>
              ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Trang sau >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Trang trước"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
    </div>
  );
};

function ProductFilter() {
  return (
    <div className="product-filter">
      {/* bọc ngoài có bg xanh nhạt, flex column */}

      <ProductFilterBlock title={"Hãng sản xuất"} label_content={"Logitech"} />
      <ProductFilterBlock title={"Loại sản phẩm"} label_content={"Bàn phím"} />
    </div>
  );
}

export default ProductList;

function ProductFilterBlock({ title, label_content }) {
  const [brand, setBrand] = useState("");
  const [brandQuery, setBrandQuery] = useState("");
  const { show, setShow, nodeRef } = useDropdown(
    ".product-filter-accordion",
    true
  );
  const [checked, setChecked] = useState(false);
  return (
    <div className="product-filter-container">
      <h1 className="product-filter-header">Lọc sản phẩm</h1>
      <div className="product-filter-block" ref={nodeRef}>
        {/* flex between */}
        <div
          className="product-filter-accordion"
          onClick={() => setShow(!show)}
        >
          <span className="product-filter-accordion-title">{title}</span>
          <i
            className={`fa-solid ${
              show ? "fa-angle-down" : "fa-angle-up"
            } product-filter-accordion-caret`}
          ></i>
        </div>
        <div
          className={`product-filter-accordion-content ${show ? "active" : ""}`}
        >
          {/* width 100% */}
          <form autoComplete="off" className="product-filter-accordion-form">
            <div className="product-filter-accordion-group">
              <input
                type="text"
                className="product-filter-accordion-input"
                placeholder="Tìm hãng sản xuất..."
                onChange={(e) => setBrand(e.target.value)}
              />
              <span className="product-filter-accordion-icon">
                <ion-icon name="search-outline"></ion-icon>
              </span>
            </div>
            <ul className="product-filter-accordion-list">
              {/* checkbox and text, flex */}
              <li className="product-filter-accordion-item">
                <input
                  type="radio"
                  name="brand"
                  id="brand"
                  className="product-filter-accordion-checkbox"
                  checked={checked ? true : false}
                  onChange={() => setChecked(!checked)}
                  onClick={() => setChecked(!checked)}
                />
                <label
                  htmlFor="brand"
                  className="product-filter-accordion-label"
                >
                  {label_content}
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
