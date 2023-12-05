import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { useState } from "react";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";
import { ErrorPage } from "./components/Error/ErrorPage";
import { Layout } from "./components/Layout/Layout";

function App() {
  const [loggedIn] = useState(false);

  return (
    <Layout>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn} />} />

            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
