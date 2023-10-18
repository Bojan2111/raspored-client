import React from "react";
import classes from "./FuncButton.module.css";
// import { useDispatch } from "react-redux";

const FuncButton = (props) => {
  // const dispatch = useDispatch();

  const handleDivClick = () => {
    props.onClick(props.funcBtnText);
  };

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
