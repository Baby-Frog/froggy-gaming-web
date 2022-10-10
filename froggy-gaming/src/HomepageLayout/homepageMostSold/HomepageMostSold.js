import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

import "./styles/mostsold.css";
import ProductCard from "../../global/products/ProductCard";
import Slider from "react-slick";

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

const HomepageMostSold = () => {
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/page=1`,
    fetcher
  );
  if (!data || !data.data || !data.data.content) return;
  const mostSold = data?.data?.content || [];

  const settings = {
    infinite: true,
    speed: 500,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 100,
          slidesToShow: 2,
          swipeToSlide: true,
          ease: false,
        },
      },
    ],
  };
  return (
    <div className="brand">
      <Slider {...settings}>
        {mostSold.length > 0 &&
          mostSold.map((item) => (
            <ProductCard key={item.proId} item={item}></ProductCard>
          ))}
      </Slider>
    </div>
  );
};

export default HomepageMostSold;
