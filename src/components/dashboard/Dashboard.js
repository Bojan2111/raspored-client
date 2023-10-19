import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
import classes from "./Dashboard.module.css";
import { setMenu } from "../../store/menuSlice";
import { useDispatch } from "react-redux";
import { menuOptions } from "../../dummyOptions"; // remove after implementing axios
import { setMenuData } from "../../store/dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  async function getFeatures(token) {
    const response = await fetch("https://localhost:44383/role-features", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("features:", data, JSON.parse(data));
    // setFeatures(data);
  }

  // Initial Dashboard setup - runs only once after successful login
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
  });

  const selectedFeature = "fd";

  return (
    <div className={classes.bgnd}>
      <div className={classes.header}>
        <ProfileControl />
        <DashboardHeader />
      </div>
      <div className={classes.main}>
        <DashboardSideMenu />
        <MainView selectedFeature={selectedFeature} />
      </div>
    </div>
  );
};

export default Dashboard;
