import React from "react";
import FuncButton from "../layout/FuncButton";
import classes from "./DashboardHeader.module.css";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const DashboardHeader = (props) => {
  const options = useSelector((store) => store.header.optionsList);
  document
    .querySelector(":root")
    .style.setProperty("--features-grid-cols", options.length);

  // const dispatch = useDispatch();

  function handleFuncBtnClick(option) {
    props.onFeatureClick(option);
  }

  console.log(options);

  return (
    <div className={classes.features}>
      {options.map((d) => (
        <FuncButton onClick={handleFuncBtnClick} key={d} funcBtnText={d} />
      ))}
    </div>
  );
};

export default DashboardHeader;
