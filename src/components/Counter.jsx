import React, { useRef, useState } from "react";

export const Counter = () => {
  //stav, co muzu nastavit, vypsat
  //getter a setter
  // to druhy je to na co to menim
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);

  //nejaka reference intervalu
  const intervalRef = useRef(null);
  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  let timePassed = (time - now) / 1000;
  return (
    <>
      <h2>čas je {timePassed.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
