import axios from "axios";
import React from "react";
import { useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const ADD_NEW_CATEGORY_API = `http://localhost:8386/api/v1/category/save`;

  const addNewCategoryForm = JSON.stringify({
    cateName: categoryName,
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
        ADD_NEW_CATEGORY_API,
        addNewCategoryForm,
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
        <span>Ten danh muc</span>
        <input
          type="text"
          placeholder="Ten danh muc"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button type="submit">Them danh muc</button>
      </form>
    </>
  );
};

export default AddCategory;
