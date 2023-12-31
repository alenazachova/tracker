import "./Timer.css";
import React, { useRef, useState } from "react";
import { Duration } from "./Duration";
import { InputField } from "../InputField";
import { TimeEntry } from "./TimeEntry";

export const Timer = () => {
  //state, what I can set or write
  //getter a setter
  // setter set it

  //actual time
  const [nowTime, setNowTime] = useState(null);
  // start the timer
  const [startTime, setStartTime] = useState(null);

  const actualTimer = nowTime - startTime;

  const [listTime, setListTime] = useState([]);
  console.log(listTime);

  // reference of interal - constant
  const intervalRef = useRef(null);

  const handleStart = () => {
    //Time when it starts
    const currentTime = Date.now();
    setStartTime(currentTime);

    setNowTime(currentTime);
    //prop useRef is current
    intervalRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);
    //1 second
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    console.log(startTime);

    const finalTimePassed = nowTime - startTime;

    //how long the time entry takes
    // const newListTime = [...listTime, finalTimePassed];

    //ended time entry, I save in to the state, when I push stop button
    const newFinalTimePassed = {
      id: startTime.toString(),
      startTime: startTime,
      endTime: nowTime,
    };

    const timeSchedule = [...listTime, newFinalTimePassed];

    setListTime(timeSchedule);

    setNowTime(null);
    setStartTime(null);
  };

  const handleDelete = (index) => {
    const handleDeleteList = [...listTime];
    handleDeleteList.splice(index, 1);
    setListTime(handleDeleteList);
  };

  return (
    <>
      {/* I want to know the Duration in the left */}
      <div className="rightTogether">
        <InputField />
        <Duration timePassed={actualTimer} />
        {/* falsy - startTime is null */}
        {startTime ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
      </div>
      <ol>
        {/* item is left time in the time interval */}
        {listTime.map((item, index) => {
          const onClick = () => {
            handleDelete(index);
          };
          //go throught the list with item.id
          return <TimeEntry key={item.id} item={item} onClick={onClick} />;
        })}
      </ol>
    </>
  );
};
