import styles from "./CalendarDays.module.scss"


const CalendarDays = ({
  currentYear,
  currentMonth,
  previousMonthLastDay,
  weekIds,
  maxDayMonth,
  lastDay,
  nextMonthDays,
}) => {


  const isToday = (day) => {
    let date = new Date();

    if (
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear &&
      date.getDate() === day
    ) {
      return true;
    } else return false;
  };

  const isSunday = (day) => {
    let test = new Date(currentYear, currentMonth, day);
    return test.getDay() === 0;
  };


  const isTodayAndSunday = (day) => {
    let test = new Date(currentYear, currentMonth, day);
    let date = new Date();
    if (
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear &&
      date.getDate() === day &&
      test.getDay() === 0
    ) {
      return true;
    } else return false;
  }

console.log(currentYear, currentMonth);
   
  return (
    <div className={styles.CalendarDays}>
      {weekIds
        .slice(0, new Date(currentYear, currentMonth).getDay())
        .map((weekId) => (
          <div className={styles.daysOfPreviuosNextMonth}>
            <p className={styles.daysOfPreviuosNextMonth_days}>
              {previousMonthLastDay - weekId}
            </p>
          </div>
        ))
        .reverse()}

      {maxDayMonth.slice(0, lastDay).map((day) => (
        <>
          <div className={`${styles.daysOfTheMonth} `}>
            <p
              className={`${isSunday(day) ? styles.sunday : ""} ${
                isToday(day) ? styles.today : ""
              }  ${isTodayAndSunday(day) ? styles.todayAndSunday : ""}`}
            >
              {day}
            </p>
          </div>
          {isSunday(day)}
        </>
      ))}
      {weekIds.slice(0, nextMonthDays).map((weekId, index) => (
        <div className={styles.daysOfPreviuosNextMonth}>
          <p className={styles.daysOfPreviuosNextMonth_days}>{index + 1}</p>
        </div>
      ))}
    </div>
  );
};


export default CalendarDays;


//  {
//    weekIds
//      .slice(0, new Date(currentYear, currentMonth).getDay())
//      .reverse()
//      .map((weekdayId) => (
//        <div className={styles.PreviousDays}>
//          <p className={styles.noDays}>{previousMonthLastDay - weekdayId}</p>
//        </div>
//      ));
//  }