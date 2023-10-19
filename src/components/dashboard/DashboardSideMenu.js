import React from "react";
import LinkButton from "../layout/LinkButton";
import { useSelector } from "react-redux";

const DashboardSideMenu = () => {
  const menues = useSelector((store) => store.dashboard.menues).filter(
    (m) => !m.startsWith("RC")
  );

  const selectedMenu = useSelector((store) => store.menu.menu);

  return (
    <div>
      {menues.map((d) => (
        <LinkButton key={d} btnText={d} isSelected={selectedMenu === d} />
      ))}
    </div>
  );
};

export default DashboardSideMenu;
