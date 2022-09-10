import React from "react";
import { Link } from "react-router-dom";
import SectionDivider from "../../global/sectionDivider/components/SectionDivider";
import BrandSlider from "../../global/brandSlider/BrandSlider";
import CategoryList from "../CategoryList/CategoryList";
import CategoryQuote from "../CategoryQuote/CategoryQuote";
import "./styles/CategoryContainer.css";

const CategoryContainer = () => {
  return (
    <div className="wrapper">
      <div className="cat-list">
        <span>
          <Link to={"/"}>Trang chủ</Link>
        </span>
        <span>{">"}</span>
        <span>
          <Link to={"/danh-muc"}> Danh mục</Link>
        </span>
      </div>
      <CategoryQuote></CategoryQuote>
      <SectionDivider
        sectionContent={"Gaming Gear"}
        marginBlock={"2rem"}
      ></SectionDivider>
      <CategoryList></CategoryList>
      <SectionDivider
        sectionContent={"Các thương hiệu"}
        marginBlock={"2rem"}
      ></SectionDivider>
      <BrandSlider></BrandSlider>
    </div>
  );
};

export default CategoryContainer;
