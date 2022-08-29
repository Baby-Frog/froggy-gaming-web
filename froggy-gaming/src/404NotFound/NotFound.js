import React from "react";
import Gif from "./assets/404_2.gif";
import Logo from "../assets/froggy-gaming-icon-2.png";
import "./styles/notfound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <img src={Gif} alt="" />
        <span className="notfound-text">404 Not Found</span>
        <div className="notfound-text--smaller">
          Có vẻ như trang của bạn đang tìm kiếm không tồn tại
          <img src={Logo} alt="" />
        </div>
        <Link to={"/froggy-gaming-web"} className="notfound-back">
          <i class="fa-solid fa-arrow-rotate-left"></i>
          <span>Quay về trang chủ</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
