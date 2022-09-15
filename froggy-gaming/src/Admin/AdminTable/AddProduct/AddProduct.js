import axios from "axios";
import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [proName, setProName] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proDesc, setProDesc] = useState("");
  const [proStatus, setProStatus] = useState(true);
  const [image, setImage] = useState(null);
  const [imgName, setImgName] = useState("");
  const token = localStorage.getItem("accessToken");

  const CREATE_NEW_PRODUCT_API = `http://localhost:8386/api/v1/product/save`;
  const CREATE_NEW_IMAGE_API = `http://localhost:8386/api/v1/fileupload/`;
  const ADD_IMAGE_TO_PRODUCT_API = `http://localhost:8386/api/v1/image/add-to-product`;

  const createNewProductAxiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const createNewImageAxiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const addImageToProductAxiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const newProductForm = JSON.stringify({
    proName: proName,
    proPrice: proPrice,
    proDesc: proDesc,
    proStatus: proStatus,
  });

  const addImageToProductForm = JSON.stringify({
    proName: proName,
    imgName: imgName,
  });

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
    setImgName(event.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageFormData = new FormData();
    imageFormData.append("file", image);
    const createNewProduct = async () => {
      const response = await axios.post(
        CREATE_NEW_PRODUCT_API,
        newProductForm,
        createNewProductAxiosConfig
      );
      console.log(response);
    };
    const createNewImage = async () => {
      const response = await axios.post(
        CREATE_NEW_IMAGE_API,
        imageFormData,
        createNewImageAxiosConfig
      );
      console.log(response);
    };
    const addImageToProduct = async () => {
      const response = await axios.post(
        ADD_IMAGE_TO_PRODUCT_API,
        addImageToProductForm,
        addImageToProductAxiosConfig
      );
      console.log(response);
    };

    await createNewProduct();
    await createNewImage();
    await addImageToProduct();
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
        <input type="file" onChange={handleFileSelect} />
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
