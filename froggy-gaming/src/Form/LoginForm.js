import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./styles/loginform.css";
import { useEffect } from "react";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const LOGIN_API = `http://localhost:8386/api/auth/signin`;

//   const axiosConfig = {
//     headers: {
//       "Content-Type": "application/json",
//       accept: "application/json",
//     },
//   };

//   const account = JSON.stringify({
//     username: username,
//     password: password,
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(LOGIN_API, account, axiosConfig);
//       localStorage.setItem("accessToken", response.data.data.access_token);
//       localStorage.setItem("roles", response.data.data.roles);
//       navigate("/nguoi-dung");
//       window.location.reload(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="username">Username</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           autoComplete="on"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <button type="submit">Đăng nhập</button>
//       </form>
//       <Link to={"/dang-ky"}>
//         <span
//           style={{
//             fontSize: "3rem",
//           }}
//         >
//           Bấm vào đây để qua phần đăng kí
//         </span>
//       </Link>
//     </div>
//   );
// };

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    saveUserDataInLocalStorageFunc();
  }, [userId]);

  // api
  const LOGIN_API = `http://localhost:8386/api/auth/signin`;
  const GET_USER_DATA_API = `http://localhost:8386/api/v1/customer/get`;

  // config
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  const token = localStorage.getItem("accessToken");
  const axiosGetUserDataConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // form
  const account = JSON.stringify({
    username: username,
    password: password,
  });

  const navigate = useNavigate();

  const loginHandleFunction = async () => {
    try {
      const response = await axios.post(LOGIN_API, account, axiosConfig);
      localStorage.setItem("accessToken", response.data.data.access_token);
      localStorage.setItem("roles", response.data.data.roles);
      localStorage.setItem("username", response.data.data.username);
      setUserId(response.data.data.cusid);
      console.log(response);
    } catch (error) {
      setError("Tài khoản hoặc mật khẩu sai, vui lòng đăng nhập lại");
      console.log(error);
    }
  };

  const saveUserDataInLocalStorageFunc = async () => {
    try {
      const response = await axios.get(
        GET_USER_DATA_API,
        axiosGetUserDataConfig
      );
      console.log(response);
      localStorage.setItem("firstname", response.data.data.cusFirstname);
      localStorage.setItem("lastname", response.data.data.cusLastname);
      localStorage.setItem("address", response.data.data.cusAddress);
      localStorage.setItem("phoneNumber", response.data.data.cusPhoneNumber);
      localStorage.setItem("email", response.data.data.cusEmail);
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginHandleFunction();
  };
  return (
    <div className="wrapper">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="control">
          <h1>Đăng nhập</h1>
        </div>
        <div className="control block-cube block-input">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tên người dùng"
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
            autoComplete="on"
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
        <div style={{ marginBlock: "2rem" }}>
          {error && <span className="form-failed">{error}</span>}
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
          <div className="text">Đăng nhập</div>
        </button>
      </form>
      <Link to={"/dang-ky"} className="form-flex">
        <span className="form-question">Bạn chưa có tài khoản?</span>
        <span className="form-signup">Đăng ký</span>
      </Link>
    </div>
  );
};

export default LoginForm;
