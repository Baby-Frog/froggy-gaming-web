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
  if (!data || !data.data) return null;

  return <div></div>;
};
export default ProductDetails;
