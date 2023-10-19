import React from "react";
import classes from "./FuncButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../../store/headerSlice";

const FuncButton = (props) => {
  const dispatch = useDispatch();
  const selectedOptionId = useSelector(
    (store) => store.header.selectedOptionId
  );

  return (
    <div
      key={`option-${props.optionId}`}
      id={props.optionId}
      className={`${classes.container} ${
        props.optionId === selectedOptionId ? classes.selected : ""
      }`}
      title={props.description}
      onClick={() => dispatch(setSelectedOption(props.optionId))}
    >
      <div>
        <p>
          <i className="fa fa-calendar-o" aria-hidden="true"></i>
        </p>
        <p>{props.optionName}</p>
      </div>
    </div>
  );
};

export default FuncButton;
