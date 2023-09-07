import React from "react";
import LinkButton from "../layout/LinkButton";

const DashboardSideMenu = (props) => {
  return (
    <div>
      {props.content.map((d) => (
        <LinkButton btnText={d} />
      ))}
    </div>
  );
};

export default DashboardSideMenu;
