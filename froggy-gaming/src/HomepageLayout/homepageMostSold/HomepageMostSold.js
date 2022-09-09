import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavigate } from "react-router-dom";
import useHover from "../../hooks/useHover";
import { HomepageMostSoldData } from "./HomepageMostSoldData";
import "./styles/mostsold.css";
import ProductCard from "../../global/products/ProductCard";

const HomepageMostSold = () => {
  const { data } = useSWR(
    `http://localhost:8386/api/v1/product/page=1`,
    fetcher
  );
  if (!data) return;
  const mostSoldProducts = data?.content || [];

  return (
    <div className="mostsold">
      {mostSoldProducts.map((item) => (
        <ProductCard key={item.proId} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default HomepageMostSold;
