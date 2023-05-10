import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLogin) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            email,
            password,
            name,
          }
        );
        console.log(res);
        console.log(res.data);
      } catch (err) {
        console.log("err", err);
      }
    }
    if (isLogin) {
      try {
        const res = await axios.post("http://localhost:3000/api/auth/login", {
          email,
          password,
        });
        console.log(res);
        console.log(res.data);
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  const handleIsLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "SignUp"}</h2>
      <form onSubmit={handleSubmit}>
        {isLogin ? (
          ""
        ) : (
          <div className="input-group">
            <input
              type="text"
              id="name"
              placeholder=" "
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="email">Name</label>
          </div>
        )}
        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <p onClick={handleIsLogin} className="haveAccount">
          {isLogin ? "Don't have Account" : "Already have Account"}
        </p>

        <input type="submit" value={isLogin ? "Login" : "SignUp"} />
      </form>
    </div>
  );
}

export default Login;
