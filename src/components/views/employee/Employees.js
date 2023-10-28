import React, { useEffect, useState } from "react";
import classes from "./Employees.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Employees = (props) => {
  const authToken = useSelector((store) => store.auth.token);
  const [teamMembers, setTeamMembers] = useState(null);
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

  const fetchData = async () => {
    try {
      const response = await axios("/team-members", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response.data);
      setTeamMembers(response.data);
      console.log("teamMembers: ", teamMembers);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <div className={classes["table-header-cell"]}>Ime zaposlenog</div>
        <div className={classes["table-header-cell"]}>Pozicija</div>
        <div className={classes["table-header-cell"]}>Uloga</div>
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
        {teamMembers &&
          teamMembers.map((item) => (
            <div key={item.id} className={classes["table-body-row"]}>
              <div key={`name-${item.id}`} className={classes["table-cell"]}>
                {item.name}
              </div>
              <div
                key={`position-${item.id}`}
                className={classes["table-cell"]}
              >
                {item.position}
              </div>
              <div key={`role-${item.id}`} className={classes["table-cell"]}>
                {item.role !== "MST" ? item.role : ""}
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
