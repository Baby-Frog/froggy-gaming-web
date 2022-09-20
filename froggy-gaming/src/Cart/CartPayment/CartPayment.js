import React from "react";
import "./styles/cartpayment.css";
import axios from "axios";
import { useState } from "react";
import { useCart } from "../../contexts/cart-context";
import Logo from "../../assets/froggy-gaming-icon-2.png";
const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CartPayment = () => {
  const [userFormData, setUserFormData] = useState({
    fullName: `${localStorage.getItem("firstname")} ${localStorage.getItem(
      "lastname"
    )}`,
    email: localStorage.getItem("email"),
    phoneNumber: localStorage.getItem("phoneNumber"),
    address: localStorage.getItem("address"),
  });
  const [buySuccess, setBuySuccess] = useState(false);
  const handleInputChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <CartNotification
        buySuccess={buySuccess}
        setBuySuccess={setBuySuccess}
        setUserFormData={setUserFormData}
      ></CartNotification>
      <div className="cart">
        <div className="cart-left">
          <CartProcess />
          <CartForm
            userFormData={userFormData}
            setUserFormData={setUserFormData}
            handleInputChange={handleInputChange}
          />
        </div>
        <CartDetails
          userFormData={userFormData}
          setUserFormData={setUserFormData}
          buySuccess={buySuccess}
          setBuySuccess={setBuySuccess}
        />
      </div>
    </>
  );
};

const CartProcess = () => {
  return (
    <div className="cart-process">
      <div className="process process_active">
        <span>1.Chọn sản phẩm</span>
      </div>
      <div className="process process_active">
        <span>2.Xác nhận đơn hàng</span>
      </div>
      <div className="process">
        <span>3.Thanh toán</span>
      </div>
    </div>
  );
};

const CartForm = ({ userFormData, setUserFormData, handleInputChange }) => {
  // const [fullname, setFullname] = useState(
  //   localStorage.getItem("firstname") + " " + localStorage.getItem("lastname")
  // );
  // const [email, setEmail] = useState(localStorage.getItem("email"));
  // const [phoneNumber, setPhoneNumber] = useState(
  //   "0" + localStorage.getItem("phoneNumber")
  // );
  // const [address, setAddress] = useState(localStorage.getItem("address"));

  return (
    <div>
      <h3 className="cart-form-header">Thông tin cá nhân</h3>
      <div className="cart-form-required">
        <span className="cart-form-star">*</span> Trường bắt buộc
      </div>
      <form autoComplete="off">
        <div className="cart-form-group">
          <label htmlFor="name">Họ tên quý khách:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Nhập vào họ và tên của bạn"
            defaultValue={userFormData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="cart-form-group">
          <label htmlFor="email">Địa chỉ email:</label>
          <input
            type="text"
            name="email"
            placeholder="Nhập vào email của bạn"
            defaultValue={userFormData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="cart-form-group">
          <label htmlFor="name">Số điện thoại:</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Nhập vào số điện thoại của bạn"
            defaultValue={userFormData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="cart-form-group">
          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            name="address"
            placeholder="Nhập vào địa chỉ của bạn"
            defaultValue={userFormData.address}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

const CartDetails = ({ userFormData, setBuySuccess }) => {
  const { cartItems } = useCart();
  const [error, setError] = useState(false);
  const handleValidate = () => {
    console.log(userFormData);
    if (userFormData.fullName.trim().length <= 0) {
      setError("Vui lòng nhập đầy đủ thông tin trước khi xác nhận thanh toán");
      return;
    } else if (!emailRegex.test(userFormData.email.trim())) {
      setError("Email của bạn không hợp lệ, vui lòng sử dụng email khác");
      return;
    } else if (userFormData.phoneNumber.trim().length <= 0) {
      setError("Vui lòng nhập đầy đủ thông tin trước khi xác nhận thanh toán");
      return;
    } else if (userFormData.address.trim().length <= 0) {
      setError("Vui lòng nhập đầy đủ thông tin trước khi xác nhận thanh toán");
      return;
    } else {
      setError("");
      setBuySuccess(true);
    }
  };
  return (
    <div className="cart-details">
      <h2 className="cart-details-header">Thông tin giỏ hàng</h2>
      <div className="cart-details-amountdisplay">
        <span className="cart-details-amounttitle">
          Số lượng sản phẩm mỗi loại
        </span>

        <span className="cart-details-amount">{cartItems.length} sản phẩm</span>
      </div>
      <div className="cart-details-amountdisplay">
        <span className="cart-details-amounttitle">Tổng số lượng sản phẩm</span>

        <span className="cart-details-amount">
          <span className="cart-details-amount">
            {cartItems.reduce(
              (partialSum, item) => partialSum + item.quantity,
              0
            )}{" "}
            sản phẩm
          </span>
        </span>
      </div>
      <div className="cart-details-amountdisplay">
        <span className="cart-details-amounttitle">Giá tiền</span>

        <span className="cart-details-amount price">
          {cartItems
            .reduce((partialSum, item) => partialSum + item.totalPrice, 0)
            .toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
        </span>
      </div>
      <div className="cart-details-vat">Đã bao gồm VAT (nếu có)</div>
      <div className="cart-details-list">
        {cartItems.length > 0 &&
          cartItems.map((item, key) => (
            <div className="cart-details-item" key={key}>
              <div className="cart-details-item-name">- {item.proName}</div>
              <div className="cart-details-item-price">
                Giá tiền:
                {item.totalPrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>
          ))}
      </div>
      {error && <div className="cart-details-error">{error}</div>}
      <button className="cart-details-button" onClick={handleValidate}>
        Xác nhận mua hàng
      </button>
    </div>
  );
};

const CartNotification = ({ buySuccess, setBuySuccess, setUserFormData }) => {
  const { removeAllFromCart } = useCart();
  const handleCloseNotification = () => {
    setUserFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setBuySuccess(false);
    removeAllFromCart();
    window.location.reload(false);
  };
  return (
    <>
      {buySuccess && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modal-close" onClick={handleCloseNotification}>
              X
            </div>
            <img
              src="https://www.tncstore.vn/catalog/view/theme/default/image/checkout-success.png"
              alt=""
              className="modal-success"
            />
            <div className="modal-flex">
              <div className="modal-text">
                Đặt hàng thành công, chúng tôi sẽ sớm liên hệ tới bạn
              </div>
              <img src={Logo} alt="" className="modal-logo" />
            </div>
            <span className="modal-desc">
              Đơn hàng của bạn đã được ghi nhận thành công. Bộ phận CSKH của
              Froggy Gaming sẽ liên hệ lại để xác nhận đơn hàng từ 09:00 tới
              18:30. Chân thành cảm ơn quý khách đã tin tưởng và lựa chọn Froggy
              Gaming!
            </span>
          </div>
        </div>
      )}
    </>
  );
};
export default CartPayment;
