import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/loginform.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const REGISTER_API = `http://localhost:8386/api/auth/signup`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  const newAccount = JSON.stringify({
    cusFirstname: firstName,
    cusLastname: lastName,
    cusEmail: email,
    cusPhoneNumber: phoneNumber,
    cusAddress: address,
    username: username,
    password: password,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REGISTER_API, newAccount, axiosConfig);
      console.log(response.data.data);
      navigate("/dang-nhap");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Dang ki</button>
        {error && <div>SUCCESSFULLY</div>}
      </form>
      {error && <div>BUG</div>} */}
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="control">
          <h1>Đăng nhập</h1>
        </div>
        <div className="control block-cube block-input">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Họ"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Tên"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Địa chỉ email"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Số điện thoại"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Địa chỉ"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tên đăng nhập"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
          />
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="submit">
          <div className="bg-top">
            <div className="bg-inner" />
          </div>
          <div className="bg-right">
            <div className="bg-inner" />
          </div>
          <div className="bg">
            <div className="bg-inner" />
          </div>
          <div className="text">Đăng ký</div>
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
