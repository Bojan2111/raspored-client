import React from "react";

const MainView = (props) => {
  return (
    <div>
      <h1>{props.content.title}</h1>
      <h3>{props.content.subtitle}</h3>
      <p>{props.content.info}</p>
    </div>
  );
};

export default MainView;
