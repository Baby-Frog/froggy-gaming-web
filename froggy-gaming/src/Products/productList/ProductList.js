import React, { useEffect, useRef } from "react";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useSearch } from "../../contexts/search-context";
import useScrolled from "../../hooks/useScrolled";

const ProductList = () => {
  const { query, setQuery } = useSearch();
  const [nextPage, setNextPage] = useState(1);
  const { height, setIsScrolled } = useScrolled(300);
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/search/query=${query}`,
    fetcher
  );

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
  const products = data?.data || [];
  return (
    <>
      {products.length > 0 &&
        products.map((item) => (
          <ProductCard key={item.proId} item={item}></ProductCard>
        ))}
    </>
  );
};

const ProductFilter = () => {};

const ProductCard = ({ item }) => {
  return (
    <>
      <span>{item.proName}</span>
    </>
  );
};

export default ProductList;
