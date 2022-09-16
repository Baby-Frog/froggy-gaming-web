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
    <>
      <div>{data.username}</div>
      <div>{data.email}</div>
      <div>{data.cusPhoneNumber}</div>
      <div>{data.cusFirstname}</div>
      <div>{data.cusLastname}</div>
      <div>{data.cusAddress}</div>
      <div>
        {localStorage.getItem("roles") === "ROLE_ADMIN" ? (
          <div>ADMIN</div>
        ) : (
          <div>User</div>
        )}
      </div>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
};

export default UserForm;
