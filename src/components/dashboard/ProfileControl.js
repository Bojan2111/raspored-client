import React from "react";
import classes from "./ProfileControl.module.css";

const ProfileControl = (props) => {
  return (
    <div className={classes.profile}>
      <h3>Hi {props.username}!</h3>
      <div>
        <div>Profil</div>
        <div>Log Out</div>
      </div>
    </div>
  );
};

export default ProfileControl;
