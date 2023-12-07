import "./Timer.css";
import React, { useEffect, useRef, useState } from "react";
import { Duration } from "./Duration";
import { InputField } from "../InputField";
import { TimeEntry } from "./TimeEntry";
import { getWeek } from "date-fns";

export const Timer = () => {
  //state, what I can set or write
  //getter a setter
  // setter set it

  //actual time
  const [nowTime, setNowTime] = useState(null);
  // start the timer
  const [startTime, setStartTime] = useState(null);

  const [nameDay, setNameDay] = useState(null);
  const actualTimer = nowTime - startTime;

  const [listTime, setListTime] = useState([]);
  console.log(listTime);

  const today = new Date();
  const weekDay = getWeek(today);

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
  const getTotalDuration = () => {
    return listTime.reduce((total, item) => {
      // Přidání kontroly pro platný endTime
      if (item.endTime) {
        return total + (item.endTime - item.startTime);
      }
      return total;
    }, 0);
  };

  useEffect(() => {
    fetch("https://svatkyapi.cz/api/day")
      .then((response) => response.json())
      .then((data) => {
        setNameDay(data);
      })
      .catch((error) => console.error("Chyba při načítání dat:", error));
  }, []);

  const handleDescriptionChange = (id, newDescription) => {
    const updatedListTime = listTime.map((item) => {
      if (item.id === id) {
        return { ...item, description: newDescription };
      }
      return item;
    });
    setListTime(updatedListTime);
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
      description: "",
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
      <div>This week: W{weekDay}</div>
      <div>
        {nameDay ? (
          <div>
            <p>Name day: {nameDay.name}</p>
          </div>
        ) : (
          <p>Načítání dat...</p>
        )}
      </div>
      <div>Total:{getTotalDuration()} </div>
      <h2 className={listTime.length > 0 ? "" : "non-visible"}>
        Seznam záznamů
      </h2>
      <ol className={listTime.length > 0 ? "bg-wheat" : ""}>
        {/* item is left time in the time interval */}
        {listTime.map((item, index) => {
          const onClick = () => {
            handleDelete(index);
          };

          //go throught the list with item.id
          return (
            <TimeEntry
              key={item.id}
              item={item}
              index={index}
              listLength={listTime.length}
              onClick={onClick}
              onDescriptionChange={handleDescriptionChange}
            />
          );
        })}
      </ol>
    </>
  );
};
