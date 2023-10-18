import React, { Fragment, useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
// import { featuresList } from "../../app/features";
import classes from "./Dashboard.module.css";
import { setMenu } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = (props) => {
  // const [features, setFeatures] = useState([]);
  // setFeatures(props.features);
  // const [feature, setFeature] = useState("");
  // const [item, setItem] = useState("");
  // const [headerItems, setHeaderItems] = useState([]);
  // const featureKeys = Object.keys(featuresList).filter(
  //   (f) => !f.startsWith("RC")
  // );
  // const dispatch = useDispatch();

  const dashboardData = {
    profile: {
      name: "Ime Prezime",
      role: "Zaposleni",
    },
    menu: "Raspored",
  };
  console.log("fdsfs");

  // const handleMainView = (option) => {
  //   setFeature(option);
  // };

  // const handleMenu = (mitem) => {
  //   setItem(mitem);
  //   setHeaderItems(featuresList[mitem].map((d) => d.name));

  //   // Use the setFeature action creator to dispatch the action
  //   // dispatch(setFeature({ menu: mitem, features: headerItems }));
  //   console.log(headerItems);
  // };

  // useEffect(() => {
  //   setFeature(featureKeys.length > 0 ? featureKeys[0] : "");
  // }, [featureKeys]);

  // // Use useSelector correctly to access the Redux state
  // const menu = useSelector((state) => state.feature.menu);
  // const features = useSelector((state) => state.feature.features);
  // const options = useSelector((store) => store.header.optionsList);
  const selectedFeature = "fd";

  // console.log(features);
  // DashboardHeader: onFeatureClick={handleMainView}
  // DashboardSideMenu: onMenuItemClick={handleMenu} selectedItem={dashboardData.menu}

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
        <DashboardSideMenu content={["fasdf", "fasdfaef"]} />
        <MainView selectedFeature={selectedFeature} token={props.token} />
      </div>
    </div>
  );
};

export default Dashboard;
