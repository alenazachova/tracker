import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
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

    let hasError = false;
    if ("" === email) {
      setEmailError("Please enter your email");
      hasError = true;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }
    if ("" === password) {
      setPasswordError("Please enter a password");
      hasError = true;
    }
    if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
      hasError = true;
    }
    if (hasError) {
      return;
    }
  };

  return (
    <>
      <Layout>
        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Login</div>
          </div>

          <br />

          <div className={"inputContainer"}>
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={handleEmailChange}
              className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>

          <br />

          <div className={"inputContainer"}>
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={handlePasswordChange}
              className={"inputBox"}
            />
            <label className="errorLabel">{passwordError}</label>
          </div>

          <br />

          <div className={"inputContainer"}>
            <input
              className={"inputButton"}
              type="button"
              onClick={onButtonClick}
              value={"Log in"}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
