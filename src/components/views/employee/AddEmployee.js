import React, { useEffect, useRef, useState } from "react";
import classes from "./AddEmployee.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Input from "../../UI/Input";

const AddEmployee = () => {
  const [contractTypes, setContractTypes] = useState([]);
  const [positions, setPositions] = useState([]);

  /*

  // User model:
{
  "firstName": "string",
  "lastName": "string",
  "dateOfBirth": "2023-09-22T00:51:26.643Z",
  "userName": "string",
  "email": "user@example.com",
  "password": "string",
  "yearOfEmployment": 0,
  "licenseNumber": "string",
  "contractTypeId": 0,
  "positionId": 0,
  "address": "string",
  "city": "string",
  "zipCode": "string",
  "phoneNumber": "string",
  "religiousHoliday": "string",
  "role": "string",
  "registrationDate": "2023-09-22T00:51:26.643Z"
}

// Shift model:
{
  "id": 0,
  "date": "2023-09-22T00:53:56.570Z",
  "shiftTypeId": 0,
  "shiftType": {
    "id": 0,
    "name": "string",
    "description": "string"
  },
  "teamMemberId": 0,
  "teamMember": {
    "id": 0,
    "userId": "string",
    "user": {
      "id": "string",
      "userName": "string",
      "normalizedUserName": "string",
      "email": "string",
      "normalizedEmail": "string",
      "emailConfirmed": true,
      "passwordHash": "string",
      "securityStamp": "string",
      "concurrencyStamp": "string",
      "phoneNumber": "string",
      "phoneNumberConfirmed": true,
      "twoFactorEnabled": true,
      "lockoutEnd": "2023-09-22T00:53:56.570Z",
      "lockoutEnabled": true,
      "accessFailedCount": 0,
      "firstName": "string",
      "lastName": "string",
      "dateOfBirth": "2023-09-22T00:53:56.570Z",
      "yearOfEmployment": 0,
      "licenseNumber": "string",
      "contractTypeId": 0,
      "contractType": {
        "id": 0,
        "name": "string"
      },
      "positionId": 0,
      "position": {
        "id": 0,
        "name": "string"
      },
      "address": "string",
      "city": "string",
      "zipCode": "string",
      "religiousHoliday": "string",
      "rating": 0,
      "deleted": true
    },
    "teamId": 0,
    "team": {
      "id": 0,
      "name": "string"
    },
    "teamMemberRoleId": 0,
    "teamMemberRole": {
      "id": 0,
      "name": "string",
      "description": "string"
    }
  }
}

// Team Member model:
{
  "id": 0,
  "userId": "string",
  "user": {
    "id": "string",
    "userName": "string",
    "normalizedUserName": "string",
    "email": "string",
    "normalizedEmail": "string",
    "emailConfirmed": true,
    "passwordHash": "string",
    "securityStamp": "string",
    "concurrencyStamp": "string",
    "phoneNumber": "string",
    "phoneNumberConfirmed": true,
    "twoFactorEnabled": true,
    "lockoutEnd": "2023-09-22T00:54:35.850Z",
    "lockoutEnabled": true,
    "accessFailedCount": 0,
    "firstName": "string",
    "lastName": "string",
    "dateOfBirth": "2023-09-22T00:54:35.850Z",
    "yearOfEmployment": 0,
    "licenseNumber": "string",
    "contractTypeId": 0,
    "contractType": {
      "id": 0,
      "name": "string"
    },
    "positionId": 0,
    "position": {
      "id": 0,
      "name": "string"
    },
    "address": "string",
    "city": "string",
    "zipCode": "string",
    "religiousHoliday": "string",
    "rating": 0,
    "deleted": true
  },
  "teamId": 0,
  "team": {
    "id": 0,
    "name": "string"
  },
  "teamMemberRoleId": 0,
  "teamMemberRole": {
    "id": 0,
    "name": "string",
    "description": "string"
  }
}
  */

  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const dateOfBirthRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const yearOfEmploymentRef = useRef("");
  const licenseNumberRef = useRef("");
  const contractTypeRef = useRef("");
  const positionRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const zipCodeRef = useRef("");
  const religiousHolidayRef = useRef("");

  const token = useSelector((store) => store.auth.token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const getSelectOptionData = async () => {
    try {
      const contractTypesResponse = await axios("/contract-types", {
        headers,
      });
      const positionsResponse = await axios("/positions", {
        headers,
      });
      setContractTypes(contractTypesResponse.data);
      setPositions(positionsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectOptionData();
  }, []);

  const handleSubmitData = (event) => {
    event.preventDefault();

    // could add validation here...
    const url = process.env.REACT_APP_API_URL;

    const getDayMonthFromDate = (dateStr) => {
      let dateArr = dateStr.split("-");
      let month = dateArr[1];
      let day = dateArr[2];
      return `${month}-${day}`;
    };

    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
      yearOfEmployment: parseInt(yearOfEmploymentRef.current.value),
      licenseNumber: licenseNumberRef.current.value,
      contractTypeId: parseInt(contractTypeRef.current.value),
      positionId: parseInt(positionRef.current.value),
      address: addressRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      religiousHoliday: getDayMonthFromDate(religiousHolidayRef.current.value), // It is in "yyyy-mm-dd" string format. use new Date(ref.current.value) otherwise
    };

    console.log(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Dodaj zaposlenog</h2>
        <p>Unos podataka novog zaposlenog</p>
      </div>
      <form onSubmit={handleSubmitData}>
        <Input
          ref={usernameRef}
          label="Korisničko ime"
          input={{
            name: "username",
            id: "username",
            type: "text",
            placeholder: "Username",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="username">Korisničko ime</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            ref={usernameRef}
          />
        </div> */}
        <Input
          ref={firstNameRef}
          label="Ime"
          input={{
            name: "firstName",
            id: "firstName",
            type: "text",
            placeholder: "First Name",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="firstName">Ime</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
          />
        </div> */}
        <Input
          ref={lastNameRef}
          label="Prezime"
          input={{
            name: "lastName",
            id: "lastName",
            type: "text",
            placeholder: "Last Name",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="lastName">Prezime</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
          />
        </div> */}
        <Input
          ref={emailRef}
          label="Email"
          input={{
            name: "email",
            id: "email",
            type: "email",
            placeholder: "Email",
          }}
        />
        <Input
          ref={emailRef}
          label="Telefon"
          input={{
            name: "phone",
            id: "phone",
            type: "text",
            placeholder: "Phone number",
          }}
        />
        <Input
          ref={emailRef}
          label="Email"
          input={{
            name: "email",
            id: "email",
            type: "email",
            placeholder: "Email",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="email"
            ref={emailRef}
          />
        </div> */}
        <Input
          ref={passwordRef}
          label="Lozinka"
          input={{
            name: "password",
            id: "password",
            type: "password",
            placeholder: "Password",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="password">Lozinka</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div> */}
        <Input
          ref={dateOfBirthRef}
          label="Datum rođenja"
          input={{
            name: "dateOfBirth",
            id: "dateOfBirth",
            type: "date",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="dateOfBirth">Datum Rođenja</label>
          <input
            name="dateOfBirth"
            id="dateOfBirth"
            type="date"
            ref={dateOfBirthRef}
          />
        </div> */}
        <Input
          ref={yearOfEmploymentRef}
          label="Godina zaposlenja"
          input={{
            name: "yearOfEmployment",
            id: "yearOfEmployment",
            type: "number",
            min: 1975,
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="yearOfEmployment">Godina zaposlenja</label>
          <input
            name="yearOfEmployment"
            id="yearOfEmployment"
            type="number"
            ref={yearOfEmploymentRef}
          />
        </div> */}
        <Input
          ref={licenseNumberRef}
          label="Broj licence"
          input={{
            name: "licenseNumber",
            id: "licenseNumber",
            type: "text",
            placeholder: "License Number",
          }}
        />
        {/* <div className={classes["input-field"]}>
          <label htmlFor="licenseNumber">Broj licence</label>
          <input
            name="licenseNumber"
            id="licenseNumber"
            type="text"
            placeholder="License Number"
            ref={licenseNumberRef}
          />
        </div> */}
        <div className={classes["input-field"]}>
          <label htmlFor="contractType">Tip ugovora</label>
          <select ref={contractTypeRef}>
            {contractTypes.map((ct) => (
              <option key={"ct" + "-" + ct.id} value={ct.id}>
                {ct.name}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="position">Radno mesto</label>
          <select ref={positionRef}>
            {positions.map((p) => (
              <option key={`p-${p.id}`} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <Input
          ref={firstNameRef}
          label="Ime"
          input={{
            name: "firstName",
            id: "firstName",
            type: "text",
            placeholder: "First Name",
          }}
        />
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
        <Input
          ref={firstNameRef}
          label="Ime"
          input={{
            name: "firstName",
            id: "firstName",
            type: "text",
            placeholder: "First Name",
          }}
        />
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
        <Input
          ref={firstNameRef}
          label="Ime"
          input={{
            name: "firstName",
            id: "firstName",
            type: "text",
            placeholder: "First Name",
          }}
        />
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
        <Input
          ref={firstNameRef}
          label="Ime"
          input={{
            name: "firstName",
            id: "firstName",
            type: "text",
            placeholder: "First Name",
          }}
        />
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
          <button>Dodaj korisnika</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
