import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
import classes from "./Dashboard.module.css";
import { setMenu } from "../../store/menuSlice";
import { useDispatch } from "react-redux";
import { menuOptions } from "../../dummyOptions";
import { setMenuData } from "../../store/dashboardSlice";

const Dashboard = (props) => {
  const dispatch = useDispatch();

  const dashboardData = {
    profile: {
      name: "Ime Prezime",
      role: "Zaposleni",
    },
    menu: "Raspored",
  };

  // Initial App setup - runs only once
  useEffect(() => {
    const menuesList = [];

    for (let key of Object.keys(menuOptions)) {
      menuesList.push(key);
    }
    dispatch(
      setMenuData({
        menues: menuesList,
        menuOptions,
      })
    );
    dispatch(
      setMenu({
        menu: menuesList[0],
        options: menuOptions[menuesList[0]],
      })
    );
  }, []);

  const selectedFeature = "fd";

  return (
    <div className={classes.bgnd}>
      <div className={classes.header}>
        <ProfileControl
          username={props.username}
          content={dashboardData.profile}
        />
        <DashboardHeader />
      </div>
      <div className={classes.main}>
        <DashboardSideMenu />
        <MainView selectedFeature={selectedFeature} token={props.token} />
      </div>
    </div>
  );
};

export default Dashboard;
