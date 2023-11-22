export const Duration = (props) => {
  //milisekundy

  const { timePassed } = props;

  //sekundy
  const timePassedInSeconds = timePassed / 1000;
  const timePassedInSecondsRest = Math.floor(timePassedInSeconds % 60);

  const timePassedInMinutes = timePassedInSeconds / 60;
  const timePassedInMinutesRest = Math.floor(timePassedInMinutes % 60);

  const timePassedInHours = timePassedInMinutes / 60;
  const timePassedInHoursRest = Math.floor(timePassedInHours % 24);

  //   const timePassedInDays = timePassedInHours / 24;
  //   const timePassedInDaysRest = Math.floor(timePassedInDays % 7);

  //   const timePassedInWeeks = timePassedInDays / 7;
  //   const timePassedInWeeksRest = Math.floor(timePassedInWeeks);

  return (
    <div>
      {/* <span>{("0" + timePassedInWeeksRest).slice(-2)}:</span>
      <span>{("0" + timePassedInDaysRest).slice(-2)}:</span> */}

      <span>{("0" + timePassedInHoursRest).slice(-2)}:</span>
      <span>{("0" + timePassedInMinutesRest).slice(-2)}:</span>
      <span>{("0" + timePassedInSecondsRest).slice(-2)}</span>
    </div>
  );
};
