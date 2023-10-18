import React from "react";
import Dates from "./Timer-report.js";
import Report from "./Report.js";
import Client from "./Client.js";

function Sidebar() {
  return (
    <nav>
      <Dates />
      <Report />
      <Client />
    </nav>
  );
}
export default Sidebar;
