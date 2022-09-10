import { useNavigate } from "react-router-dom";
import useHover from "../../hooks/useHover";
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
      <img
        src={`${images[0].imgPath.replaceAll("-", "")}`}
        alt=""
        className="product-image"
      />
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

export default ProductCard;
