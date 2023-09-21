import React from "react";
import classes from "./MainView.module.css";
import PersonalSchedule from "../views/schedule/PersonalSchedule";
import AddEmployee from "../views/employee/AddEmployee";
import Employees from "../views/employee/Employees";
import Teams from "../views/team/Teams";

const MainView = (props) => {
  return (
    <div className={classes.container}>
      {/* <h2>{props.feature}</h2>
      {props.feature === "Licni" ? <PersonalSchedule /> : <p>Nothing</p>} */}
      {/* <Employees /> */}
      {/* <AddEmployee /> */}
      <Teams />
    </div>
  );
};

export default MainView;
