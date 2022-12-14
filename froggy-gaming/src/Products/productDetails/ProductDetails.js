import React, { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useCart } from "../../contexts/cart-context";
import BrandSlider from "../../global/brandSlider/BrandSlider";
import SectionDivider from "../../global/sectionDivider/components/SectionDivider";
import RelatedProducts from "../productRelated/RelatedProducts";
import "./styles/productdetails.css";

const ProductDetails = () => {
  const { proId } = useParams();
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/${proId}`,
    fetcher
  );
  const popUpRef = useRef({});
  const { addedSuccess, addedFailed } = useCart();
  if (!data || !data.data) return null;
  const productSummary = data.data;
  const handleClosePopup = () => {
    popUpRef.current.classList.remove("active");
  };
  return (
    <div className="wrapper">
      <CartNotification
        addedSuccess={addedSuccess}
        addedFailed={addedFailed}
        popUpRef={popUpRef}
        handleClosePopup={handleClosePopup}
      />
      <ProductSummary item={productSummary}></ProductSummary>
      <SectionDivider
        sectionContent={"Thông tin sản phẩm"}
        marginBlock={"4rem"}
      ></SectionDivider>
      <ProductTabs item={productSummary}></ProductTabs>
      <SectionDivider
        sectionContent={"Sản phẩm liên quan"}
        marginBlock="1rem"
      ></SectionDivider>
      <RelatedProducts item={productSummary}></RelatedProducts>
      <SectionDivider
        sectionContent={"Các thương hiệu"}
        marginBlock="3rem"
      ></SectionDivider>
      <BrandSlider></BrandSlider>
    </div>
  );
};

const ProductSummary = ({ item, showPopup }) => {
  const { images } = item;
  return (
    // border-top padding flex
    <div className="summary">
      <ProductSummarySlider images={images}></ProductSummarySlider>
      <ProductSummaryInfo
        showPopup={showPopup}
        item={item}
      ></ProductSummaryInfo>
    </div>
  );
};

const ProductSummaryInfo = ({
  item,
  item: { proId, proName, proPrice, images },
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(proPrice);
  const product = { proId, proName, proPrice, images, quantity, totalPrice };

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
            {item.proStatus ? "Còn hàng" : "Hết hàng"}
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
          <span className="summary-product-text">Giá cũ: </span>
          <span className="summary-product-price summary-product-price--old">
            {(item.proPrice + 200000).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <div className="summary-product-pricedisplay">
          <span className="summary-product-text">Giá KM: </span>
          <span className="summary-product-price">
            {item.proPrice.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <button
          className="summary-product-buybutton"
          onClick={() => addToCart(product)}
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

const ProductTabs = ({ item }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleSelectTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs">
      <div className="tabs-list">
        <div
          className={`${activeTab === 1 ? "tabs-item active" : "tabs-item"}`}
          onClick={() => handleSelectTab(1)}
        >
          Thông số sản phẩm
        </div>
        <div
          className={`${activeTab === 2 ? "tabs-item active" : "tabs-item"}`}
          onClick={() => handleSelectTab(2)}
        >
          Chi tiết sản phẩm
        </div>
        <div
          className={`${activeTab === 3 ? "tabs-item active" : "tabs-item"}`}
          onClick={() => handleSelectTab(3)}
        >
          Video
        </div>
        <div
          className={`${activeTab === 4 ? "tabs-item active" : "tabs-item "}`}
          onClick={() => handleSelectTab(4)}
        >
          Reviews
        </div>
      </div>
      <div className="tabs-content">
        <div
          className={`${
            activeTab === 1 ? "tabs-content-inner active" : "tabs-content-inner"
          }`}
        >
          <ProductSpecification item={item}></ProductSpecification>
        </div>
        <div
          className={`${
            activeTab === 2 ? "tabs-content-inner active" : "tabs-content-inner"
          }`}
        >
          <ProductDescription item={item}></ProductDescription>
        </div>
        <div
          className={`${
            activeTab === 3 ? "tabs-content-inner active" : "tabs-content-inner"
          }`}
        >
          <div className="center">
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/husm2YMk26s"
              title="Trên tay Bàn phím không dây Akko 3068 Silent - Nhỏ mà có Võ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
// table hiển thị thông số
const ProductSpecification = ({ item }) => {
  return (
    <div className="specification">
      <h2 className="specification-header">
        Nhóm thuộc tính {item.category.cateName}
      </h2>
      <table className="specification-table">
        <tr className="specification-table-row">
          <td className="specification-table-title">Thương hiệu</td>
          <td className="specification-table-data">{item.brand.brandName}</td>
        </tr>
        <tr className="specification-table-row">
          <td className="specification-table-title">Bảo hành</td>
          <td className="specification-table-data">12 tháng</td>
        </tr>
        {item.productDetail.model && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Model</td>
            <td className="specification-table-data">
              {item.productDetail.model}
            </td>
          </tr>
        )}
        {item.productDetail.color && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Màu sắc</td>
            <td className="specification-table-data">
              {item.productDetail.color}
            </td>
          </tr>
        )}
        {item.productDetail.layout && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Layout</td>
            <td className="specification-table-data">
              {item.productDetail.layout}
            </td>
          </tr>
        )}
        {item.productDetail.connect && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Kết nối</td>
            <td className="specification-table-data">
              {item.productDetail.connect}
            </td>
          </tr>
        )}
        {item.productDetail.keyboardSwitch && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Loại switch</td>
            <td className="specification-table-data">
              {item.productDetail.keyboardSwitch}
            </td>
          </tr>
        )}
        {item.productDetail.led && (
          <tr className="specification-table-row">
            <td className="specification-table-title">LED</td>
            <td className="specification-table-data">
              {item.productDetail.led}
            </td>
          </tr>
        )}
        {item.productDetail.keyboardKeycap && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Keycap</td>
            <td className="specification-table-data">
              {item.productDetail.keyboardKeycap}
            </td>
          </tr>
        )}
        {item.productDetail.mouseSensor && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Mắt đọc</td>
            <td className="specification-table-data">
              {item.productDetail.mouseSensor}
            </td>
          </tr>
        )}
        {item.productDetail.mouseDpi && (
          <tr className="specification-table-row">
            <td className="specification-table-title">DPI</td>
            <td className="specification-table-data">
              {item.productDetail.mouseDpi}
            </td>
          </tr>
        )}
        {item.productDetail.specialFeature && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Hỗ trợ</td>
            <td className="specification-table-data">
              {item.productDetail.specialFeature}
            </td>
          </tr>
        )}
        {item.productDetail.compatible && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Tương thích</td>
            <td className="specification-table-data">
              {item.productDetail.compatible}
            </td>
          </tr>
        )}
        {item.productDetail.size && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Kích thước</td>
            <td className="specification-table-data">
              {item.productDetail.size}
            </td>
          </tr>
        )}
        {item.productDetail.weight && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Trọng lượng</td>
            <td className="specification-table-data">
              {item.productDetail.weight}
            </td>
          </tr>
        )}
        {item.productDetail.accessories && (
          <tr className="specification-table-row">
            <td className="specification-table-title">Phụ kiện</td>
            <td className="specification-table-data">
              {item.productDetail.accessories}
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};
// description của sản phẩm
const ProductDescription = ({ item }) => {
  // return <div className="description">{item.proDesc}</div>;
  return (
    <div className="description">
      <h2 className="description-header">
        Đánh giá chi tiết bàn phím AKKO 3068 v2 RGB White
      </h2>
      <p>
        AKKO 3068 v2 RGB White là dòng bàn phím AKKO thuộc series 3068 mới nhất.
        Đây là dòng bàn phím cơ sở hữu thiết kế nhỏ gọn với tone màu sang trọng
        và dễ dàng mang đi bất kỳ đâu thích hợp cho dân văn phòng và người dùng
        thích những góc máy chơi game, học tập theo phong cách "Minimal".
      </p>
      <img
        src="https://file.hstatic.net/1000026716/file/gearvn-ban-phim-akko-3068-v2-rgb-white-1_f94cd2a0e627464f8cb0fa8b24d138d2_grande.png"
        alt=""
        className="description-image"
      />
      <p>
        Được thiết kế với tone màu trắng chủ đạo, AKKO 3068 v2 RGB White sẽ là
        một trong những sự lựa chọn cho những góc máy sang trọng và vô cùng đẳng
        cấp.
      </p>
      <h2 className="description-header">Hỗ trợ thay nóng Switch</h2>
      <p>
        Một trong những điểm ấn tượng trên AKKO 3068 v2 RGB White chính là tính
        năng hỗ trợ thay nóng switch (hot swap, 5 pin), người dùng có thể thoải
        mái tự custom bàn phím để đáp ứng tốt nhu cầu sử dụng.{" "}
      </p>
      <img
        src="https://file.hstatic.net/1000026716/file/gearvn-ban-phim-akko-3068-v2-rgb-white-2_15f16ece63c54efbb5e265c33fd4d5ac_grande.png"
        alt=""
        className="description-image"
      />
      <h2 className="description-header">LED RGB nhiều chế độ tùy chỉnh</h2>
      <p>
        Để làm nổi bật không gian chơi game, học tập và làm việc. Akko đã trang
        bị trên dòng bàn phím cơ của mình hệ thống LED RGB với nhiều chế độ tùy
        chỉnh.
      </p>
      <img
        src="https://file.hstatic.net/1000026716/file/gearvn-ban-phim-akko-3068-v2-rgb-white-3_fa667b277da5496496a8b8e9b10e1968_grande.png"
        alt=""
        className="description-image"
      />
      <p>
        AKKO 3068 v2 RGB White dành được nhiều sự quan tâm vì là một trong những
        dòng bàn phím cơ giá rẻ trên thị trường được trang bị công nghệ SMD LED
        – Loại chip led có khả năng tản nhiệt tốt với hiệu suất phát quang cao
        chỉ có trên những dòng bàn phím cơ cao cấp.
      </p>
      <h2 className="description-header">
        Keycap PBT Double-Shot, công nghệ ASA profile
      </h2>
      <p>
        AKKO 3068 v2 RGB White được trang bị bộ Keycap với chất liệu PBT
        Double-Shot bạn hoàn toàn có thể yên tâm trong suốt quá trình sử dụng sẽ
        không còn lo về tình trạng mờ các ký tự trên phím bấm. Đặc biệt, với
        công nghệ ASA profile (Xuyên LED) sẽ làm chiếc bàn phím thêm phần ấn
        tượng khi mang đến bất kỳ đâu.
      </p>
      <h2 className="description-header">
        Sử dụng switch riêng biệt Akko CS switch
      </h2>
      <img
        src="https://file.hstatic.net/1000026716/file/gearvn-ban-phim-akko-3068-v2-rgb-white-5_2f02d5ba41aa41a3b07a76fc214b9caf_grande.png"
        alt=""
        className="description-image"
      />
      <p>
        Bàn phím Akko luôn mang đến cho người dùng nhiều sự lựa chọn phù hợp với
        nhu cầu sử dụng, với AKKO 3068 v2 RGB White cũng không ngoại lệ khi
        trang bị hai loại switch riêng biệt Akko CS switch (Jelly Pink / Jelly
        Purple).{" "}
      </p>
    </div>
  );
};

const ProductSummarySlider = ({ images }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="summary-images">
      <div className="summary-images-first">
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          fade={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
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
export default ProductDetails;

function CartNotification({
  addedSuccess,
  addedFailed,
  popUpRef,
  handleClosePopup,
}) {
  return (
    <div
      className={`popup ${addedSuccess ? "active success" : ""} ${
        addedFailed ? "active failed" : ""
      }`}
      ref={popUpRef}
    >
      <div className="popup-close" onClick={handleClosePopup}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="popup-content">
        <span className="popup-icon">
          <i
            className={`fa-regular ${addedSuccess && "fa-circle-check"} ${
              addedFailed && "fa-circle-xmark"
            }`}
          ></i>
        </span>
        {addedSuccess && (
          <span className="popup-text">Thêm vào giỏ hàng thành công</span>
        )}
        {addedFailed && (
          <span className="popup-text">
            Thêm vào giỏ hàng thất bại
            {!localStorage.getItem("roles")
              ? " (Vui lòng đăng nhập vào tài khoản của bạn)"
              : " (Sản phẩm đã tồn tại trong giỏ hàng)"}
          </span>
        )}
      </div>
    </div>
  );
}
