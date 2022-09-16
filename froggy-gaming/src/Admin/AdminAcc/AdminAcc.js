import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./styles/adminacc.css";
const token = localStorage.getItem("accessToken");

const axiosConfig = {
  headers: { Authorization: `Bearer ${token}` },
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
const AdminAcc = () => {
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState([]);
  // const [outsideData, setOutsideData] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMoreProducts = useRef({});
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

  const handleDeleteInDatabase = async (removeItemId) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm không")) {
      // try {
      //   await axios.delete(
      //     `http://localhost:8386/api/v1/product/delete/177`,
      //     axiosConfig
      //   );

      setData((prevItems) => {
        const result = prevItems.filter((item) => item.proId !== removeItemId);
        return result;
      });
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  return (
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
                    <span className="admin-product-table-false">Hết hàng</span>
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
    </div>
  );
};

export default AdminAcc;
