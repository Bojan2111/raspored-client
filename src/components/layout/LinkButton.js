import React from "react";
import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <div className={classes.container}>
      <p>{props.btnText}</p>
    </div>
  );
};

export default LinkButton;
