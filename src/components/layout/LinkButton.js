import React from "react";
import classes from "./LinkButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../store/menuSlice";
import { setSelectedOption } from "../../store/headerSlice";

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
    dispatch(setSelectedOption(options[props.btnText][0].id));
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
