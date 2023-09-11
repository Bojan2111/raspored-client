import React from "react";
import classes from "./ProfileControl.module.css";

const ProfileControl = (props) => {
  return (
    <div className={classes.profile}>
      <h1>Hi {props.username}!</h1>
      <div>
        <p>control</p>
      </div>
    </div>
  );
};

export default ProfileControl;
