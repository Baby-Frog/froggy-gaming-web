import React from "react";
import { Link } from "react-router-dom";
import SectionDivider from "../../global/sectionDivider/components/SectionDivider";
import BrandSlider from "../../HomepageLayout/brandSlider/BrandSlider";
import CategoryList from "../CategoryList/CategoryList";
import CategoryQuote from "../CategoryQuote/CategoryQuote";
import "./styles/CategoryContainer.css";

const CategoryContainer = () => {
  return (
    <div className="wrapper">
      <div className="cat-list">
        <p>
          <Link to={"/froggy-gaming-web"}>Trang chủ</Link>
        </p>
        <p>{">"}</p>
        <p>
          <Link to={"/category"}> Danh mục</Link>
        </p>
      </div>
      <CategoryQuote></CategoryQuote>
      <SectionDivider sectionContent={"Gaming Gear"}></SectionDivider>
      <CategoryList></CategoryList>
      <SectionDivider sectionContent={"Các thương hiệu"}></SectionDivider>
      <BrandSlider></BrandSlider>
    </div>
  );
};

export default CategoryContainer;
