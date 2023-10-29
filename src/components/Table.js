import React from "react";

export const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.project}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
