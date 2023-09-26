import React from "react";
import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  const handleBtnClick = () => {
    props.onClick(props.btnText);
  };
  return (
    <div
      className={`${classes.container} ${
        props.isSelected ? classes.selected : ""
      }`}
      onClick={handleBtnClick}
    >
      <p>{props.btnText}</p>
    </div>
  );
};

export default LinkButton;
