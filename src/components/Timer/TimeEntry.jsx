import { Duration } from "./Duration";
import { format } from "date-fns";

export const TimeEntry = (props) => {
  const { item, onClick } = props;
  const itemDuration = item.endTime - item.startTime;
  const endTimeFormated = format(new Date(item.endTime), "HH:mm:ss");
  const startTimeFormated = format(new Date(item.startTime), "HH:mm:ss");

  return (
    <>
      <li>
        <Duration timePassed={itemDuration} />

        <span>Start time:{startTimeFormated}</span>
        <br />
        <span>End time:{endTimeFormated}</span>
        <button onClick={onClick}>x</button>
      </li>
    </>
  );
};
