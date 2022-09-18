import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useHover from "../../hooks/useHover";
import LoadingSkeleton from "../SkeletonLoading/LoadingSkeleton";
import "./styles/productcard.css";

const ProductCard = ({ item }) => {
  const { hovered, nodeRef } = useHover();
  const { proId, proName, proPrice, images } = item;
  const navigate = useNavigate();
  return (
    <div
      className="product-item"
      ref={nodeRef}
      onClick={() => navigate(`/san-pham/${proId}`)}
    >
      <div className="product-percent">
        <div className="product-sale">20%</div>
      </div>
      <div className="product-image">
        <img src={`${images[0].imgPath.replaceAll("-", "")}`} alt="" />
      </div>
      {/* content below */}
      <div className="product-content">
        <div className="product-name">{proName}</div>
        {/* flex justify-between */}
        {hovered ? (
          <button className="product-buy">Mua ngay</button>
        ) : (
          <div className="product-detail">
            <div className="product-rate">
              <div className="product-star">
                {/* {Array(5).fill(
                    <i key={} className="fa-solid fa-star"></i>
                  )} */}
                {/* cái trên bị lỗi each children in a list should have a key props nên sử dụng cái dưới kiếm được ở stackoverflow */}
                {Array.from(Array(5), (_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
              <div className="product-ratecount">0 đánh giá</div>
            </div>
            <div className="product-price">
              <span className="product-price-latest">
                {proPrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <span className="product-price-old">{proPrice}₫</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="product-item">
      <LoadingSkeleton height="370px" radius="0px"></LoadingSkeleton>

      <div className="product-content">
        <LoadingSkeleton
          width="300px"
          height="17px"
          radius="0px"
        ></LoadingSkeleton>

        <div className="product-detail">
          <div className="product-rate">
            <div className="product-star">
              <LoadingSkeleton
                width="100px"
                height="12px"
                marginTop="5px"
              ></LoadingSkeleton>
            </div>
            <LoadingSkeleton
              width="50px"
              height="12px"
              marginTop="5px"
            ></LoadingSkeleton>
          </div>
          <div className="product-price">
            <LoadingSkeleton
              height="10px"
              width="100px"
              marginTop="5px"
            ></LoadingSkeleton>
            <LoadingSkeleton
              height="10px"
              width="100px"
              marginTop="5px"
            ></LoadingSkeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
