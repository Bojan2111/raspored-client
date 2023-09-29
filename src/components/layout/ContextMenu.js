import React from "react";
import classes from "./ContextMenu.module.css";

const ContextMenu = (props) => {
  const { options, position, onClose, onItemClick } = props;

  // Render the context menu items
  const menuItems = options.map((option, index) => (
    <div
      key={index}
      className={`${classes["menu-item"]} ${
        option.disabled ? classes["disabled"] : ""
      }`}
      onClick={() => {
        if (!option.disabled) {
          onItemClick(option.action);
        }
      }}
    >
      {option.label}
    </div>
  ));

  // Render the context menu container
  return (
    <div
      className={classes["context-menu"]}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {menuItems}
    </div>
  );
};

export default ContextMenu;
