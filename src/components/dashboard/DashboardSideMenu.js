import React from "react";
import LinkButton from "../layout/LinkButton";
import { useSelector } from "react-redux";

const DashboardSideMenu = (props) => {
  const menues = useSelector((store) => store.dashboard.menues);
  const handleClick = (item) => {
    props.onMenuItemClick(item);
  };
  return (
    <div>
      {menues.map((d) => (
        <LinkButton
          onClick={handleClick}
          key={d}
          btnText={d}
          isSelected={props.selectedItem === d}
        />
      ))}
    </div>
  );
};

export default DashboardSideMenu;
