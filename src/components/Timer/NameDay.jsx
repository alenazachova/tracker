import { useEffect, useState } from "react";

export const NameDay = () => {
  const [nameDay, setNameDay] = useState(null);

  useEffect(() => {
    fetch("https://svatkyapi.cz/api/day")
      .then((response) => response.json())
      .then((data) => {
        setNameDay(data);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);
  return (
    <>
      {nameDay ? (
        <div>
          <span className="nameDay">Name day</span>
          <span className="biggerSize">{nameDay.name}</span>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};
