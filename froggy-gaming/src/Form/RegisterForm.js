import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
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
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <div>Đây là form đăng kí</div>;
};

export default RegisterForm;
