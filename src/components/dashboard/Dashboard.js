import React, { Fragment, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  // const [features, setFeatures] = useState([]);
  // setFeatures(props.features);
  const dashboardData = {
    profile: {
      name: "Ime Prezime",
      role: "Zaposleni",
    },
    header: ["Licni", "Timski", "Smenski", "Svi timovi"],
    sideMenu: ["Raspored", "Timovi", "Zaposleni", "Profil", "Postavke"],
    main: {
      title: "Glavni pregled",
      subtitle: "Ovde se mogu naci manje bitne informacije",
      info: "neke nebitne informacije",
    },
  };
  return (
    <div className={classes.bgnd}>
      <div className={classes.header}>
        <ProfileControl
          username={props.username}
          content={dashboardData.profile}
        />
        <DashboardHeader content={dashboardData.header} />
      </div>
      <div>
        <DashboardSideMenu content={dashboardData.sideMenu} />
        <MainView token={props.token} content={dashboardData.main} />
      </div>
    </div>
  );
};

export default Dashboard;