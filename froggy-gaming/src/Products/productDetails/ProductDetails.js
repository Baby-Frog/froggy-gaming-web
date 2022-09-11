import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import useSWR from "swr";
import { fetcher } from "../../config";
import "./styles/productdetails.css";

const ProductDetails = () => {
  const { proId } = useParams();
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/${proId}`,
    fetcher
  );
  if (!data || !data.data) return null;
  const productSummary = data.data;
  return (
    <div className="wrapper">
      <ProductSummary item={productSummary}></ProductSummary>
    </div>
  );
};

const ProductSummary = ({ item }) => {
  const { images } = item;
  return (
    // border-top padding flex
    <div className="summary">
      <ProductSummarySlider images={images}></ProductSummarySlider>
      <ProductSummaryInfo item={item}></ProductSummaryInfo>
    </div>
  );
};
const ProductSpecification = () => {
  return (
    <div className="specification">
      <span></span>
    </div>
  );
};
const ProductDescription = () => {
  return (
    <div className="description">
      <div>Hello</div>
      <div>cac</div>
      <div>ban</div>
    </div>
  );
};

const ProductSummaryInfo = ({ item }) => {
  console.log("log ~ ProductSummaryInfo ~ item", item);
  return (
    <div className="summary-info">
      <div className="summary-product-name">{item.proName}</div>

      <div className="summary-product-general">Thông tin chung:</div>
      <ul className="summary-product-list">
        <li className="summary-product-item">
          <span className="summary-product-title">Hãng sản xuất:</span>
          <span className="summary-product-text summary-product-text--uppercase">
            {item.brand.brandName}
          </span>
        </li>
        <li className="summary-product-item">
          <span className="summary-product-title">Tình trạng: </span>
          <span className="summary-product-text">
            {item.prostatus ? "Còn hàng" : "Hết hàng"}
          </span>
        </li>
        <li className="summary-product-item">
          <span className="summary-product-title">Bảo hành: </span>
          <span className="summary-product-text">12 tháng</span>
        </li>
        <li className="summary-product-item">
          {item.category.cateName === "Bàn phím" && (
            <span className="summary-product-title">Switch: </span>
          )}
          {item.category.cateName === "Chuột" && (
            <span className="summary-product-title">Kết nối: </span>
          )}
          {item.productDetail.keyboardSwitch !== null && (
            <span className="summary-product-text">
              {item.productDetail.keyboardSwitch}
            </span>
          )}
          {item.productDetail.mouseSensor !== null && (
            <span className="summary-product-text">
              {item.productDetail.connect}
            </span>
          )}
        </li>
      </ul>
      <div className="summary-product-buy">
        <div className="summary-product-pricedisplay">
          <span className="summary-product-text">Giá: </span>
          <span className="summary-product-price">
            {item.proPrice.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <button className="summary-product-buybutton">Đặt hàng</button>
      </div>
    </div>
  );
};

const ProductSummarySlider = ({ images }) => {
  console.log(images);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="summary-images">
      <div className="summary-images-first">
        <Slider
          asNavFor={nav2}
          arrows={false}
          ref={(slider1) => setNav1(slider1)}
          fade={true}
        >
          {images.length > 0 &&
            images.map((item) => (
              <ProductSummaryMainImage
                key={item.imgId}
                item={item}
              ></ProductSummaryMainImage>
            ))}
        </Slider>
      </div>
      <div className="summary-images-second">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={images.length}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {images.length > 0 &&
            images.map((item) => (
              <ProductSummaryBottomImages
                key={item.imgId}
                item={item}
              ></ProductSummaryBottomImages>
            ))}
        </Slider>
      </div>
    </div>
  );
};

const ProductSummaryMainImage = ({ item }) => {
  return (
    <div className="summary-images-main">
      <img
        src={item.imgPath.replaceAll("-", "")}
        alt=""
        className="summary-images-main-image"
      />
    </div>
  );
};

const ProductSummaryBottomImages = ({ item }) => {
  return (
    <div className="summary-images-bottom">
      <img
        src={item.imgPath.replaceAll("-", "")}
        alt=""
        className="summary-images-bottom-image"
      />
    </div>
  );
};
export default ProductDetails;
