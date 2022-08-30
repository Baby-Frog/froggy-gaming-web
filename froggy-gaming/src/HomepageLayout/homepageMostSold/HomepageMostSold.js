import React from "react";
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

const HomepageMostSoldItem = ({
  info: { name, img_url, latest_price, old_price, sale },
}) => {
  const { hovered, nodeRef } = useHover();
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
          <a href="https://www.google.com" className="mostsold-buy">
            Mua ngay
          </a>
        ) : (
          <div className="mostsold-detail">
            <div className="mostsold-rate">
              <div className="mostsold-star">
                {Array(5).fill(<i class="fa-solid fa-star"></i>)}
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
