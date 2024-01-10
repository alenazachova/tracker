import { createClient } from "@supabase/supabase-js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";
import { ErrorPage } from "./components/Error/ErrorPage";
import { Layout } from "./components/Layout/Layout";
import { Timer } from "./components/Timer/Timer";
import { Logo } from "./components/Logo";

import { GoogleOAuthProvider } from "@react-oauth/google";

export const supabase = createClient(
  "https://dyqzeefgdzzumaskxjlr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cXplZWZnZHp6dW1hc2t4amxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MzA3MzQsImV4cCI6MjAyMDQwNjczNH0.SyF6cMN290oqB9EJdyd3F7hnH9Lk3JQy8BVqFYyzoHI"
);

function App() {
  const token = localStorage.getItem("userToken");

  const isLoggedIn = token ? true : false;

  return (
    <GoogleOAuthProvider clientId="872976465576-1p8kl9lavhsqj276ostn9clpqglkgh3h.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Timer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
