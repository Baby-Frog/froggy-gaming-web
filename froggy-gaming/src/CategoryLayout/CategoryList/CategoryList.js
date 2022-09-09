import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import "./styles/CategoryList.css";
import Acer from "../asset/img/laptop-acer.png";
import Dell from "../asset/img/laptop-dell.png";
import Gaming from "../asset/img/laptop-dell-alien.png";
import Macbook from "../asset/img/macbook.png";
import Gigabyte from "../asset/img/laptop-gigibyte.png";
import Msi from "../asset/img/laptop-ms.png";
const CategoryImage = [
  {
    id: 1,
    img_url: Acer,
  },
  {
    id: 2,
    img_url: Dell,
  },
];
const CategoryList = () => {
  const { data } = useSWR(`http://localhost:8386/api/v1/category`, fetcher);
  if (!data) return;
  const categories = data.sort((a, b) => (a.cateId > b.cateId ? 1 : -1)) || [];
  return (
    <div className="cat-content">
      {categories.map((item) => (
        <a
          href="https://www.google.com"
          key={item.cateId}
          className="cat-items"
        >
          <span className="cat-text">{item.cateName}</span>
          <img src={Acer} alt="" className="cat-image" />
        </a>
      ))}
    </div>
  );
};

export default CategoryList;
