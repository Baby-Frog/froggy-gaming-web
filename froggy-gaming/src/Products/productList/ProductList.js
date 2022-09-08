import React, { useEffect, useRef } from "react";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useSearch } from "../../contexts/search-context";
import ProductCard from "../../global/products/ProductCard";
import useScrolled from "../../hooks/useScrolled";
import "./styles/productlist.css";

const ProductList = () => {
  const { query, url, setQuery } = useSearch();
  const [nextPage, setNextPage] = useState(1);
  const { height, setIsScrolled } = useScrolled(300);
  const { data } = useSWR(url, fetcher);

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
  if (!data || !data.data) return;
  console.log(data.data);
  const products = data?.data || [];
  return (
    <div className="wrapper">
      <div className="product">
        <ProductFilter></ProductFilter>
        <div className="product-section">
          <h3 className="product-found">Tìm kiếm - {url.split("=").pop()}</h3>
          <div className="product-list">
            {products.length > 0 &&
              products.map((item) => (
                <ProductCard key={item.proId} item={item}></ProductCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function ProductFilter() {
  return (
    <div className="product-filter">
      <h1>Lọc sản phẩm</h1>
    </div>
  );
}

export default ProductList;
