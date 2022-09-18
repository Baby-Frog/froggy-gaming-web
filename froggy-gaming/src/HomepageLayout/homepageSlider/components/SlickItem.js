import React from "react";
import { useNavigate } from "react-router-dom";

const SlickItem = ({ image }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/chi-tiet?query=Akko ACR Pro");
    window.location.reload(false);
  };
  return (
    <div className="image-item" onClick={handleNavigate}>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SlickItem;
