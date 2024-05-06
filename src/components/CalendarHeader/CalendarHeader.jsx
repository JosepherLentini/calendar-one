import styles from "./CalendarHeader.module.scss";
//
import { useState } from "react";
// icons
import Arrow from "../Icons/Arrow";
//components
import DateSelector from "../DateSelector/DateSelector";

const CalendarHeader = ({
  currentYear,
  setCurrentYear,
  currentMonth,
  setCurrentMonth,
  months,
  dateSelectorModal,
  setDateSelectorModal,
  setSelectedMonth,
  selectedYear,
  setSelectedYear,
}) => {
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className={styles.CalendarHeader}>
      <p
        className={styles.CalendarHeader_Arrow}
        onClick={() => goToPreviousMonth()}
      >
        <Arrow className={styles.arrowIcon} />
      </p>
      <div className={styles.CurrentDate}>
        <h1 onClick={() => setDateSelectorModal((prev) => !prev)}>
          <span className={styles.currentMonth}>{months[currentMonth]}</span>
          <span className={styles.currentYear}>{currentYear}</span>
        </h1>
        {dateSelectorModal && (
          <DateSelector
            currentYear={currentYear}
            months={months}
            setSelectedMonth={setSelectedMonth}
            setDateSelectorModal={setDateSelectorModal}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        )}
      </div>
      <p
        className={styles.CalendarHeader_Arrow}
        onClick={() => goToNextMonth()}
      >
        <Arrow className={styles.arrowIcon} />
      </p>
    </div>
  );
};

export default CalendarHeader;
