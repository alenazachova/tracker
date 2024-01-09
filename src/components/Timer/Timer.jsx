import "./Timer.css";
import React, { useEffect, useRef, useState } from "react";
import { Duration } from "./Duration";
import { InputField } from "../InputField";
import { TimeEntry } from "./TimeEntry";
import { getWeek } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";

export const Timer = () => {
  //state, what I can set or write
  //getter a setter
  // setter set it

  const navigate = useNavigate();

  //actual time
  const [nowTime, setNowTime] = useState(null);
  // start the timer
  const [startTime, setStartTime] = useState(null);

  const [nameDay, setNameDay] = useState(null);
  const actualTimer = nowTime - startTime;
  const [showPopUp, setShowPopUp] = useState(false);
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
      // Adding a check for a valid endTime
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
      .catch((error) => console.error("Error loading data:", error));
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
    setShowPopUp(true);

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
  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/");
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
        <button onClick={logOut}>Log out</button>
      </div>
      <div>This week: W{weekDay}</div>
      {showPopUp && (
        <div className="popup">
          <svg
            width="50"
            height="50"
            fill="#3750eb"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm9.988 10.988a1 1 0 0 0-.816.451L23.97 30.477 16.68 23.71a1 1 0 1 0-1.36 1.467l8.996 8.347 11.512-16.964a1 1 0 0 0-.84-1.573z" />
          </svg>
          <h3>Timer saved successfully</h3>
          <button
            className={"inputButton mb-1"}
            onClick={() => setShowPopUp(false)}
          >
            OK
          </button>
          <div>
            <small>
              <a href="/create-invoice">Create an invoice?</a>
            </small>
          </div>
        </div>
      )}
      <div>
        {nameDay ? (
          <div>
            <p>
              <span className="nameDay">Name day: {nameDay.name}</span>{" "}
              {/* <span>Nearest birthday:</span> */}
            </p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <div></div>
      <div>
        Total: <Duration timePassed={getTotalDuration()} />
      </div>
      <button className="invoiceButton">
        <a href="https://app.fakturoid.cz/alenazachova/dashboard">
          Create an invoice
        </a>
      </button>
      <h2 className={listTime.length > 0 ? "" : "non-visible"}>
        List of records
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
