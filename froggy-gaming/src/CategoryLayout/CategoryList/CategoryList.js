import React from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../../config";
import "./styles/CategoryList.css";
import { useSearch } from "../../contexts/search-context";

const CategoryList = () => {
  const { data } = useSWR(`http://localhost:8386/api/v1/category`, fetcher);
  const { query, setSearchParam } = useSearch();
  const navigate = useNavigate();
  if (!data) return;
  const categories =
    data.data.sort((a, b) => (a.cateId > b.cateId ? 1 : -1)) || [];
  console.log("log ~ CategoryList ~ categories", categories);
  const handleChooseCategory = () => {
    setSearchParam({
      query: categories.find((item) => item.cateName),
    });
    navigate(`/chi-tiet?query=${query}`);
  };
  return (
    <div className="cat-content">
      {categories.map((item) => (
        <span
          key={item.cateId}
          onClick={handleChooseCategory}
          className="cat-items"
        >
          <span className="cat-text">{item.cateName}</span>
        </span>
      ))}
    </div>
  );
};

export default CategoryList;
