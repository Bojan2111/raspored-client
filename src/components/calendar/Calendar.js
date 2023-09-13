import React, { useState } from "react";
import classes from "./Calendar.module.css";

const Calendar = (props) => {
  // const [currentDate, setCurrentDate] = useState({
  //   year: 0,
  //   month: ""
  // });

  const fakeCal = {
    "week-12": [31, 1, 2, 3, 4, 5, 6],
    "week-13": [7, 8, 9, 10, 11, 12, 13],
    "week-14": [14, 15, 16, 17, 18, 19, 20],
    "week-15": [21, 22, 23, 24, 25, 26, 27],
    "week-16": [28, 29, 30, 31, 1, 2, 3],
  };

  const weekNums = [12, 13, 14, 15, 16];

  const date = new Date();
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

  function handlePrevYear() {
    date.setFullYear(date.getFullYear() - 1);
  }

  function handlePrevMonth() {
    date.setMonth(date.getMonth() - 1);
  }

  function handleNextMonth() {
    date.setMonth(date.getMonth() + 1);
  }

  function handleNextYear() {
    date.setFullYear(date.getFullYear() + 1);
  }

  return (
    <div>
      <div className={classes["month-year"]}>
        <div className={classes["month-year-btn"]} onClick={handlePrevYear}>
          &lt;&lt;
        </div>
        <div className={classes["month-year-btn"]} onClick={handlePrevMonth}>
          &lt;
        </div>
        <div>
          {months[date.getMonth()]} {date.getFullYear()}
        </div>
        <div className={classes["month-year-btn"]} onClick={handleNextMonth}>
          &gt;
        </div>
        <div className={classes["month-year-btn"]} onClick={handleNextYear}>
          &gt;&gt;
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className={classes.week}>Br. Ned.</th>
            <th className={classes.workday}>Pon</th>
            <th className={classes.workday}>Uto</th>
            <th className={classes.workday}>Sre</th>
            <th className={classes.workday}>Čet</th>
            <th className={classes.workday}>Pet</th>
            <th className={classes.saturday}>Sub</th>
            <th className={classes.sunday}>Ned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weekNums[0]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][0]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][1]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][2]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][3]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][4]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][5]}</td>
            <td>{fakeCal[`week-${weekNums[0]}`][6]}</td>
          </tr>
          <tr>
            <td>{weekNums[1]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][0]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][1]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][2]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][3]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][4]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][5]}</td>
            <td>{fakeCal[`week-${weekNums[1]}`][6]}</td>
          </tr>
          <tr>
            <td>{weekNums[2]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][0]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][1]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][2]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][3]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][4]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][5]}</td>
            <td>{fakeCal[`week-${weekNums[2]}`][6]}</td>
          </tr>
          <tr>
            <td>{weekNums[3]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][0]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][1]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][2]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][3]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][4]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][5]}</td>
            <td>{fakeCal[`week-${weekNums[3]}`][6]}</td>
          </tr>
          <tr>
            <td>{weekNums[4]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][0]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][1]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][2]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][3]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][4]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][5]}</td>
            <td>{fakeCal[`week-${weekNums[4]}`][6]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
