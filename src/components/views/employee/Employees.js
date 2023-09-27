import React from "react";
import classes from "./Employees.module.css";

const Employees = (props) => {
  const fakeData = [
    {
      id: 1,
      lastName: "Peric",
      firstName: "Pera",
      position: "Medicinski tehnicar",
      yearOfEmployment: 1997,
      teamName: "Tim 1",
    },
    {
      id: 2,
      lastName: "Lazic",
      firstName: "Laza",
      position: "Medicinski tehnicar",
      yearOfEmployment: 1998,
      teamName: "Tim 2",
    },
    {
      id: 3,
      lastName: "Ancic",
      firstName: "Ana",
      position: "Medicinska sestra",
      yearOfEmployment: 2002,
      teamName: "Tim 1",
    },
    {
      id: 4,
      lastName: "Maric",
      firstName: "Mara",
      position: "Medicinska sestra",
      yearOfEmployment: 2012,
      teamName: "Tim 3",
    },
    {
      id: 5,
      lastName: "Jelic",
      firstName: "Jelena",
      position: "Medicinska sestra",
      yearOfEmployment: 2020,
      teamName: "Tim 2",
    },
  ];

  const dataTitleMessage =
    "Brisanjem se podaci o zaposlenom prebacuju iz aktuelne baze podataka u arhivu, gde stoje minimum 10 godina.";

  const handleEdit = (event) => {
    event.preventDefault();
    let editId = event.target.id.split("_")[1];

    console.log(`Editing employee with Id ${editId}...`);
  };

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   let deleteId = event.target.id.split("_")[1];

  //   console.log(`The employee with Id ${deleteId} is deleted`);
  // };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Spisak zaposlenih</h2>
      </div>
      <div className={classes["table-header"]}>
        <div className={classes["table-header-cell"]}>Prezime</div>
        <div className={classes["table-header-cell"]}>Ime</div>
        <div className={classes["table-header-cell"]}>Radno mesto</div>
        <div className={classes["table-header-cell"]}>Godina zaposlenja</div>
        <div className={classes["table-header-cell"]}>Smena</div>
        <div></div>
        {/* <div className={classes.delete}>
          <div className={classes.help} data-title={dataTitleMessage}>
            ?
          </div>
        </div> */}
      </div>
      <div className={classes["table-body"]}>
        {fakeData.map((item) => (
          <div key={item.id} className={classes["table-body-row"]}>
            <div key={`lastName-${item.id}`} className={classes["table-cell"]}>
              {item.lastName}
            </div>
            <div key={`firstName-${item.id}`} className={classes["table-cell"]}>
              {item.firstName}
            </div>
            <div key={`position-${item.id}`} className={classes["table-cell"]}>
              {item.position}
            </div>
            <div
              key={`employment-${item.id}`}
              className={classes["table-cell"]}
            >
              {item.yearOfEmployment}
            </div>
            <div key={`team-${item.id}`} className={classes["table-cell"]}>
              {item.teamName}
            </div>
            <div
              className={`${classes["table-cell"]} ${classes["edit-button"]}`}
              onClick={handleEdit}
              id={`edit_${item.id}`}
              key={`edit_${item.id}`}
            >
              Izmeni
            </div>
            {/* <div
              className={`${classes["table-cell"]} ${classes["delete-button"]}`}
              onClick={handleDelete}
              id={`delete_${item.id}`}
              key={`delete_${item.id}`}
            >
              Obriši
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
