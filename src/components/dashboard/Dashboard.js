import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
import classes from "./Dashboard.module.css";
import { setMenu } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
// import { menuOptions } from "../../dummyOptions"; // remove after implementing axios
import { getMenuOptions, setMenuData } from "../../store/dashboardSlice";
import axios from "axios";
import authFetch from "../../axios/custom";
import authSlice from "../../store/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((store) => store.auth.token);
  const isLoading = useSelector((store) => store.dashboard.isLoading);
  const url = "https://localhost:44383/role-features";

  const fetchOptions = async () => {
    try {
      const response = await axios("/role-features", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      const menuOptions = response.data;
      const menuesList = [...Object.keys(menuOptions)];
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
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

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
  // return isLoading ? <div>Loading</div> : content;
};

export default Dashboard;
