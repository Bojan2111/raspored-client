import React from "react";
import classes from "./MainView.module.css";
import PersonalSchedule from "../views/schedule/PersonalSchedule";
import AddEmployee from "../views/employee/AddEmployee";
import Employees from "../views/employee/Employees";
import Teams from "../views/team/Teams";
import TeamSchedule from "../views/schedule/TeamSchedule";
import { useSelector } from "react-redux";

const MainView = () => {
  const selectedOption = useSelector((store) => store.header.selectedOptionId);
  let mainViewComponent = <PersonalSchedule />;
  switch (selectedOption) {
    case 1:
      mainViewComponent = <PersonalSchedule />;
      break;

    case 2:
      mainViewComponent = <TeamSchedule />;
      break;

    case 6:
      mainViewComponent = <Teams />;
      break;

    case 10:
      mainViewComponent = <Employees />;
      break;

    case 11:
      mainViewComponent = <AddEmployee />;
      break;

    default:
      mainViewComponent = "";
      break;
  }
  return <div className={classes.container}>{mainViewComponent}</div>;
};

export default MainView;
