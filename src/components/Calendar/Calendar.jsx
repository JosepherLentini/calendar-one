import { useEffect, useState } from "react";
import styles from "./Calendar.module.scss";

import Arrow from "../Icons/Arrow";
// components
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarDays from "../CalendarDays/CalendarDays";

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [lastDay, setLastDay] = useState(null);
  const [previousMonthLastDay, setPreviousMonthLastDay] = useState(null);
  const [nextMonthDays, setNextMonthDays] = useState(null);

  const [dateSelectorModal, setDateSelectorModal] = useState(false);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekIds = [0, 1, 2, 3, 4, 5, 6];
  let maxDayMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  useEffect(() => {
    let newCurrentMonth = currentDate.getMonth();
    let newCurrentYear = currentDate.getFullYear();

    setCurrentMonth(newCurrentMonth);
    setCurrentYear(newCurrentYear);

    let newLastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    let newPrevLastDay = new Date(currentYear, currentMonth, 0).getDate();
    let newNextMonthDays =
      6 - new Date(currentYear, currentMonth + 1, 0).getDay();

    setLastDay(newLastDay);
    setPreviousMonthLastDay(newPrevLastDay);
    setNextMonthDays(newNextMonthDays);
  }, [currentDate]);

  useEffect(() => {
    if (selectedMonth || selectedMonth === 0) {
      currentDate.setMonth(selectedMonth);
      setCurrentMonth(currentDate.getMonth());
    } else {
      setCurrentDate(new Date());
    }
  }, [selectedMonth]);

  useEffect(() => {
    if (selectedYear) {
      currentDate.setYear(selectedYear);
      setCurrentYear(currentDate.getFullYear());
    } else {
      setCurrentDate(new Date());
    }
  }, [selectedYear]);

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

  useEffect(() => {
    let newLastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    setLastDay(newLastDay);
    let newPrevLastDay = new Date(currentYear, currentMonth, 0).getDate();
    setPreviousMonthLastDay(newPrevLastDay);
    let newNextMonthDays =
      6 - new Date(currentYear, currentMonth + 1, 0).getDay();
    setNextMonthDays(newNextMonthDays);
  }, [currentMonth, currentYear]);

  return (
    <div className={styles.Calendar}>
      <CalendarHeader
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        months={months}
        dateSelectorModal={dateSelectorModal}
        setDateSelectorModal={setDateSelectorModal}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <div className={styles.DaysofWeek}>
        {weekdays.map((day) => (
          <h2 className={styles.weekDay}>{day}</h2>
        ))}
      </div>

      <CalendarDays
        currentYear={currentYear}
        currentMonth={currentMonth}
        lastDay={lastDay}
        previousMonthLastDay={previousMonthLastDay}
        weekIds={weekIds}
        maxDayMonth={maxDayMonth}
        nextMonthDays={nextMonthDays}
      />
    </div>
  );
};

export default Calendar;
