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
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  // product detail
  const [model, setModel] = useState("");
  const [connect, setConnect] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [compatible, setCompatible] = useState("");
  const [size, setSize] = useState("");
  const [cable, setCable] = useState("");
  const [color, setColor] = useState("");
  const [led, setLed] = useState("");
  const [accessories, setAccessories] = useState("");
  const [layout, setLayout] = useState("");
  const [specialFeature, setSpecialFeature] = useState("");
  const [keyboardSwitch, setKeyboardSwitch] = useState("");
  const [keyboardKeycap, setKeyboardKeycap] = useState("");
  const [mouseDpi, setMouseDpi] = useState("");
  const [mouseSensor, setMouseSensor] = useState("");
  const [chairLifter, setChairLifter] = useState("");
  const [chairPillow, setChairPillow] = useState("");
  const [chairWheel, setChairWheel] = useState("");
  const [chairMaximum, setChairMaximum] = useState("");
  const [microphoneFrequency, setMicrophoneFrequency] = useState("");
  const [microphoneSens, setMicrophoneSens] = useState("");
  const [microphoneBitrate, setMicrophoneBitrate] = useState("");

  // api
  const CREATE_NEW_PRODUCT_API = `http://localhost:8386/api/v1/product/save`;
  const CREATE_NEW_IMAGE_API = `http://localhost:8386/api/v1/fileupload/`;
  const CREATE_NEW_CATEGORY_API = `http://localhost:8386/api/v1/category/save`;
  const CREATE_NEW_BRAND_API = `http://localhost:8386/api/v1/brand/save`;
  const CREATE_NEW_PRODUCT_DETAIL_API = `http://localhost:8386/api/v1/productdetails/save`;

  const ADD_IMAGE_TO_PRODUCT_API = `http://localhost:8386/api/v1/image/add-to-product`;
  const ADD_PRODUCT_TO_CATEGORY_API = `http://localhost:8386/api/v1/product/add-to-category`;
  const ADD_PRODUCT_TO_BRAND_API = `http://localhost:8386/api/v1/product/add-to-brand`;
  const ADD_PRODUCT_DETAIL_TO_PRODUCT_API = `http://localhost:8386/api/v1/productdetails/add-to-product`;

  // config
  const token = localStorage.getItem("accessToken");
  const createNewItemAxiosConfig = {
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

  // form
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

  const newCategoryForm = JSON.stringify({
    cateName: category,
  });

  const newBrandForm = JSON.stringify({
    brandName: brand,
  });

  const addProductToCategoryForm = JSON.stringify({
    proName: proName,
    cateName: category,
  });

  const addProductToBrandForm = JSON.stringify({
    proName: proName,
    brandName: brand,
  });

  const createNewProductDetailForm = JSON.stringify({
    model: model,
    connect: connect,
    age: age,
    weight: weight,
    compatible: compatible,
    size: size,
    cable: cable,
    color: color,
    led: led,
    accessories: accessories,
    layout: layout,
    specialFeature: specialFeature,
    keyboardSwitch: keyboardSwitch,
    keyboardKeycap: keyboardKeycap,
    mouseDpi: mouseDpi,
    mouseSensor: mouseSensor,
    chairLifter: chairLifter,
    chairPillow: chairPillow,
    chairWheel: chairWheel,
    chairMaximum: chairMaximum,
    microphoneFrequency: microphoneFrequency,
    microphoneSens: microphoneSens,
    microphoneBitrate: microphoneBitrate,
  });

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
    setImgName(event.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageFormData = new FormData();
    imageFormData.append("file", image);

    // Tao San Pham moi
    const createNewProduct = async () => {
      const response = await axios.post(
        CREATE_NEW_PRODUCT_API,
        newProductForm,
        createNewItemAxiosConfig
      );
      console.log(response);
    };

    // Tao anh moi
    const createNewImage = async () => {
      const response = await axios.post(
        CREATE_NEW_IMAGE_API,
        imageFormData,
        createNewImageAxiosConfig
      );
      console.log(response);
    };

    // add anh vao san pham
    const addImageToProduct = async () => {
      const response = await axios.post(
        ADD_IMAGE_TO_PRODUCT_API,
        addImageToProductForm,
        createNewItemAxiosConfig
      );
      console.log(response);
    };

    // Tao category moi
    const createNewCategory = async () => {
      try {
        const response = await axios.post(
          CREATE_NEW_CATEGORY_API,
          newCategoryForm,
          createNewItemAxiosConfig
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    // tao brand moi
    const createNewBrand = async () => {
      try {
        const response = await axios.post(
          CREATE_NEW_BRAND_API,
          newBrandForm,
          createNewItemAxiosConfig
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    // add product vao category
    const addProductToCategory = async () => {
      try {
        const response = await axios.post(
          ADD_PRODUCT_TO_CATEGORY_API,
          addProductToCategoryForm,
          createNewItemAxiosConfig
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    // add product vao brand
    const addProductToBrand = async () => {
      try {
        const response = await axios.post(
          ADD_PRODUCT_TO_BRAND_API,
          addProductToBrandForm,
          createNewItemAxiosConfig
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    // tao product detail
    const createNewProductDetail = async () => {
      try {
        const response = await axios.post(
          CREATE_NEW_PRODUCT_DETAIL_API,
          createNewProductDetailForm,
          createNewItemAxiosConfig
        );
        console.log(response);
        localStorage.setItem("productDetailId", response.data.data.id);
      } catch (error) {
        console.log(error);
      }
    };

    // add product detail vao product
    const addProductDetailToProduct = async () => {
      const productDetailId = localStorage.getItem("productDetailId");

      const addProductDetailToProductForm = JSON.stringify({
        proName: proName,
        productDetailId: productDetailId,
      });

      try {
        const response = await axios.post(
          ADD_PRODUCT_DETAIL_TO_PRODUCT_API,
          addProductDetailToProductForm,
          createNewItemAxiosConfig
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    await createNewProduct();
    await createNewImage();
    await addImageToProduct();
    await createNewCategory();
    await addProductToCategory();
    await createNewBrand();
    await addProductToBrand();
    await createNewProductDetail();
    await addProductDetailToProduct();
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
        <input
          type="text"
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        {/* preDetail */}
        <div>
          <input
            type="text"
            placeholder="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="text"
            placeholder="connect"
            value={connect}
            onChange={(e) => setConnect(e.target.value)}
          />
          <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="compatible"
            value={compatible}
            onChange={(e) => setCompatible(e.target.value)}
          />
          <input
            type="text"
            placeholder="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <input
            type="text"
            placeholder="cable"
            value={cable}
            onChange={(e) => setCable(e.target.value)}
          />
          <input
            type="text"
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="led"
            value={led}
            onChange={(e) => setLed(e.target.value)}
          />
          <input
            type="text"
            placeholder="accessories"
            value={accessories}
            onChange={(e) => setAccessories(e.target.value)}
          />
          <input
            type="text"
            placeholder="layout"
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
          />
          <input
            type="text"
            placeholder="specialFeature"
            value={specialFeature}
            onChange={(e) => setSpecialFeature(e.target.value)}
          />
          <input
            type="text"
            placeholder="keyboardSwitch"
            value={keyboardSwitch}
            onChange={(e) => setKeyboardSwitch(e.target.value)}
          />
          <input
            type="text"
            placeholder="keyboardKeycap"
            value={keyboardKeycap}
            onChange={(e) => setKeyboardKeycap(e.target.value)}
          />
          <input
            type="text"
            placeholder="mouseDpi"
            value={mouseDpi}
            onChange={(e) => setMouseDpi(e.target.value)}
          />
          <input
            type="text"
            placeholder="mouseSensor"
            value={mouseSensor}
            onChange={(e) => setMouseSensor(e.target.value)}
          />
          <input
            type="text"
            placeholder="chairLifter"
            value={chairLifter}
            onChange={(e) => setChairLifter(e.target.value)}
          />
          <input
            type="text"
            placeholder="chairPillow"
            value={chairPillow}
            onChange={(e) => setChairPillow(e.target.value)}
          />
          <input
            type="text"
            placeholder="chairWheel"
            value={chairWheel}
            onChange={(e) => setChairWheel(e.target.value)}
          />
          <input
            type="text"
            placeholder="chairMaximum"
            value={chairMaximum}
            onChange={(e) => setChairMaximum(e.target.value)}
          />
          <input
            type="text"
            placeholder="microphoneFrequency"
            value={microphoneFrequency}
            onChange={(e) => setMicrophoneFrequency(e.target.value)}
          />
          <input
            type="text"
            placeholder="microphoneSens"
            value={microphoneSens}
            onChange={(e) => setMicrophoneSens(e.target.value)}
          />
          <input
            type="text"
            placeholder="microphoneBitrate"
            value={microphoneBitrate}
            onChange={(e) => setMicrophoneBitrate(e.target.value)}
          />
        </div>

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
