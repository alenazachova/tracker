import { createClient } from "@supabase/supabase-js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";
import { ErrorPage } from "./components/Error/ErrorPage";
import { Timer } from "./components/Timer/Timer";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { VideoPage } from "./components/VideoPage";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function App() {
  const token = localStorage.getItem("userToken");

  const isLoggedIn = token ? true : false;

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element={<Timer />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
