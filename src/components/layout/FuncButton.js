import React from "react";
import classes from "./FuncButton.module.css";

const FuncButton = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <p>
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
        </p>
        <p>{props.funcBtnText}</p>
      </div>
    </div>
  );
};

export default FuncButton;
