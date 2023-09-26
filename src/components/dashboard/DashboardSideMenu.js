import React from "react";
import LinkButton from "../layout/LinkButton";

const DashboardSideMenu = (props) => {
  const handleClick = (item) => {
    props.onMenuItemClick(item);
  };
  return (
    <div>
      {props.content.map((d) => (
        <LinkButton onClick={handleClick} key={d} btnText={d} />
      ))}
    </div>
  );
};

export default DashboardSideMenu;
