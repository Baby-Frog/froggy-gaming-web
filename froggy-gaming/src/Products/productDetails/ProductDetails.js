import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";

const ProductDetails = () => {
  const { proId } = useParams();
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/${proId}`,
    fetcher
  );
  console.log("log ~ ProductDetails ~ data", data);
  if (!data || !data.data) return null;
  const { proPrice, proName } = data.data;

  return (
    <div>
      <span
        style={{
          fontSize: "1.5rem",
        }}
      >
        Giá tiền: {proPrice}
      </span>
      <br />
      <span
        style={{
          fontSize: "1.5rem",
        }}
      >
        Tên sản phẩm: {proName}
      </span>
    </div>
  );
};
export default ProductDetails;
