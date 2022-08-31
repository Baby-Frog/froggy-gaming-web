import React from "react";
import { useNavigate } from "react-router-dom";
import useHover from "../../hooks/useHover";
import { HomepageMostSoldData } from "./HomepageMostSoldData";
import "./styles/mostsold.css";

const HomepageMostSold = () => {
  return (
    <div className="mostsold">
      {HomepageMostSoldData.map((item) => (
        <HomepageMostSoldItem key={item.id} info={item}></HomepageMostSoldItem>
      ))}
    </div>
  );
};

const iconId = [1, 2, 3, 4, 5];

const HomepageMostSoldItem = ({ info }) => {
  const { hovered, nodeRef } = useHover();
  const { id, name, img_url, latest_price, old_price, sale } = info;
  const navigate = useNavigate();
  return (
    <div className="mostsold-item" ref={nodeRef}>
      <div className="mostsold-percent">
        <div className="mostsold-sale">{sale}</div>
      </div>
      <img src={img_url} alt="" className="mostsold-image" />
      {/* content below */}
      <div className="mostsold-content">
        <div className="mostsold-name">{name}</div>
        {/* flex justify-between */}
        {hovered ? (
          <button
            onClick={() => navigate(`/san-pham/${id}`)}
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
              <span className="mostsold-price-latest">{latest_price}</span>
              <span className="mostsold-price-old">{old_price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomepageMostSold;
