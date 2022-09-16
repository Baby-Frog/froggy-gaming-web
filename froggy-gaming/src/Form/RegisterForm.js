import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/loginform.css";

const RegisterForm = () => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
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
    // let formData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   phoneNumber: phoneNumber,
    //   address: address,
    //   username: username,
    //   password: password,
    // };
    // const isValid = await registerSchema.isValid(formData);
    // console.log(isValid);
    // if (!isValid) return;
    if (firstName.trim().length <= 0) {
      setError("Vui lòng nhập vào họ của bạn");
      console.log(error);
      return;
    } else if (lastName.trim().length <= 0) {
      setError("Vui lòng nhập vào tên của bạn");
      console.log(error);
      return;
    } else if (!emailRegex.test(email.trim())) {
      setError("Email bạn nhập vào không hợp lệ");
      console.log(error);
      return;
    } else if (phoneNumber.trim().length <= 0) {
      setError("Vui lòng nhập vào số điện thoại");
      return;
    } else if (address.trim().length <= 0) {
      setError("Vui lòng nhập vào địa chỉ của bạn");
      return;
    } else if (username.trim().length <= 0) {
      setError("Vui lòng nhập vào tên đăng nhập của bạn");
      return;
    } else if (username.trim().length <= 5) {
      setError("Tên đăng nhập phải dài hơn 5 kí tự");
      return;
    } else if (!passwordRegex.test(password.trim())) {
      setError(
        "Mật khẩu cần có ít nhất 8 kí tự, 1 kí tự in hoa, 1 kí tự số và 1 kí tự đặc biệt"
      );
      return;
    }
    try {
      const response = await axios.post(REGISTER_API, newAccount, axiosConfig);
      console.log(response.data.data);
      navigate("/dang-nhap");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="control">
          <h1>Đăng ký</h1>
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
            type="text"
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
        <span className="form-failed">{error}</span>
        <br />
        <br />

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
      <Link to={"/dang-nhap"} className="form-flex">
        <span className="form-question">Bạn đã có tài khoản?</span>
        <span className="form-signup">Đăng nhập</span>
      </Link>
    </>
  );
};

export default RegisterForm;
