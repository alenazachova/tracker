import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { useState } from "react";
import { Login } from "./components/Auth/Login";
import { Home } from "./components/Home/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                email={email}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />

          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
