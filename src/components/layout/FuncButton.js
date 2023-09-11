import React from "react";
import classes from "./FuncButton.module.css";

const FuncButton = (props) => {
  return (
    <div className={classes.container}>
      <div>image</div>
      <p>{props.funcBtnText}</p>
    </div>
  );
};

export default FuncButton;
