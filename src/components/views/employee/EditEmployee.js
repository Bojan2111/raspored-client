import React, { useState } from "react";
import classes from "./EditEmployee.module.css";

const EditEmployee = (props) => {
  const [employee, setEmployee] = useState({
    id: 0,
    lastName: "",
    firstName: "",
    yearOfEmployment: 0,
    positionId: 0,
    contractTypeId: 0,
  });

  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const dateOfBirthRef = useRef("");
  const emailRef = useRef("");
  const yearOfEmploymentRef = useRef("");
  const licenseNumberRef = useRef("");
  const contractTypeRef = useRef("");
  const positionRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const zipCodeRef = useRef("");
  const religiousHolidayRef = useRef("");

  const contractTypes = ["Određeno", "Neodređeno"];
  const positions = [
    "Organizaciona sestra",
    "Edukator",
    "Medicinska sestra / tehničar",
  ];

  const handleEmployeeData = () => {
    setEmployee((prevState) => ({
      ...prevState,
      id: idRef,
      lastName: lastNameRef,
      firstName: firstNameRef,
      yearOfEmployment: yearOfEmploymentRef,
      positionId: positionRef,
      contractTypeId: contractTypeRef,
      password: passwordRef,
      email: emailRef.current.value,
      phone: phoneRef,
      address: addressRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
    }));
  };

  return (
    <div>
      <div className={classes.header}>
        <h3>
          Zaposleni: {props.employee.lastName} {props.employee.firstName}
        </h3>
        <p className={classes.note}>
          NAPOMENA: Za izmenu podataka u blokiranim poljima kontaktirajte
          tehnicku podrsku
        </p>
      </div>
      <div className={classes["form-container"]}>
        <form onSubmit={handleEmployeeData}>
          <div className={classes["input-field"]}>
            <label htmlFor="username">Korisničko ime</label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="Username"
              ref={usernameRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="firstName">Ime</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              placeholder="First Name"
              ref={firstNameRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="lastName">Prezime</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Last Name"
              ref={lastNameRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="email"
              ref={emailRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="password">Lozinka</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="dateOfBirth">Datum rođenja</label>
            <input
              name="dateOfBirth"
              id="dateOfBirth"
              type="date"
              ref={dateOfBirthRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="yearOfEmployment">Godina zaposlenja</label>
            <input
              name="yearOfEmployment"
              id="yearOfEmployment"
              type="number"
              ref={yearOfEmploymentRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="licenseNumber">Broj licence</label>
            <input
              name="licenseNumber"
              id="licenseNumber"
              type="text"
              placeholder="License Number"
              ref={licenseNumberRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="contractType">Tip ugovora</label>
            <select ref={contractTypeRef}>
              {contractTypes.map((ct) => (
                <option
                  key={ct.substring(0, 3)}
                  value={`${contractTypes.indexOf(ct) + 1}`}
                >
                  {ct}
                </option>
              ))}
            </select>
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="position">Radno mesto</label>
            <select ref={positionRef}>
              {positions.map((p) => (
                <option
                  key={p.substring(0, 3)}
                  value={`${positions.indexOf(p) + 1}`}
                >
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="address">Adresa</label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder="address"
              ref={addressRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="city">Mesto</label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="city"
              ref={cityRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="zipCode">Poštanski broj</label>
            <input
              name="zipCode"
              id="zipCode"
              type="text"
              placeholder="zipCode"
              ref={zipCodeRef}
            />
          </div>
          <div className={classes["input-field"]}>
            <label htmlFor="religiousHoliday">Verski praznik</label>
            <input
              name="religiousHoliday"
              id="religiousHoliday"
              type="date"
              ref={religiousHolidayRef}
            />
          </div>
          <div className={classes.submit}>
            <button>Sačuvaj izmene</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
