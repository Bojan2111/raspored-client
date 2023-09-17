import React from "react";
import classes from "./AddEmployee.module.css";

/*
        public int YearOfEmployment { get; set; }
        public string LicenseNumber { get; set; }
        public int? ContractTypeId { get; set; }
        public int? PositionId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public DateTime ReligiousHoliday { get; set; }
*/
const AddEmployee = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Add New</h2>
        <p>Some description</p>
      </div>
      <form>
        <div className={classes["input-field"]}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="email" placeholder="email" />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input name="dateOfBirth" id="dateOfBirth" type="date" />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="yearOfEmployment">YearOfEmployment</label>
          <input name="yearOfEmployment" id="yearOfEmployment" type="number" />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="licenseNumber">License Number</label>
          <input
            name="licenseNumber"
            id="licenseNumber"
            type="text"
            placeholder="License Number"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="contractType">Contract Type</label>
          <select>
            <option></option>
          </select>
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="position">Position</label>
          <select>
            <option></option>
          </select>
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            id="address"
            type="text"
            placeholder="address"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="city">City</label>
          <input name="city" id="city" type="text" placeholder="city" />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            name="zipCode"
            id="zipCode"
            type="text"
            placeholder="zipCode"
          />
        </div>
        <div className={classes["input-field"]}>
          <label htmlFor="religiousHoliday">Date Of Birth</label>
          <input name="religiousHoliday" id="religiousHoliday" type="date" />
        </div>
      </form>
    </div>
  );
};
