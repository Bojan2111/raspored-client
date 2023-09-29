import React, { useState, useRef } from "react";
import classes from "./TeamSchedule.module.css";
import ContextMenu from "../../layout/ContextMenu";
import { fakeData } from "./fakeData";

const TeamSchedule = (props) => {
  const [title, setTitle] = useState("");
  const [team, setTeam] = useState("");
  const [month, setMonth] = useState("");
  const [shifts, setShifts] = useState([]);

  // const [contextMenuVisible, setContextMenuVisible] = useState(false);
  // const [contextMenuPosition, setContextMenuPosition] = useState({
  //   x: 0,
  //   y: 0,
  //   cellIndex: 0,
  // });

  // const showContextMenu = (e, index) => {
  //   e.preventDefault(); // Prevent the default context menu from appearing
  //   setContextMenuPosition({ x: e.clientX, y: e.clientY, cellIndex: index });
  //   setContextMenuVisible(true);
  // };

  // const hideContextMenu = () => {
  //   setContextMenuVisible(false);
  // };

  // const handleAddShift = () => {
  //   console.log("adding shift");
  // };

  // const handleEditShift = () => {
  //   console.log("editing shift");
  // };

  // const handleDeleteShift = () => {
  //   console.log("deleting shift");
  // };

  // const handleShiftChangeRequest = () => {
  //   console.log("changing shift");
  // };

  // const contextMenuOptions = [
  //   { label: "Shift Change Request", action: handleShiftChangeRequest },
  //   { label: "Add Shift", action: handleAddShift },
  //   { label: "Edit Shift", action: handleEditShift },
  //   { label: "Delete Shift", action: handleDeleteShift },
  // ];
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [selectedCellIndex, setSelectedCellIndex] = useState(null);

  const contextMenuRef = useRef(null);

  const showContextMenu = (e, cellIndex) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setContextMenuVisible(true);
    setSelectedCellIndex(cellIndex);
  };

  const hideContextMenu = () => {
    setContextMenuVisible(false);
    setSelectedCellIndex(null);
  };

  const handleTransferToTeam = () => {
    console.log("Transfer to another team");
    hideContextMenu();
  };

  const handleEditEmployee = () => {
    console.log("Edit employee");
    hideContextMenu();
  };

  const handleAddShift = () => {
    console.log("Adding shift");
    // Display a popup or modal for adding a shift
    hideContextMenu();
  };

  const handleContextMenuOptionClick = (action) => {
    if (action === handleTransferToTeam) {
      // Perform transfer to another team action
    } else if (action === handleEditEmployee) {
      // Perform edit employee action
    } else if (action === handleAddShift) {
      // Display a popup or modal for adding a shift
    }
  };

  const contextMenuOptions = [
    { label: "Transfer to Another Team", action: handleTransferToTeam },
    { label: "Edit Employee", action: handleEditEmployee },
  ];

  const dateArray = [];

  function setMonthLength() {
    let today = new Date();
    let lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();

    return lastDayOfMonth;
  }

  for (let i = 1; i <= setMonthLength(); i++) {
    dateArray.push(i);
  }

  const resultArr = dateArray.map((numA) => {
    const matchingObj = fakeData[0].shifts.find(
      (objB) => parseInt(objB.shiftDate.split("T")[0].split("-")[2]) === numA
    );
    return matchingObj !== undefined
      ? {
          name: matchingObj.shiftTypeName,
          description: matchingObj.shiftTypeDescription,
        }
      : { name: "", description: "" };
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div>
      <div className={classes.header}>
        {/* <h2>{fakeData.teamName}</h2>
        <h3>{`${fakeData.lastName} ${fakeData.firstName} - ${fakeData.teamMemberRoleDescription}`}</h3>
        <p>{`Raspored rada za mesec ${fakeData.monthName}`}</p> */}
      </div>

      <table className={`table table-bordered ${classes.schedule}`}>
        <thead>
          <tr>
            <td>IME I PREZIME</td>
            <td></td>
            {dateArray.map((date) => (
              <td className={classes["cell-data"]} key={date}>
                {date}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {fakeData.map((item) => (
            <tr key={`tm-${item.teamMemberId}`}>
              <td className={classes["cell-data"]}>
                {`${item.lastName} ${item.firstName}`}
              </td>
              {item.teamMemberRoleName !== "" ? (
                <td
                  className={classes["cell-data"]}
                  title={item.teamMemberRoleDescription}
                >
                  {item.teamMemberRoleName}
                </td>
              ) : (
                <td className={classes["cell-data"]}></td>
              )}
              {resultArr.map((shift, index) => (
                <td
                  key={`td_${shift.name}`}
                  className={classes["cell-data"]}
                  title={shift.description}
                  onContextMenu={(e) => showContextMenu(e, index)}
                >
                  <div key={`tdd_${shift.name}`}>{shift.name}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {contextMenuVisible && (
        <ContextMenu
          options={
            selectedCellIndex !== null && selectedCellIndex >= 2 // Check if the right-clicked cell is a shift cell
              ? contextMenuOptions.concat({
                  label: "Add Shift",
                  action: handleAddShift,
                })
              : contextMenuOptions
          }
          position={contextMenuPosition}
          onClose={hideContextMenu}
          ref={contextMenuRef}
          onItemClick={handleContextMenuOptionClick}
        />
      )}
    </div>
  );
};

export default TeamSchedule;
