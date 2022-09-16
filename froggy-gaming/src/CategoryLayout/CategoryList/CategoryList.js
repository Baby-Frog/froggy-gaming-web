import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import "./styles/CategoryList.css";
import { useSearch } from "../../contexts/search-context";
import Logo from "../../assets/froggy-gaming-icon-2.png";

const CategoryList = () => {
  const { data } = useSWR(`http://localhost:8386/api/v1/category`, fetcher);
  const { handleNavigateCategory } = useSearch();
  if (!data) return;
  const categories =
    data.data.sort((a, b) => (a.cateId > b.cateId ? 1 : -1)) || [];

  return (
    <div className="cat-content">
      {categories.map((item) => (
        <span
          key={item.cateId}
          onClick={() => handleNavigateCategory(item.cateName)}
          className="cat-items"
        >
          <span className="cat-text">{item.cateName}</span>
          <img src={Logo} alt="" className="cat-image" />
        </span>
      ))}
    </div>
  );
};

export default CategoryList;
