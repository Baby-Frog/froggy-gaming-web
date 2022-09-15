import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./AdminAcc.css";

const AdminAcc = () => {
  const [data, setData] = useState([]);
  const CUSTOMER_API = `http://localhost:8386/api/v1/product/page=1`;
  const token = localStorage.getItem("accessToken");

  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const response = await axios.get(CUSTOMER_API, axiosConfig);
        setData(response.data.data.content);
      } catch (error) {
        console.log(error);
      }
    };

    getCustomer();
  }, []);

  return (
    <div className="admin-acc">
      <div className="admin-acc__table">
        <p>Product List</p>
        <div className="admin-info">
          <span>Id</span>
          <span>Name</span>
          <span>Price</span>
          <span>Status</span>
        </div>
        {data.map((product, key) => (
          <div className="admin-info" key={product.proId}>
            <span>{product.proId}</span>
            <span>{product.proName}</span>
            <span>{product.proPrice}</span>
            <span>
              {product.proStatus === true ? (
                <span>con hang</span>
              ) : (
                <span> het hang</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAcc;
