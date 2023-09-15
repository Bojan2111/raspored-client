import React, { useState } from "react";
import Calendar from "../../calendar/Calendar";
import classes from "./PersonalSchedule.module.css";

const PersonalSchedule = (props) => {
  const [title, setTitle] = useState("");
  const [team, setTeam] = useState("");
  const [month, setMonth] = useState("");
  const [shifts, setShifts] = useState([]);

  const fakeData = {
    teamMemberId: 1,
    teamName: "Tim 1",
    firstName: "Petar",
    lastName: "Petrovic",
    teamMemberRoleName: "VT",
    teamMemberRoleDescription: "Voda smene",
    monthName: "AUGUST",

    shifts: [
      {
        shiftDate: "2023-08-01T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
      {
        shiftDate: "2023-08-02T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "N",
        shiftTypeDescription: "Nocna smena - od 19h do 07h",
      },
      {
        shiftDate: "2023-08-06T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
      {
        shiftDate: "2023-08-07T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "N",
        shiftTypeDescription: "Nocna smena - od 19h do 07h",
      },
      {
        shiftDate: "2023-08-11T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
      {
        shiftDate: "2023-08-12T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "N",
        shiftTypeDescription: "Nocna smena - od 19h do 07h",
      },
      {
        shiftDate: "2023-08-16T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
      {
        shiftDate: "2023-08-17T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "N",
        shiftTypeDescription: "Nocna smena - od 19h do 07h",
      },
      {
        shiftDate: "2023-08-21T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
      {
        shiftDate: "2023-08-22T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "N",
        shiftTypeDescription: "Nocna smena - od 19h do 07h",
      },
      {
        shiftDate: "2023-08-26T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
      {
        shiftDate: "2023-08-27T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "N",
        shiftTypeDescription: "Nocna smena - od 19h do 07h",
      },
      {
        shiftDate: "2023-08-31T00:00:00",
        teamMemberId: 1,
        shiftTypeName: "D",
        shiftTypeDescription: "Dnevna smena - od 07h do 19h",
      },
    ],
  };

  const dateArray = [];

  function setMonthLength() {
    let today = new Date();
    let lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();

    return lastDayOfMonth;
  }

  for (let i = 1; i <= setMonthLength(); i++) {
    dateArray.push(i);
  }

  return (
    <div>
      <div className={classes.header}>
        <h2>{fakeData.teamName}</h2>
        <h3>{`${fakeData.lastName} ${fakeData.firstName} - ${fakeData.teamMemberRoleDescription}`}</h3>
        <p>{`Raspored rada za mesec ${fakeData.monthName}`}</p>
      </div>
      <div className={classes.schedule}>
        <div className={classes.dates}>
          <div>IME I PREZIME</div>
          {dateArray.map((date) => (
            <div key={date}>{date}</div>
          ))}
        </div>
        <Calendar shifts={fakeData.shifts} />
      </div>
    </div>
  );
};

export default PersonalSchedule;
