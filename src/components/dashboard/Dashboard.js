import React, { Fragment } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import ProfileControl from "./ProfileControl";
import MainView from "./MainView";

const Dashboard = () => {
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
    <Fragment>
      <ProfileControl content={dashboardData.profile} />
      <DashboardHeader content={dashboardData.header} />
      <DashboardSideMenu content={dashboardData.sideMenu} />
      <MainView content={dashboardData.main} />
    </Fragment>
  );
};

export default Dashboard;
