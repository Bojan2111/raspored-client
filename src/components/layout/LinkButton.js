import React from "react";
import classes from "./LinkButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../store/menuSlice";

const LinkButton = (props) => {
  const dispatch = useDispatch();
  const options = useSelector((store) => store.dashboard.menuOptions);

  const handleBtnClick = () => {
    dispatch(
      setMenu({
        menu: props.btnText,
        options: options[props.btnText],
      })
    );
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
