import React, { Fragment, useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
import { featuresList } from "../../app/features";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  // const [features, setFeatures] = useState([]);
  // setFeatures(props.features);
  const [feature, setFeature] = useState("");
  const [item, setItem] = useState("");
  const featureKeys = Object.keys(featuresList).filter(
    (f) => !f.startsWith("RC")
  );
  // const featureKeys = [];
  const dashboardData = {
    profile: {
      name: "Ime Prezime",
      role: "Zaposleni",
    },
    header: ["Licni", "Timski", "Smenski", "Svi timovi"],
    sideMenu: featureKeys,
    main: {
      title: "Glavni pregled",
      subtitle: "Ovde se mogu naci manje bitne informacije",
      info: "neke nebitne informacije",
    },
  };

  const handleMainView = (option) => {
    setFeature(option);
  };

  const handleMenu = (item) => {
    setItem(item);
    console.log(item);
  };

  // for (const key in featuresList) {
  //   if (!key.startsWith("RC")) {
  //     featureKeys.push(key);
  //   }
  // }

  useEffect(() => {
    setFeature(featureKeys.length > 0 ? featureKeys[0] : "");
  }, [featureKeys]);

  return (
    <div className={classes.bgnd}>
      <div className={classes.header}>
        <ProfileControl
          username={props.username}
          content={dashboardData.profile}
        />
        <DashboardHeader
          onFeatureClick={handleMainView}
          content={dashboardData.header}
        />
      </div>
      <div className={classes.main}>
        <DashboardSideMenu
          content={dashboardData.sideMenu}
          onMenuItemClick={handleMenu}
        />
        <MainView
          feature={feature}
          token={props.token}
          content={dashboardData.main}
        />
      </div>
    </div>
  );
};

export default Dashboard;
