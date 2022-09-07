import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavigate } from "react-router-dom";
import useHover from "../../hooks/useHover";
import { HomepageMostSoldData } from "./HomepageMostSoldData";
import "./styles/mostsold.css";

const HomepageMostSold = () => {
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/page=1`,
    fetcher
  );
  if (!data) return;
  const mostSoldProducts = data?.content || [];

  return (
    <div className="mostsold">
      {mostSoldProducts.map((item) => (
        <HomepageMostSoldItem key={item.id} info={item}></HomepageMostSoldItem>
      ))}
    </div>
  );
};

const HomepageMostSoldItem = ({ info }) => {
  const { hovered, nodeRef } = useHover();
  const { proId, proName, proPrice, images } = info;
  const navigate = useNavigate();
  return (
    <div className="mostsold-item" ref={nodeRef}>
      <div className="mostsold-percent">
        <div className="mostsold-sale">12%</div>
      </div>
      <img
        src={`${images[0].imgPath.replaceAll("-", "")}`}
        alt=""
        className="mostsold-image"
      />
      {/* content below */}
      <div className="mostsold-content">
        <div className="mostsold-name">{proName}</div>
        {/* flex justify-between */}
        {hovered ? (
          <button
            onClick={() => navigate(`/san-pham/${proId}`)}
            className="mostsold-buy"
          >
            Mua ngay
          </button>
        ) : (
          <div className="mostsold-detail">
            <div className="mostsold-rate">
              <div className="mostsold-star">
                {/* {Array(5).fill(
                  <i key={} className="fa-solid fa-star"></i>
                )} */}
                {/* cái trên bị lỗi each children in a list should have a key props nên sử dụng cái dưới kiếm được ở stackoverflow */}
                {Array.from(Array(5), (_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
              <div className="mostsold-ratecount">0 đánh giá</div>
            </div>
            <div className="mostsold-price">
              <span className="mostsold-price-latest">{proPrice}₫</span>
              <span className="mostsold-price-old">{proPrice}₫</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomepageMostSold;
