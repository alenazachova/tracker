import React from "react";
import DataTable from "./DataTable";
const data = [
  { id: "1", project: "Přežít", time: "00:20" },
  { id: "2", project: "Sport je bolest", time: "00:30" },
];

function Client() {
  return (
    <>
      <DataTable />
    </>
  );
}
export default Client;
