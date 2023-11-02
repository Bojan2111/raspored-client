import React from "react";

import classes from "./AdminSettings.module.css";

const AdminSettings = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Administrativna podesavanja</h1>
      </div>
      <div className={classes.body}>
        <div className={classes["feature-wrapper"]}>
          <div className={classes.feature}>Funkcija 1</div>
          <div className={classes.setting}>Akcija 1</div>
        </div>
        <div className={classes["feature-wrapper"]}>
          <div className={classes.feature}>Funkcija 2</div>
          <div className={classes.setting}>Akcija 2</div>
        </div>
        <div className={classes["feature-wrapper"]}>
          <div className={classes.feature}>Funkcija 3</div>
          <div className={classes.setting}>Akcija 3</div>
        </div>
        <div className={classes["feature-wrapper"]}>
          <div className={classes.feature}>Funkcija 4</div>
          <div className={classes.setting}>Akcija 4</div>
        </div>
        <div className={classes["feature-wrapper"]}>
          <div className={classes.feature}>Funkcija 5</div>
          <div className={classes.setting}>Akcija 5</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
