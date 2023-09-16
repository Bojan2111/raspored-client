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
import { srLatn } from "date-fns/locale";
import classes from "./Calendar.module.css";

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const shiftsData = props.shifts.reduce((result, shift) => {
    const dateKey = shift.shiftDate.split("T")[0];

    const shiftInfo = {
      shiftTypeName: shift.shiftTypeName,
      shiftTypeDescription: shift.shiftTypeDescription,
    };

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
          {format(currentDate, dateFormat, { locale: srLatn })}
        </div>
        <div className={classes.next} onClick={nextMonth}>
          &#8250;
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eeeeee";
    const days = [];
    let startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={classes.weekday} key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: srLatn })}
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

        const shiftData = shiftsData[format(day, "yyyy-MM-dd")];

        days.push(
          <div
            className={`${classes.day} ${
              !isSameMonth(day, monthStart) ? classes.disabled : ""
            } ${isSameDay(day, new Date()) ? classes.today : ""} ${
              i === 6 || i === 5 ? classes.weekend : ""
            }`}
            key={day}
          >
            <div
              onClick={() => handleDateClick(cloneDay)}
              className={classes.clickable}
            >
              {formattedDate}
            </div>

            {shiftData && (
              <div
                className={classes["shift-type"]}
                title={shiftData.shiftTypeDescription}
              >
                {shiftData.shiftTypeName}
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

    return <div>{rows}</div>;
  };

  const handleDateClick = (day) => {
    console.log("Clicked date: ", day);
  };

  return (
    <div className={classes.calendar}>
      {renderHeader()}
      {renderDays()}
      <div className={classes["calendar-body"]}>{renderCells()}</div>
    </div>
  );
};

export default Calendar;
