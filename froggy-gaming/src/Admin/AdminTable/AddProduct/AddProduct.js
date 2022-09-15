import axios from "axios";
import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [proName, setProName] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proDesc, setProDesc] = useState("");
  const [proStatus, setProStatus] = useState(true);
  const [image, setImage] = useState(null);

  const UPLOAD_NEW_IMAGE_API = `http://localhost:8386/api/v1/fileupload/`;
  const axiosConfigUploadImage = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await axios.post(
        UPLOAD_NEW_IMAGE_API,
        formData,
        axiosConfigUploadImage
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecked = (e) => {
    setProStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(proStatus);
    console.log(proName);
    console.log(proPrice);
    console.log(proDesc);
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
        <input
          type="text"
          placeholder="description"
          value={proDesc}
          onChange={(e) => setProDesc(e.target.value)}
        />
        <div onChange={handleChecked}>
          <span>Het hang</span>
          <input type="radio" name="stocking" value={false} />
          <span>Con hang</span>
          <input type="radio" name="stocking" value={true} />
        </div>
        <input type="file" placeholder="image" />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default AddProduct;
