import React from "react";
import { Link } from "react-router-dom";
import BrandSlider from "../../global/brandSlider/BrandSlider";
import NewsPost from "../NewsPost/NewsPost";

import "./Styles/NewsContainer.css";

const News = () => {
  return (
    <div className="wrapper">
      <div className="news-list">
        <p>
          <Link to={"/"}>Trang chủ</Link>
        </p>
        <p>{">"}</p>
        <p>
          <Link to={"/tin-tuc"}>Tin tức </Link>
        </p>
      </div>
      <NewsPost></NewsPost>
    </div>
  );
};

export default News;
