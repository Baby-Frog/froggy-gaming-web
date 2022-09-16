import axios from "axios";
import React from "react";
import { useState } from "react";
import "./AddCategory.css"

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
    <div className="wrapper">
    <>
      <form 
      className="cat__name"
      onSubmit={handleSubmit}>
        <span>Tên danh mục</span>
        <input  className="add-cat__name"
          type="text"
          placeholder="Tên danh mục"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button 
            className="add-cat"
        type="submit">Thêm danh mục</button>
      </form>
    </>
    </div>
  );
};

export default AddCategory;
