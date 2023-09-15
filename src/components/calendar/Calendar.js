import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isSameMonth,
  isSameDay,
  addDays,
} from "date-fns";
import classes from "./Calendar.module.css";

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const shiftsData = props.shifts.reduce((result, shift) => {
    // Extract the date part (YYYY-MM-DD) from shiftDate
    const dateKey = shift.shiftDate.split("T")[0];

    // Create an object with shiftTypeName and shiftTypeDescription
    const shiftInfo = {
      shiftTypeName: shift.shiftTypeName,
      shiftTypeDescription: shift.shiftTypeDescription,
    };

    // Add the shiftInfo to the shiftsData using the dateKey as the key
    result[dateKey] = shiftInfo;

    return result;
  }, {});

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className={classes.header}>
        <div className={classes.previous} onClick={prevMonth}>
          &#8249;
        </div>
        <div className={classes["current-month"]}>
          {format(currentDate, dateFormat)}
        </div>
        <div className={classes.next} onClick={nextMonth}>
          &#8250;
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eeee";
    const days = [];
    let startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={classes.day} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className={classes.days}>{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        // Get shift data for the current date
        const shiftData = shiftsData[format(day, "yyyy-MM-dd")];

        days.push(
          <div
            className={`${classes.day} ${
              !isSameMonth(day, monthStart) ? classes.disabled : ""
            } ${isSameDay(day, new Date()) ? classes.today : ""}`}
            key={day}
          >
            <span
              onClick={() => handleDateClick(cloneDay)}
              className={classes.clickable}
            >
              {formattedDate}
            </span>

            {/* Display shiftTypeName next to the date */}
            {shiftData && (
              <div className={classes.shiftType}>{shiftData.shiftTypeName}</div>
            )}

            {/* Tooltip for shiftTypeDescription */}
            {shiftData && (
              <div className={classes.tooltip}>
                {shiftData.shiftTypeDescription}
              </div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={classes.row} key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className={classes.body}>{rows}</div>;
  };

  const handleDateClick = (day) => {
    console.log("Clicked date: ", day);
  };

  return (
    <div className={classes.calendar}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
