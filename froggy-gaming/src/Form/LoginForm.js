import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LOGIN_API = `http://localhost:8386/api/auth/signin`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  const account = JSON.stringify({
    username: username,
    password: password,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_API, account, axiosConfig);
      localStorage.setItem("accessToken", response.data.data.access_token);
      localStorage.setItem("roles", response.data.data.roles);
      navigate("/nguoi-dung");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <button type="submit">Đăng nhập</button>
      </form>
      <Link to={"/dang-ky"}>
        <span
          style={{
            fontSize: "3rem",
          }}
        >
          Bấm vào đây để qua phần đăng kí
        </span>
      </Link>
    </div>
  );
};

export default LoginForm;
