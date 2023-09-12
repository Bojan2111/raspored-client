import React from "react";
import classes from "./FuncButton.module.css";

const FuncButton = (props) => {
  function handleDivClick() {
    props.onClick(props.funcBtnText);
  }

  return (
    <div className={classes.container} onClick={handleDivClick}>
      <div>
        <p>
          <i className="fa fa-calendar-o" aria-hidden="true"></i>
        </p>
        <p>{props.funcBtnText}</p>
      </div>
    </div>
  );
};

export default FuncButton;
