import React from "react";
import { Fragment } from "react";
import ShowMore from "../../../global/ShowMore/ShowMore";
import BrandSlider from "../../../global/brandSlider/BrandSlider";
import HomepageCategory from "../../homepageCategory/components/HomepageCategory";
import HomepageEvent from "../../homepageEvent/components/HomepageEvent";
import SlickSlider from "../../homepageSlider/components/SlickSlider";
import SectionDivider from "../../../global/sectionDivider/components/SectionDivider";
import "../assets/homepagecontainer.css";
import OutstandingProducts from "../../homepageOutstanding/components/OutstandingProducts";
import HomepageMostSold from "../../homepageMostSold/HomepageMostSold";

const HomepageContainer = () => {
  return (
    <Fragment>
      {/* Slider Showcase */}
      <SlickSlider></SlickSlider>
      <div className="wrapper">
        <SectionDivider
          sectionContent={"Chương trình và sự kiện"}
          marginBlock={"1.5rem"}
        ></SectionDivider>
        \<HomepageEvent></HomepageEvent>
        {/* Danh mục sản phẩm */}
        <SectionDivider
          sectionContent={"Danh mục sản phẩm"}
          marginBlock={"3.5rem"}
        ></SectionDivider>
        <HomepageCategory></HomepageCategory>
        {/* Sản phẩm nổi bật */}
        <SectionDivider
          sectionContent={"Sản phẩm nổi bật"}
          marginBlock={"5rem"}
        ></SectionDivider>
        <OutstandingProducts></OutstandingProducts>
        <ShowMore></ShowMore>
        {/* Sản phẩm bán chạy */}
        <SectionDivider
          sectionContent={"Sản phẩm bán chạy"}
          marginBlock="1rem"
        ></SectionDivider>
        <HomepageMostSold></HomepageMostSold>
        <ShowMore></ShowMore>
        {/* Tin tức Froggy Gaming */}
        {/* brandSlider */}
        <SectionDivider
          sectionContent={"Các thương hiệu"}
          marginBlock="1rem"
        ></SectionDivider>
        <BrandSlider></BrandSlider>
        {/* homepageFeedback */}
        <SectionDivider
          sectionContent={"Đánh giá từ khách hàng"}
          marginBlock="1rem"
        ></SectionDivider>
      </div>
    </Fragment>
  );
};

export default HomepageContainer;
