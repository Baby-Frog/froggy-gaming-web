import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cart-context";

const UserForm = () => {
  const USER_API = `http://localhost:8386/api/v1/customer/get`;
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { removeAllFromCart } = useCart();
  const token = localStorage.getItem("accessToken");

  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(USER_API, axiosConfig);
        setData(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  const signOut = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roles");
    localStorage.removeItem("lastname");
    removeAllFromCart();
    navigate("/dang-nhap");
    window.location.reload(false);
  };

  return (
    <div className="user">
      <div className="user-name">{data.username}</div>
      <div className="user-email">{data.email}</div>
      <div className="user-phonenumber">{data.cusPhoneNumber}</div>
      <div className="user-firstname">{data.cusFirstname}</div>
      <div className="user-lastname">{data.cusLastname}</div>
      <div className="user-address">{data.cusAddress}</div>
      <div>
        {localStorage.getItem("roles") === "ROLE_ADMIN" ? (
          <div>ADMIN</div>
        ) : (
          <div>User</div>
        )}
      </div>
      {localStorage.getItem("roles") === "ROLE_ADMIN" ? (
        <button className=""></button>
      ) : (
        <div>User</div>
      )}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default UserForm;
