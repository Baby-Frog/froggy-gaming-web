import axios from "axios";
import React from "react";
import { useState } from "react";
import "./AddBrand.css"

const AddBrand = () => {
  const [brandName, setBrandName] = useState("");

  const ADD_NEW_BRAND_API = `http://localhost:8386/api/v1/brand/save`;

  const addNewBrandForm = JSON.stringify({
    brandName: brandName,
  });

  const token = localStorage.getItem("accessToken");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ADD_NEW_BRAND_API,
        addNewBrandForm,
        axiosConfig
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="N"
      onSubmit={handleSubmit}>
        <span>Ten hang san xuat</span>
        <input
          type="text"
          placeholder="Ten danh muc"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <button type="submit">Them hang san xuat</button>
      </form>
    </>
  );
};

export default AddBrand;
