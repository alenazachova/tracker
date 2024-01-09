import { useState } from "react";
import { Duration } from "./Duration";
import { format } from "date-fns";

export const TimeEntry = (props) => {
  const { item, onClick, index, listLength } = props;
  const [localDescription, setlocalDescription] = useState(item.description);

  const itemDuration = item.endTime - item.startTime;
  const endTimeFormatted = format(item.endTime, "HH:mm:ss");
  const startTimeFormatted = format(item.startTime, "HH:mm:ss");
  const dateTimeFormatted = format(item.startTime, "PP");

  const handleDescriptionChange = (event) => {
    setlocalDescription(event.target.value);
  };

  const comparingNumber = listLength - 1;
  //rendering from the first one again, than second, and again  with third times - one, second, third
  const liClass = index < comparingNumber ? "mb" : "";

  return (
    <>
      <li className={liClass}>
        <div className="d-flex">
          <div>
            <div className="d-flex space-between">
              <strong>{dateTimeFormatted}</strong>
              <Duration timePassed={itemDuration} />
            </div>
            <input
              className="no-border"
              type="text"
              value={localDescription}
              onChange={handleDescriptionChange}
              placeholder="Přidat popis"
            />
            <span>{startTimeFormatted}</span>
            <span> - </span> <span>{endTimeFormatted}</span>
            <br />
          </div>
          <div className="ml-auto">
            <button onClick={onClick}>x</button>
          </div>
        </div>
      </li>
    </>
  );
};
