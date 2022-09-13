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
  // Giải thích code:
  // relatedProducts = là 1 mảng, chứa các sản phẩm có cateId giống với sản phẩm mà bạn đang coi trên web (lấy ra từ data ở trên)
  const relatedProducts = data?.data?.content || [];
  // Theo lẽ hiểu thông thường, thì danh sách chứa các sản phẩm liên quan không được bao gồm sản phẩm hiện tại mà người dùng đang xem
  // Nếu danh sách các sản phẩm liên quan lại có sản phẩm mà người dùng đang xem thì nghe nó ngáo quá nên tôi filter các sản phẩm có proId khác với sản phẩm hiện tại
  const existedItems = relatedProducts.filter(
    (currentItems) => currentItems.proId !== item.proId
  );

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
        {existedItems.length > 0 &&
          existedItems.map((item) => (
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
