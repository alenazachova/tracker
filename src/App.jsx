import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";
import { ErrorPage } from "./components/Error/ErrorPage";
import { Layout } from "./components/Layout/Layout";
import { Timer } from "./components/Timer/Timer";
import { Logo } from "./components/Logo";

import { GoogleOAuthProvider } from "@react-oauth/google";
// Předpokládáme, že `token` je váš autentizační token

function App() {
  const token = localStorage.getItem("userToken");

  const isLoggedIn = token ? true : false;

  return (
    <div className="bgContainer">
      <GoogleOAuthProvider clientId="872976465576-1p8kl9lavhsqj276ostn9clpqglkgh3h.apps.googleusercontent.com">
        <BrowserRouter>
          <div className="App">
            <Layout>
              <Logo />
              <Routes>
                <Route path="/" element={<Home loggedIn={isLoggedIn} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<Timer />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Layout>
          </div>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
