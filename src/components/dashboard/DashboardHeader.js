import React from "react";
import FuncButton from "../layout/FuncButton";
import classes from "./DashboardHeader.module.css";

const DashboardHeader = (props) => {
  document
    .querySelector(":root")
    .style.setProperty("--features-grid-cols", props.content.length);

  function handleFuncBtnClick(option) {
    props.onFeatureClick(option);
  }

  return (
    <div className={classes.features}>
      {props.content.map((d) => (
        <FuncButton onClick={handleFuncBtnClick} key={d} funcBtnText={d} />
      ))}
    </div>
  );
};

export default DashboardHeader;
