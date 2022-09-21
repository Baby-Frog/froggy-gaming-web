import React, { useEffect } from "react";
import Money from "../asset/images/tien-mat.png";
import InternetMoney from "../asset/images/internet-bank.png";
import Card from "../asset/images/mastercard.png";
import Visa from "../asset/images/visa.png";
import "./styles/CartBasket.css";
import { useCart } from "../../contexts/cart-context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CartBasket = () => {
  return (
    <div className="cart">
      <div className="cart-left">
        <CartProcess />
        <CartProduct />
      </div>
      <CartPrices />
    </div>
  );
};

function CartProcess() {
  return (
    <div className="cart-process">
      <div className="process process_active">
        <span>1.Chọn sản phẩm</span>
      </div>
      <div className="process">
        <span>2.Xác nhận đơn hàng</span>
      </div>
      <div className="process">
        <span>3.Thanh toán</span>
      </div>
    </div>
  );
}

function CartProduct() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="cart-product">
      <div className="cart-header">
        <div className="cart-title">THÔNG TIN SẢN PHẨM</div>
        {cartItems.map((item) => (
          <CartItems
            key={item.proId}
            item={item}
            navigate={navigate}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}

function CartPrices() {
  const navigate = useNavigate();
  const { cartItems, removeAllFromCart } = useCart();

  const [orderId, setOrderId] = useState("");
  const [quantityOrder, setQuantityOrder] = useState("");
  const [totalPriceOrder, setTotalPriceOrder] = useState("");

  let totalPrice = 0;
  let productQuantity = 0;
  cartItems.forEach((element) => {
    totalPrice += element.totalPrice;
    productQuantity += element.quantity;
  });

  useEffect(() => {
    setQuantityOrder(productQuantity);
    setTotalPriceOrder(totalPrice);
  }, [totalPrice, productQuantity]);

  useEffect(() => {
    if (orderId !== "") {
      addOrderToCustomer();
    }
  }, [orderId]);

  // api
  const CREATE_NEW_ORDER_API = `http://localhost:8386/api/v1/order/save`;
  const ADD_ORDER_TO_CUSTOMER_API = `http://localhost:8386/api/v1/order/add-to-customer`;

  // form
  const createNewOrderForm = JSON.stringify({
    quantity: quantityOrder,
    totalPrice: totalPriceOrder,
  });

  const cusUsername = localStorage.getItem("username");
  const addOrderToCustomerForm = JSON.stringify({
    username: cusUsername,
    orderId: orderId,
  });

  // config
  const token = localStorage.getItem("accessToken");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // function
  const createNewOrder = async () => {
    const response = await axios.post(
      CREATE_NEW_ORDER_API,
      createNewOrderForm,
      axiosConfig
    );
    console.log(response);
    setOrderId(response.data.data.id);
  };

  const addOrderToCustomer = async () => {
    console.log(addOrderToCustomerForm);
    const response = await axios.post(
      ADD_ORDER_TO_CUSTOMER_API,
      addOrderToCustomerForm,
      axiosConfig
    );
    console.log(response);
  };

  const handleConfirmCart = async () => {
    if (cartItems.length > 0) {
      await createNewOrder();
      // navigate("/gio-hang/xac-nhan");
    }
  };

  return (
    <div className="cart-total__prices">
      <div className="cart-prices">
        <div className="cart-prices__title">THÔNG TIN GIỎ HÀNG</div>
        <div>
          Số lượng sản phẩm mỗi loại
          <span className="count">{cartItems.length} sản phẩm</span>
        </div>
        <div>
          Tổng số sản phẩm trong giỏ
          <span className="count">
            {cartItems.reduce(
              (partialSum, item) => partialSum + item.quantity,
              0
            )}{" "}
            sản phẩm
          </span>
        </div>
        <div>
          Tổng chi phí
          <span className="prices">
            {cartItems
              .reduce((partialSum, item) => partialSum + item.totalPrice, 0)
              .toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
          </span>
        </div>
        <button
          className={`go-checkout ${cartItems.length > 0 && "active"}`}
          onClick={handleConfirmCart}
        >
          Xác nhận đơn hàng
        </button>

        <button className="delete-cart" onClick={removeAllFromCart}>
          Xóa giỏ hàng
        </button>
      </div>
      <div className="cart-info">
        <div className="info">
          <div>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#27AE60"
              ></path>
              <path
                d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
            <span>Hỗ trợ trả góp 0%, trả trước 0đ</span>
          </div>
          <div>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#27AE60"
              ></path>
              <path
                d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
            <span>Hoàn tiền 200% khi phát hiện hàng giả</span>
          </div>
          <div>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#27AE60"
              ></path>
              <path
                d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
            <span>Giao hàng nhanh 3H nội thành Hà Nội</span>
          </div>
          <div>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#27AE60"
              ></path>
              <path
                d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
            <span>Giao hàng từ 5 - 7 ngày toàn quốc</span>
          </div>
          <div>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#27AE60"
              ></path>
              <path
                d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
            <span>Đội ngũ kĩ thuật hỗ trợ online 7/7</span>
          </div>
        </div>
        <div className="bank">
          <img src={Money} alt="" />
          <img src={InternetMoney} alt="" />
          <img src={Card} alt="" />
          <img src={Visa} alt="" />
        </div>
      </div>
    </div>
  );
}

function CartItems({ navigate, item, removeFromCart }) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-item" key={item.proId}>
      <div
        className="cart-image"
        onClick={() => navigate(`/san-pham/${item.proId}`)}
      >
        <img src={item.images[0].imgPath.replaceAll("-", "")} alt="" />
      </div>
      {/* flex flex-col */}
      <div className="cart-summary">
        <>
          <div
            className="cart-productname"
            onClick={() => navigate(`/san-pham/${item.proId}`)}
          >
            {item.proName}
          </div>
          <div className="cart-productprice">
            {item.totalPrice.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </>
      </div>
      <div className="cart-amount">
        <span
          className="cart-decrease"
          onClick={() => decreaseQuantity(item.proId)}
        >
          -
        </span>
        <span className="cart-count">{item.quantity}</span>
        <span
          className="cart-increase"
          onClick={() => increaseQuantity(item.proId)}
        >
          +
        </span>
      </div>
      <div className="cart-delete" onClick={() => removeFromCart(item.proId)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15L10 12"
            stroke="#33363F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14 15L14 12"
            stroke="#33363F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
            stroke="#33363F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
            stroke="#33363F"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartBasket;
