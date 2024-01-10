import { getWeek } from "date-fns";

export const WeekInfo = () => {
  const today = new Date();

  const weekDay = getWeek(today);
  return (
    <>
      <div>
        This week <span className="biggerSize">W{weekDay}</span>
      </div>
    </>
  );
};
