import React from "react";
import classes from "./LinkButton.module.css";
import { useDispatch } from "react-redux";
import { setMenu } from "../../store/menuSlice";

const LinkButton = (props) => {
  const dispatch = useDispatch();

  const handleBtnClick = () => {
    dispatch(setMenu(props.btnText));
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
