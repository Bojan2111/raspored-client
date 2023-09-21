import React from "react";
import classes from "./Teams.module.css";

const Teams = (props) => {
  const fakeData = [
    {
      id: 1,
      teamName: "Tim 1",
      numberOfEmployees: 12,
    },
    {
      id: 2,
      teamName: "Tim 2",
      numberOfEmployees: 13,
    },
    {
      id: 3,
      teamName: "Tim 3",
      numberOfEmployees: 13,
    },
    {
      id: 4,
      teamName: "Tim 4",
      numberOfEmployees: 12,
    },
    {
      id: 5,
      teamName: "Tim 5",
      numberOfEmployees: 14,
    },
  ];

  return (
    <div>
      <div className={classes.header}>
        <h2>Spisak radnih timova</h2>
      </div>
      <div className={classes["team-list"]}>
        <div className={classes["table-head"]}>
          <div className={classes["table-head-cell"]}>Naziv tima</div>
          <div className={classes["table-head-cell"]}>Broj zaposlenih</div>
        </div>
        <div className={classes["table-body"]}>
          {fakeData.map((item) => (
            <div key={`row_${item.id}`} className={classes["table-body-row"]}>
              <div
                key={`name_${item.id}`}
                className={classes["table-body-cell"]}
              >
                {item.teamName}
              </div>
              <div
                key={`num_${item.id}`}
                className={classes["table-body-cell"]}
              >
                {item.numberOfEmployees}
              </div>
              <div key={`tm_${item.id}`} className={classes["action-button"]}>
                Pregled zaposlenih u smeni
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
