import axios from "axios";
import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [proName, setProName] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proDesc, setProDesc] = useState("");
  const [proStatus, setProStatus] = useState(true);
  const token = localStorage.getItem("accessToken");

  const CREATE_NEW_PRODUCT_API = `http://localhost:8386/api/v1/product/save`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const newProduct = JSON.stringify({
    proName: proName,
    proPrice: proPrice,
    proDesc: proDesc,
    proStatus: proStatus,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        CREATE_NEW_PRODUCT_API,
        newProduct,
        axiosConfig
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={proName}
          onChange={(e) => setProName(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={proPrice}
          onChange={(e) => setProPrice(e.target.value)}
        />
        <textarea
          placeholder="description"
          value={proDesc}
          onChange={(e) => setProDesc(e.target.value)}
        ></textarea>
        <span>Het hang</span>
        <input
          type="radio"
          value={false}
          onChange={(e) => setProStatus(e.target.value)}
        />
        <button type="submit">Tao san pham</button>
      </form>
    </>
  );
};

export default AddProduct;
