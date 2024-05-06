import styles from "./DateSelector.module.scss";
//hooks
import { useState } from "react";
// icons
import Arrow from "../Icons/Arrow";

const DateSelector = ({
  currentYear,
  months,
  setSelectedMonth,
  setDateSelectorModal,
  selectedYear,
  setSelectedYear,
}) => {
  const [yearsModal, setYearsModal] = useState(false);
  const [yearCount, setYearCount] = useState(0);

  return (
    <div className={styles.DateSelector}>
      <div className={styles.yearMonthShower}>
        <h3
          onClick={() => {
            setYearsModal((prev) => !prev);
          }}
        >
          {currentYear}
        </h3>
        {yearsModal && (
          <div className={styles.yearMonthShower_buttons}>
            <Arrow
              className={styles.arrowIcon}
              onClick={() => setYearCount(yearCount - 12)}
            />
            <Arrow
              className={styles.arrowIcon}
              onClick={() => setYearCount(yearCount + 12)}
            />
          </div>
        )}
      </div>
      <div className={styles.dateSelect}>
        {months.map((month, i) =>
          yearsModal ? (
            <p
              onClick={(e) => {
                let year = Number(e.target.innerText);
                setSelectedYear(year);
                setYearsModal(false);
                setDateSelectorModal(false);
              }}
            >
              {currentYear + i + yearCount}
            </p>
          ) : (
            <p
              onClick={() => {
                let numOfMonth = months.indexOf(month);
                setSelectedMonth(numOfMonth);
                setDateSelectorModal(false);
                console.log("ciao");
              }}
            >
              {month.slice(0, 3)}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default DateSelector;


