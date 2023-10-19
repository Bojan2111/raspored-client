import React from "react";
import FuncButton from "../layout/FuncButton";
import classes from "./DashboardHeader.module.css";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const options = useSelector((store) => store.menu.options);
  document
    .querySelector(":root")
    .style.setProperty("--features-grid-cols", options.length);

  return (
    <div className={classes.features}>
      {options.map((d) => (
        <FuncButton
          optionId={d.id}
          optionName={d.name}
          description={d.description}
        />
      ))}
    </div>
  );
};

export default DashboardHeader;
