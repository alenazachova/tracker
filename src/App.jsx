import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";
import { ErrorPage } from "./components/Error/ErrorPage";
import { Layout } from "./components/Layout/Layout";
import { Timer } from "./components/Timer/Timer";
import { Logo } from "./components/Logo";

function App() {
  const [loggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Logo />
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/counter" element={<Timer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
