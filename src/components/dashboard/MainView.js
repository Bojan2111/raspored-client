import React from "react";
import classes from "./MainView.module.css";
import PersonalSchedule from "../views/schedule/PersonalSchedule";

const MainView = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.content.title}</h1>
      <h3>{props.content.subtitle}</h3>
      <p>{props.content.info}</p>
      <h2>{props.feature}</h2>
      {props.feature === "Licni" ? <PersonalSchedule /> : <p>Nothing</p>}
    </div>
  );
};

export default MainView;
