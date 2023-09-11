import React from "react";
import classes from "./MainView.module.css";

const MainView = (props) => {
  console.log("From main view:", props.token);
  return (
    <div className={classes.container}>
      <h1>{props.content.title}</h1>
      <h3>{props.content.subtitle}</h3>
      <p>{props.content.info}</p>
    </div>
  );
};

export default MainView;
