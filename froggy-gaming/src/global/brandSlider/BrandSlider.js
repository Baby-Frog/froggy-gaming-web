import React, { Component } from "react";
import Slider from "react-slick";
import "./styles/brandslider.css";
import "slick-carousel/slick/slick.css";
import { BrandSliderData } from "./BrandSliderData";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"brand-next-arrow"} onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="brand-prev-arrow" onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};

const BrandSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 100,
          slidesToShow: 3,
          swipeToSlide: true,
          ease: false,
        },
      },
    ],
  };
  return (
    <div className="brand">
      <Slider {...settings}>
        {BrandSliderData.length > 0 &&
          BrandSliderData.map((item) => (
            <BrandItem key={item.id} image={item.brand_logo}></BrandItem>
          ))}
      </Slider>
    </div>
  );
};

function BrandItem({ image }) {
  return (
    <div className="brand-image">
      <img src={image} alt="Logo" />
    </div>
  );
}

export default BrandSlider;
