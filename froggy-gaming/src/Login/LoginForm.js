import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post(LOGIN_API, account, axiosConfig);
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      navigate("/");
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
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;
