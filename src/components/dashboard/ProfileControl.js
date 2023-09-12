import React from "react";
import classes from "./ProfileControl.module.css";

const ProfileControl = (props) => {
  return (
    <div className={classes.profile}>
      <h3>Hi {props.username}!</h3>
      <div>
        <p>control</p>
      </div>
    </div>
  );
};

export default ProfileControl;
