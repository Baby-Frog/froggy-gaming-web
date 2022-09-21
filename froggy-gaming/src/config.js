import axios from "axios";
const token = localStorage.getItem("accessToken");
const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const fetcher = (...args) =>
  axios.get(...args, axiosConfig).then((res) => res.data);
