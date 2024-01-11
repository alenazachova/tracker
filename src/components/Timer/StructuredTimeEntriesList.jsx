import { format } from "date-fns";
import { TimeEntry } from "./TimeEntry";

export const StructuredTimeEntriesList = (props) => {
  const {
    timeEntries,
    totalTimeEntries,
    getTimeEntries,
    timeEntriesLength,
    loadMoreTimeEntries,
  } = props;
  const structuredTimeEntries = timeEntries.reduce((acc, item) => {
    const date = format(parseInt(item.started_at, 10), "dd MMMM yyyy");
    const oldTimeEntries = acc[date] ?? [];
    const newTimeEntries = [...oldTimeEntries, item];
    return {
      ...acc,
      [date]: newTimeEntries,
    };
  }, {});

  console.log(structuredTimeEntries);

  return (
    <div>
      {Object.entries(structuredTimeEntries).map(([date, timeEntries]) => {
        return (
          <div className="pl-1" key={date}>
            <h4>{date}</h4>
            <ol>
              {timeEntries.map((item, index) => (
                <TimeEntry
                  key={item.id}
                  item={item}
                  index={index}
                  listLength={timeEntries.length}
                  getTimeEntries={getTimeEntries}
                />
              ))}
            </ol>
          </div>
        );
      })}
      {/* timeEntries - all loaded time entries in the app */}
      {totalTimeEntries > timeEntriesLength && (
        <div className="buttonContainer">
          <button
            className={"inputButton"}
            type="button"
            onClick={loadMoreTimeEntries}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
