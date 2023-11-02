import React, { useState } from "react";

import classes from "./AppSettings.module.css";

const AppSettings = () => {
  const [flip, setFlip] = useState(false);
  const handleFlipClick = (ev) => {
    ev.preventDefault();
    setFlip((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Podesavanja aplikacije</h1>
      </div>
      <div className={classes.body}>
        <div className={classes.section}>
          <div className={classes["section-title"]}>
            <h2>Izgled</h2>
          </div>
          <div className={classes["section-content"]}>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Dark Mode</div>
              <div className={classes.setting}>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider"></span>
                </label>
                <br />
                <br />

                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Velicina fonta</div>
              <div className={classes.setting}>Dropdown</div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Boja fonta</div>
              <div className={classes.setting}>Dropdown</div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>
                Vrati na pocetna podesavanja
              </div>
              <div className={classes.setting}>call-to-action</div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Prijavi problem</div>
              <div className={classes.setting}>Call-to-action</div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes["section-title"]}>
            <h2>Funkcionalnosti</h2>
          </div>
          <div className={classes["section-content"]}>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Dozvoli obavestenja</div>
              <div className={classes.setting}>flip-switch</div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>
                Cuvaj podatke u lokalnom skladistu
              </div>
              <div>
                <div className={classes.setting} onClick={handleFlipClick}>
                  flip-switch
                </div>
                <div
                  className={`${classes["secondary-setting"]} ${
                    flip ? "" : classes.disabled
                  }`}
                >
                  <div>Pregledaj skladiste</div>
                </div>
              </div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Neko podesavanje 1</div>
              <div className={classes.setting}>Neka akcija 1</div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Neko podesavanje 2</div>
              <div className={classes.setting}>Neka akcija 2</div>
            </div>
            <div className={classes["feature-wrapper"]}>
              <div className={classes.feature}>Neko podesavanje 3</div>
              <div className={classes.setting}>Neka akcija 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
