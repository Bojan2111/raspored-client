import React, { Fragment, useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
import { featuresList } from "../../app/features";
import classes from "./Dashboard.module.css";
import menuSlice from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = (props) => {
  // const [features, setFeatures] = useState([]);
  // setFeatures(props.features);
  const [feature, setFeature] = useState("");
  const [item, setItem] = useState("");
  const [headerItems, setHeaderItems] = useState([]);
  const featureKeys = Object.keys(featuresList).filter(
    (f) => !f.startsWith("RC")
  );
  const dispatch = useDispatch();

  const dashboardData = {
    profile: {
      name: "Ime Prezime",
      role: "Zaposleni",
    },
    header: ["Licni", "Timski", "Smenski", "Svi timovi"],
    sideMenu: featureKeys,
  };

  const handleMainView = (option) => {
    setFeature(option);
  };

  const handleMenu = (mitem) => {
    setItem(mitem);
    setHeaderItems(featuresList[mitem].map((d) => d.name));

    // Use the setFeature action creator to dispatch the action
    dispatch(setFeature({ menu: mitem, features: headerItems }));
    console.log(headerItems);
  };

  useEffect(() => {
    setFeature(featureKeys.length > 0 ? featureKeys[0] : "");
  }, [featureKeys]);

  // Use useSelector correctly to access the Redux state
  const menu = useSelector((state) => state.feature.menu);
  const features = useSelector((state) => state.feature.features);

  console.log(features);

  return (
    <div className={classes.bgnd}>
      <div className={classes.header}>
        <ProfileControl
          username={props.username}
          content={dashboardData.profile}
        />
        <DashboardHeader onFeatureClick={handleMainView} content={features} />
      </div>
      <div className={classes.main}>
        <DashboardSideMenu
          content={featureKeys}
          onMenuItemClick={handleMenu}
          selectedItem={menu}
        />
        <MainView feature={feature} token={props.token} />
      </div>
    </div>
  );
};

export default Dashboard;
