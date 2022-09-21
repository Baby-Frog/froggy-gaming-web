import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import "./styles/adminacc.css";

const AdminAcc = () => {
  const handleLoadMoreProducts = useRef({});

  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const token = localStorage.getItem("accessToken");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getProducts = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8386/api/v1/product/page=${page}`,
        axiosConfig
      );
      return response.data.data.content;
    } catch (error) {
      console.log(error);
    }
  };

  handleLoadMoreProducts.current = async () => {
    try {
      const products = await getProducts(nextPage);
      const newProducts = [...data, ...products];
      setData(newProducts);
      setNextPage(nextPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadMoreProducts.current();
  }, []);

  const handleDeleteInDatabase = async (proId, brandId, cateId) => {
    // if (window.confirm("Bạn có muốn xóa sản phẩm không")) {
    // }
    const REMOVE_PRODUCT_IN_CATEGORY_BY_PRO_ID_API = `http://localhost:8386/api/v1/category/${cateId}/remove/pro-id=${proId}`;
    const REMOVE_PRODUCT_IN_BRAND_BY_PRO_ID_API = `http://localhost:8386/api/v1/brand/${brandId}/remove/pro-id=${proId}`;
    const REMOVE_PRODUCT_DETAIL_IN_PRODUCT_API = `http://localhost:8386/api/v1/product/${proId}/remove/product-detail`;
    const REMOVE_ALL_IMAGES_IN_PRODUCT_API = `http://localhost:8386/api/v1/product/${proId}/remove/images`;
    const REMOVE_PRODUCT_BY_ID = `http://localhost:8386/api/v1/product/delete/${proId}`;

    // xoa tat ca anh trong san pham
    const removeAllImagesInProduct = async () => {
      const response = await axios.post(
        REMOVE_ALL_IMAGES_IN_PRODUCT_API,
        axiosConfig
      );
      console.log(response);
    };

    // xoa chi tiet san pham
    const removeProductDetailInProduct = async () => {
      const response = await axios.post(
        REMOVE_PRODUCT_DETAIL_IN_PRODUCT_API,
        axiosConfig
      );
      console.log(response);
    };

    // xoa san pham trong category
    const removeProductInCategory = async () => {
      const response = await axios.post(
        REMOVE_PRODUCT_IN_CATEGORY_BY_PRO_ID_API,
        axiosConfig
      );
      console.log(response);
    };

    // xoa san pham trong brand
    const removeProductInBrand = async () => {
      const response = await axios.post(
        REMOVE_PRODUCT_IN_BRAND_BY_PRO_ID_API,
        axiosConfig
      );
      console.log(response);
    };
    const removeProductById = async () => {
      const response = await axios.post(REMOVE_PRODUCT_BY_ID, axiosConfig);
      console.log(response);
    };

    await removeAllImagesInProduct();
    await removeProductDetailInProduct();
    await removeProductInBrand();
    await removeProductInCategory();
    await removeProductById();
  };

  return (
    <>
      <div className="admin-product">
        <h3 className="admin-product-header">Danh sách sản phẩm</h3>
        <table className="admin-product-table">
          <thead className="admin-product-table-head">
            <tr className="admin-product-table-row">
              <td className="admin-product-table-data">ID</td>
              <td className="admin-product-table-data">Tên sản phẩm</td>
              <td className="admin-product-table-data">Giá tiền</td>
              <td className="admin-product-table-data">Trạng thái</td>
              <td className="admin-product-table-data">Xóa sản phẩm</td>
            </tr>
          </thead>
          <tbody className="admin-product-table-body">
            {data.length > 0 &&
              data.map((item) => (
                <tr className="admin-product-table-row" key={item.proId}>
                  <td className="admin-product-table-data">{item.proId}</td>
                  <td className="admin-product-table-data">{item.proName}</td>
                  <td className="admin-product-table-data">
                    {item.proPrice.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  {item.proStatus ? (
                    <td className="admin-product-table-data">
                      <span className="admin-product-table-true">Còn hàng</span>
                    </td>
                  ) : (
                    <td className="admin-product-table-data">
                      <span className="admin-product-table-false">
                        Hết hàng
                      </span>
                    </td>
                  )}
                  <td
                    className="admin-product-table-data"
                    onClick={() => handleDeleteInDatabase(item.proId)}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          className="admin-product-loadmore"
          onClick={handleLoadMoreProducts.current}
        >
          Load more
        </button>
        <br />
        <br />
        <br />
        <AdminOrders></AdminOrders>
      </div>
    </>
  );
};

const AdminOrders = () => {
  const { data } = useSWR(`http://localhost:8386/api/v1/order`, fetcher);
  if (!data) return;
  console.log(data);
  return (
    <>
      <h3 className="admin-product-header">Danh sách đơn hàng</h3>
      <table className="admin-product-table">
        <thead className="admin-product-table-head">
          <tr className="admin-product-table-row">
            <td className="admin-product-table-data">Order ID</td>
            <td className="admin-product-table-data">Tên người dùng</td>
            <td className="admin-product-table-data">Giá tiền</td>
            <td className="admin-product-table-data">Số lượng</td>
            <td className="admin-product-table-data">Thời gian mua hàng</td>
          </tr>
        </thead>
        <tbody className="admin-product-table-body">
          {data.length > 0 &&
            data.map((item) => (
              <tr className="admin-product-table-row" key={item.id}>
                <td className="admin-product-table-data">{item.id}</td>
                <td className="admin-product-table-data">trankhoi</td>
                <td className="admin-product-table-data">
                  {item.totalPrice.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td className="admin-product-table-data">{item.quantity}</td>
                <td className="admin-product-table-data">{item.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="admin-product-loadmore">Load more</button>
    </>
  );
};

export default AdminAcc;
