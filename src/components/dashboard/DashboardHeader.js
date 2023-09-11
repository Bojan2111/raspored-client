import React from "react";
import FuncButton from "../layout/FuncButton";
import classes from "./DashboardHeader.module.css";

const DashboardHeader = (props) => {
  return (
    <div className={classes.functions}>
      {props.content.map((d) => (
        <FuncButton funcBtnText={d} />
      ))}
    </div>
  );
};

export default DashboardHeader;
