import React from "react";
// import "./ContextMenu.css";

const ContextMenu = ({ options, position, onClose }) => {
  return (
    <div className="context-menu" style={{ top: position.y, left: position.x }}>
      {options.map((option, index) => (
        <div
          key={index}
          className="context-menu-item"
          onClick={() => option.action()}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
