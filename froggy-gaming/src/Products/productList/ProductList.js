import React, { useEffect, useRef } from "react";
import { useSearch } from "../../contexts/search-context";
import useScrolled from "../../hooks/useScrolled";

const ProductList = () => {
  const { query, setQuery } = useSearch();
  console.log("log ~ ProductList ~ query", query);
  const { height, setIsScrolled } = useScrolled(300);
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
  return <div></div>;
};

export default ProductList;
