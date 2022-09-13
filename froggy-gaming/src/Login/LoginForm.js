import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // code trên này
    // navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" name="username" />
        <label htmlFor="username">Username</label>
        <input type="text" id="password" name="password" />
        <label htmlFor="password">Password</label>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;
