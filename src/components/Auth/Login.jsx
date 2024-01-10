import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { Layout } from "../Layout/Layout";

export const Login = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");

    if ("" === email) {
      setEmailError("Please enter your email");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
    }
    if ("Karolinka39" === password && "ala.zachova@gmail.com" === email) {
      navigate("/counter");
    }
    if ("" === password) {
      setPasswordError("Please enter a password");
    } else if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
    }
  };

  return (
    <Layout>
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Login</div>
        </div>

        <br />
        <div className={"googleContainer"}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              navigate("/counter");
              localStorage.setItem("userToken", credentialResponse.credential);
            }}
            onError={() => {
              alert("Login Failed");
            }}
          />
        </div>
        <div className={"mb-1"}>OR</div>
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
            className={"inputBox"}
          />
          <label className="errorLabel">{emailError}</label>
        </div>

        <br />

        <div className={"inputContainer"}>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>

        <br />

        <div className={"buttonContainer"}>
          <button className={"inputButton"} onClick={onButtonClick}>
            Log in
          </button>
        </div>
      </div>
    </Layout>
  );
};
