import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

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
    if ("" === password) {
      setPasswordError("Please enter a password");
    } else if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer");
    }
  };

  return (
    <div className="bgContainer">
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

              console.log(credentialResponse.credential);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className={"mb-1"}>OR</div>
        {/* <button clas>Login with email</button> */}
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
            type="password"
            placeholder="Enter your password here"
            onChange={handlePasswordChange}
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>

        <br />

        <div className={"buttonContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
          />
        </div>
      </div>
    </div>
  );
};
