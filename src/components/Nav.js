import React from "react";
import Project from "./Project.js";
import Timer from "./Timer.js";

function Nav() {
  return (
    <nav>
      <h1>Tracker</h1>
      <Project />
      <Timer />
      <button>Start</button>
    </nav>
  );
}
export default Nav;
