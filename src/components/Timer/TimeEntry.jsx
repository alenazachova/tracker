import { Duration } from "./Duration";
import { format } from "date-fns";

export const TimeEntry = (props) => {
  const { item, onClick, index, listLength } = props;
  const itemDuration = item.endTime - item.startTime;
  const endTimeFormated = format(new Date(item.endTime), "HH:mm:ss");
  const startTimeFormated = format(new Date(item.startTime), "HH:mm:ss");
  const dateTimeFormated = format(new Date(item.startTime), "PP");

  const handleDescriptionChange = (event) => {
    onDescriptionChange(item.id, event.target.value);
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
              <strong>{dateTimeFormated}</strong>
              <Duration timePassed={itemDuration} />
            </div>
            <input
              className="no-border"
              type="text"
              value={item.description}
              onChange={handleDescriptionChange}
              placeholder="Přidat popis"
            />
            <span>{startTimeFormated}</span>
            <span> - </span> <span>{endTimeFormated}</span>
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
