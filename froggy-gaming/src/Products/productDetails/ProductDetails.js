import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";
import { HomepageMostSoldData } from "../../HomepageLayout/homepageMostSold/HomepageMostSoldData";

const ProductDetails = () => {
  const { proId } = useParams();
  const { data, error } = useSWR(HomepageMostSoldData, fetcher);
  console.log(data);
  // const ProductDetails = () => {
  //   const { proId } = useParams();
  //   const { data, error } = useSWR(HomepageMostSoldData, fetcher);
  //   console.log("log ~ ProductDetails ~ proId", proId);
  //   console.log(data);

  //   return <div></div>;
  // };

  // export default ProductDetails;
};
