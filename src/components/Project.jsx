export const TableProject = ({ data }) => {
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
          <tr key={item.project}>
            <td>{item.project}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
