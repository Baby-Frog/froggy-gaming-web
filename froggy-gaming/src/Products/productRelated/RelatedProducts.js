import React from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import Slider from "react-slick";
import ProductCard from "../../global/products/ProductCard";

const RelatedProducts = ({ item }) => {
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/search/query=&page=1/cate-id=${item.category.cateId}`,
    fetcher
  );
  if (!data) return;
  const relatedProducts = data?.data?.content || [];

  const settings = {
    infinite: true,
    speed: 500,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <div className="related">
      <Slider {...settings}>
        {relatedProducts.length > 0 &&
          relatedProducts.map((item) => (
            <ProductCard key={item.proId} item={item}></ProductCard>
          ))}
      </Slider>
    </div>
  );
};

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

export default RelatedProducts;
