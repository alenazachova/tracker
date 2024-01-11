import "./Timer.css";
import React, { useEffect, useRef, useState } from "react";
import { Duration } from "./Duration";
import { InputField } from "../InputField";
import { TimeEntry } from "./TimeEntry";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../../App";
import { WeekInfo } from "./WeekInfo";
import { NameDay } from "./NameDay";
import { PopUp } from "./PopUp";
import { Layout } from "../Layout/Layout";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { StructuredTimeEntriesList } from "./StructuredTimeEntriesList";

const STEP = 5;
export const Timer = () => {
  //state, what I can set or write
  //getter a setter
  // setter set it

  const navigate = useNavigate();
  //actual time
  const [nowTime, setNowTime] = useState(null);
  // start the timer
  const [startTime, setStartTime] = useState(null);

  const actualTimer = nowTime - startTime;
  const [showPopUp, setShowPopUp] = useState(false);
  const [timeEntries, setTimeEntries] = useState([]);
  const [totalTimeEntries, setTotalTimeEntries] = useState();

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
    return timeEntries.reduce((total, item) => {
      // Adding a check for a valid endTime
      if (item.finished_at) {
        return total + (item.finished_at - item.started_at);
      }
      return total;
    }, 0);
  };
  async function loadMoreTimeEntries() {
    const { data } = await supabase
      .from("timeEntries")
      .select()
      .order("started_at", { ascending: false })
      .range(timeEntries.length, timeEntries.length + STEP);
    const newTimeEntries = [...timeEntries, ...data];
    //setter set the data to my state
    setTimeEntries(newTimeEntries);
  }

  useEffect(() => {
    getTimeEntries();
  }, []);

  async function getTimeEntries() {
    //waiting for time entries from database, select return the data

    const { count } = await supabase
      .from("timeEntries")
      .select("*", { count: "exact", head: true });
    setTotalTimeEntries(count);

    const { data } = await supabase
      .from("timeEntries")
      .select()
      .order("started_at", { ascending: false })
      .limit(timeEntries.length || STEP);
    //setter set the data to my state
    setTimeEntries(data);
  }

  const handleStop = async () => {
    clearInterval(intervalRef.current);
    setShowPopUp(true);

    const finalTimePassed = nowTime - startTime;

    //how long the time entry takes
    // const newListTime = [...listTime, finalTimePassed];

    //ended time entry, I save in to the state, when I push stop button

    const newFinalTimePassed = {
      //id: startTime.toString(),
      started_at: startTime,
      finished_at: nowTime,
      description: "",
      duration_in_ms: finalTimePassed,
    };
    const { data, error } = await supabase
      .from("timeEntries")
      .insert(newFinalTimePassed);

    getTimeEntries();
    // const timeSchedule = [...timeEntries, newFinalTimePassed];

    setNowTime(null);
    setStartTime(null);
  };

  return (
    <Layout isFullBlue={true}>
      {/* I want to know the Duration in the left */}
      <div className="rightTogether">
        <InputField />
        <Duration timePassed={actualTimer} />

        {/* falsy - startTime is null */}
        {startTime ? (
          <>
            <IconButton
              sx={{ border: "1px solid #c4d3fc" }}
              onClick={handleStop}
            >
              <StopIcon
                sx={{
                  color: "#c4d3fc",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              title="Start session"
              sx={{
                background: "#c4d3fc",
                border: "1px solid #c4d3fc",
                ":hover": { background: "#fff", color: "#c4d3fc" },
              }}
              onClick={handleStart}
            >
              <PlayArrowIcon
                sx={{
                  color: "#3750eb",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </>
        )}
      </div>

      {showPopUp && <PopUp onClose={() => setShowPopUp(false)} />}
      <div className="boxesContainer">
        <WeekInfo />

        <NameDay />

        <div>
          Total time
          <span className="biggerSize">
            <Duration timePassed={getTotalDuration()} />
          </span>
        </div>
      </div>

      {/* <h2 className={timeEntries.length > 0 ? "" : "non-visible"}>
        List of records
      </h2> */}
      <div className={timeEntries.length > 0 ? "bg-lightBlue" : ""}>
        {/* <ol>
          { item is left time in the time interval }
          {timeEntries.map((item, index) => {
            const onDelete = () => {
              handleDelete(item.id);
            };

            //go throught the list with item.id
            return (
              <TimeEntry
                key={item.id}
                item={item}
                index={index}
                getTimeEntries={getTimeEntries}
                listLength={timeEntries.length}
                onDelete={onDelete}
              />
            );
          })}
        </ol> */}
        {/* timeEntries - all loaded time entries in the app */}
        {/* {totalTimeEntries > timeEntries.length && (
          <div className="buttonContainer">
            <button
              className={"inputButton"}
              type="button"
              onClick={loadMoreTimeEntries}
            >
              Load more
            </button>
          </div>
        )} */}
        <StructuredTimeEntriesList
          timeEntries={timeEntries}
          totalTimeEntries={totalTimeEntries}
          timeEntriesLength={timeEntries.length}
          loadMoreTimeEntries={loadMoreTimeEntries}
          getTimeEntries={getTimeEntries}
        />
      </div>
    </Layout>
  );
};
