import React from "react";
import Dates from "./Timer-report";
import Report from "./Report";
import Client from "./Client";

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
