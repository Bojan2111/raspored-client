import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProfileControl.module.css";
import { logOut } from "../../store/authSlice";

const ProfileControl = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.profile}>
      <h3>Hi {useSelector((store) => store.auth.user)}!</h3>
      <div>
        <div>Profil</div>
        <div onClick={() => dispatch(logOut())}>Log Out</div>
      </div>
    </div>
  );
};

export default ProfileControl;
