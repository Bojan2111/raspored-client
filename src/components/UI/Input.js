import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export const Select = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.select.id}>{props.label}</label>
      <select value={select.value} id={select.id} ref={ref}>
        {props.options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
});

export default Input;
