import "./Counter.css";
import React, { useRef, useState } from "react";
import { Duration } from "./Duration";
import { InputField } from "../InputField";

export const Counter = () => {
  //stav, co muzu nastavit, vypsat
  //getter a setter
  // to druhy je to na co to menim

  //aktulni cas
  const [nowTime, setNowTime] = useState(null);
  // spustila jsem casovac
  const [startTime, setStartTime] = useState(null);

  const timePassed = nowTime - startTime;

  const [listTime, setListTime] = useState([]);

  //nejaka reference intervalu
  const intervalRef = useRef(null);

  const handleStart = () => {
    //chci aktulni cas, kdy zacla
    setStartTime(Date.now());

    setNowTime(Date.now());
    //prop useRef je current
    intervalRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);
    //1 sekunda
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);

    // 1. TODO: Zkonvertuj ten item, který přidáváš do toho pole (seznamu) do objektu
    // Ad. 1. TODO: Objekt bude mít strukturu: { id: string (nejlepší asi použít proměnnou startTime), startTime: number, endTime: number }
    // Ad. 1. TODO: Objekt bude přidán do toho pole (seznamu)
    const finalTimePassed = nowTime - startTime;

    const newListTime = [...listTime, finalTimePassed];

    setListTime(newListTime);

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
      {/* zajima me ta hodnota vlevo */}
      <div className="rightTogether">
        <InputField />
        <Duration timePassed={timePassed} />
        {/* falsy - startTime je null */}
        {startTime ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
      </div>
      <ol>
        {/* item je cas co ubehl v casovem zaznamu */}
        {listTime.map((item, index) => {
          // 2. TODO: Získej props (id, startTime, endTime) z itemu
          // 3. TODO: Vytvoř konstantu, která bude reprezentovat uběhlý čas toho specifického časového záznamu (const itemDuration = ...)

          // Ad. 4. TODO: Zde vytvoř tu konstantu...
          return (
            // 5. TODO: Přesuň toto li do své vlastní komponenty s požadovanýma propkama (item - i ta konstanta z TODO č. 3 bude přesunuta, handleDelete)
            <li key={item}>
              <Duration timePassed={item} />
              <button
                // 4. TODO: Přesuň tuto anonymní šipkovou funkci do vlastní konstanty na řádek 76
                onClick={() => {
                  handleDelete(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};
