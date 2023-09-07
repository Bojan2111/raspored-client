import React from "react";
import FuncButton from "../layout/FuncButton";

const DashboardHeader = (props) => {
  return (
    <div>
      {props.content.map((d) => (
        <FuncButton funcBtnText={d} />
      ))}
    </div>
  );
};

export default DashboardHeader;
