import React, { useEffect, useState } from "react";
import classes from "./Calendar.module.css";

// const fakeCal = {
//   "week-12": [31, 1, 2, 3, 4, 5, 6],
//   "week-13": [7, 8, 9, 10, 11, 12, 13],
//   "week-14": [14, 15, 16, 17, 18, 19, 20],
//   "week-15": [21, 22, 23, 24, 25, 26, 27],
//   "week-16": [28, 29, 30, 31, 1, 2, 3],
// };

// const weekNums = [12, 13, 14, 15, 16];

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  console.log("Line 18");
  const months = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ];
  const dateArr = [];

  // useEffect(() => {
  //   setCurrentDate(new Date());
  //   setCurrentYear(currentDate.getFullYear());
  //   setCurrentMonth(currentDate.getMonth());
  // }, []);

  function createCalendar() {
    let firstWeekday = new Date(currentYear, currentMonth, 1).getDay();
    let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastWeekday = new Date(currentYear, currentMonth, lastDate).getDay();
    let monthLastDate = new Date(currentYear, currentMonth, 0).getDate();
    console.log("Line 46");

    for (let i = firstWeekday; i > 0; i--) {
      dateArr.push({ marked: "inactive", date: monthLastDate - i + 1 });
    }
    console.log("Line 51");

    for (let i = 1; i <= lastDate; i++) {
      let todayClass =
        i === currentDate.getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
          ? "active"
          : "";
      dateArr.push({ marked: todayClass, date: i });
    }
    console.log("Line 62");

    for (let i = lastWeekday; i < 6; i++) {
      dateArr.push({ marked: "inactive", date: i - lastWeekday + 1 });
    }
    console.log("Line 67");
  }

  console.log("Line 70");
  useEffect(() => {
    createCalendar();
    console.log("Line 73");
  });
  console.log("Line 75");

  function handlePrevNextClick(event) {
    window.event.preventDefault();
    setCurrentMonth((prevState) =>
      event.id === "prev" ? prevState - 1 : prevState + 1
    );
    console.log("Line 81");
    if (currentMonth < 0 || currentMonth > 11) {
      setCurrentDate(new Date(currentYear, currentMonth, new Date().getDate()));
      setCurrentYear(currentDate.getFullYear());
      setCurrentMonth(currentDate.getMonth());
    } else {
      setCurrentDate(new Date());
    }
    createCalendar();
  }

  return (
    <div>
      <div className={classes["month-year"]}>
        <div
          id="prev"
          className={classes["month-year-btn"]}
          onClick={handlePrevNextClick}
        >
          &lt;
        </div>
        <div>{`${months[currentMonth]} ${currentYear}`}</div>
        <div
          id="next"
          className={classes["month-year-btn"]}
          onClick={handlePrevNextClick}
        >
          &gt;
        </div>
      </div>
      <div>
        <div>
          <div className={classes.workday}>Pon</div>
          <div className={classes.workday}>Uto</div>
          <div className={classes.workday}>Sre</div>
          <div className={classes.workday}>Čet</div>
          <div className={classes.workday}>Pet</div>
          <div className={classes.saturday}>Sub</div>
          <div className={classes.sunday}>Ned</div>
        </div>
        <div className={classes["date-list"]}>
          {dateArr.map((date) => (
            <div className={date.marked}>{date.date}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
