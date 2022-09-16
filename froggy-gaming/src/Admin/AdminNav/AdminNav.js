import React from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";

const AdminNav = () => {
  return (
    <div>
      <div className="ad-nav">
        <span>Froggy Gaming</span>
        <div className="ad-nav__product">
          <Link to="/admin/them-san-pham">
            <i className="fa-sharp fa-solid fa-plus"></i>
            Add Product
          </Link>
          <Link to="/admin/them-danh-muc">
            <i className="fa-solid fa-solid fa-plus"></i>
            Add Category
          </Link>
          <Link to="/admin/them-hang">
            <i className="fa-solid fa-solid fa-plus"></i>
            Add Brand
          </Link>
        </div>
        <div className="ad-nav__info">
          <div className="ad-nav__title">Account</div>
          <div className="ad-nav__product">
            <Link to="/nguoi-dung">
              <i className="fa-solid fa-user"></i>
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
