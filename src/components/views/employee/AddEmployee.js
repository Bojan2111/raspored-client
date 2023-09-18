import React, { useRef } from "react";
import classes from "./AddEmployee.module.css";

const AddEmployee = () => {
  // const [contractTypes, setContractTypes] = useState([]);
  // const [positions, setPositions] = useState([]);

  // TODO: fetch for getting positons and contract types.

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

  const handleSubmitData = (event) => {
    event.preventDefault();

    // could add validation here...

    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
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
      religiousHoliday: religiousHolidayRef.current.value,
    };

    console.log(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Add New</h2>
        <p>Some description</p>
      </div>
      <form onSubmit={handleSubmitData}>
        <div className={classes["input-field"]}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            ref={usernameRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="lastName">Last Name</label>
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
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input
            name="dateOfBirth"
            id="dateOfBirth"
            type="date"
            ref={dateOfBirthRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="yearOfEmployment">YearOfEmployment</label>
          <input
            name="yearOfEmployment"
            id="yearOfEmployment"
            type="number"
            ref={yearOfEmploymentRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="licenseNumber">License Number</label>
          <input
            name="licenseNumber"
            id="licenseNumber"
            type="text"
            placeholder="License Number"
            ref={licenseNumberRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="contractType">Contract Type</label>
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
          <label htmlFor="position">Position</label>
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
          <label htmlFor="address">Address</label>
          <input
            name="address"
            id="address"
            type="text"
            placeholder="address"
            ref={addressRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="city">City</label>
          <input
            name="city"
            id="city"
            type="text"
            placeholder="city"
            ref={cityRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            name="zipCode"
            id="zipCode"
            type="text"
            placeholder="zipCode"
            ref={zipCodeRef}
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="religiousHoliday">Religious Holiday</label>
          <input
            name="religiousHoliday"
            id="religiousHoliday"
            type="date"
            ref={religiousHolidayRef}
          />
        </div>
        <div className={classes.submit}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
