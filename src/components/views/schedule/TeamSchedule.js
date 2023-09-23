import React, { useState } from "react";
import classes from "./TeamSchedule.module.css";

const TeamSchedule = (props) => {
  const [title, setTitle] = useState("");
  const [team, setTeam] = useState("");
  const [month, setMonth] = useState("");
  const [shifts, setShifts] = useState([]);

  const fakeData = [
    {
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
    },
    {
      teamMemberId: 2,
      teamName: "Tim 1",
      firstName: "Lazar",
      lastName: "Lazic",
      teamMemberRoleName: "",
      teamMemberRoleDescription: "",
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
    },
  ];

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

  const resultArr = dateArray.map((numA) => {
    const matchingObj = fakeData[0].shifts.find(
      (objB) => parseInt(objB.shiftDate.split("T")[0].split("-")[2]) === numA
    );
    return matchingObj !== undefined
      ? {
          name: matchingObj.shiftTypeName,
          description: matchingObj.shiftTypeDescription,
        }
      : { name: "", description: "" };
  });

  return (
    <div>
      <div className={classes.header}>
        {/* <h2>{fakeData.teamName}</h2>
        <h3>{`${fakeData.lastName} ${fakeData.firstName} - ${fakeData.teamMemberRoleDescription}`}</h3>
        <p>{`Raspored rada za mesec ${fakeData.monthName}`}</p> */}
      </div>
      <table className={`table table-bordered ${classes.schedule}`}>
        <thead>
          <tr>
            <td>IME I PREZIME</td>
            <td></td>
            {dateArray.map((date) => (
              <td className={classes["cell-data"]} key={date}>
                {date}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {fakeData.map((item) => (
            <tr key={`tm-${item.teamMemberId}`}>
              <td
                className={classes["cell-data"]}
              >{`${item.lastName} ${item.firstName}`}</td>
              {item.teamMemberRoleName !== "" ? (
                <td
                  className={classes["cell-data"]}
                  title={item.teamMemberRoleDescription}
                >
                  {item.teamMemberRoleName}
                </td>
              ) : (
                <td className={classes["cell-data"]}></td>
              )}
              {resultArr.map((shift) => (
                <td className={classes["cell-data"]} title={shift.description}>
                  {shift.name}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamSchedule;
