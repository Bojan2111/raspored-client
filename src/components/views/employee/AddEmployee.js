import React, { useRef } from "react";
import classes from "./AddEmployee.module.css";

const AddEmployee = () => {
  // const [contractTypes, setContractTypes] = useState([]);
  // const [positions, setPositions] = useState([]);

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

// Features:
builder.Entity<FeatureType>().HasData(
                new FeatureType()
                {
                    Id = 1,
                    Name = "Raspored"
                },
                new FeatureType()
                {
                    Id = 2,
                    Name = "Timovi"
                },
                new FeatureType()
                {
                    Id = 3,
                    Name = "Zaposleni"
                },
                new FeatureType()
                {
                    Id = 4,
                    Name = "Podešavanja"
                },
                new FeatureType()
                {
                    Id = 5,
                    Name = "Profil"
                },
                new FeatureType()
                {
                    Id = 6,
                    Name = "RCZaglavlje"
                },
                new FeatureType()
                {
                    Id = 7,
                    Name = "RCImeClana"
                },
                new FeatureType()
                {
                    Id = 8,
                    Name = "RCSmena"
                },
                new FeatureType()
                {
                    Id = 9,
                    Name = "RCDatumSmene"
                }
            );

            builder.Entity<Feature>().HasData(
                new Feature() { Id = 1, Name = "Lični", Description = "Lični raspored za tekući mesec" },
                new Feature() { Id = 2, Name = "Timski", Description = "Timski raspored za tekući mesec" },
                new Feature() { Id = 3, Name = "Odeljenski", Description = "Pregled svih timskih rasporeda za tekući mesec" },
                new Feature() { Id = 4, Name = "Smenski", Description = "Brzi pregled svih tehničara u timu po datumu i smeni" },
                new Feature() { Id = 5, Name = "Kreiraj", Description = "Kreiranje rasporeda za naredni mesec za sve timove" },
                new Feature() { Id = 6, Name = "Lista", Description = "Lista postojećih timova" },
                new Feature() { Id = 7, Name = "Dodaj", Description = "Dodavanje novog tima" },
                new Feature() { Id = 8, Name = "Izmeni", Description = "Izmena postojećeg tima" },
                new Feature() { Id = 9, Name = "Obriši", Description = "Brisanje postojećeg tima" },
                new Feature() { Id = 10, Name = "Lista", Description = "Spisak svih zaposlenih" },
                new Feature() { Id = 11, Name = "Dodaj", Description = "Dodaj novog zaposlenog" },
                new Feature() { Id = 12, Name = "Izmeni", Description = "Izmena podataka zaposlenih" },
                new Feature() { Id = 13, Name = "Obriši", Description = "Obriši zaposlenog - podaci se arhiviraju!" },
                new Feature() { Id = 14, Name = "Pretraga", Description = "Pretraga zaposlenih po različitim kriterijumima" },
                new Feature() { Id = 15, Name = "Aplikacija", Description = "Podešavanja izgleda i funkcionalnosti aplikacije" },
                new Feature() { Id = 16, Name = "Administracija", Description = "Administrativna podešavanja aplikacije i podataka" },
                new Feature() { Id = 17, Name = "Timovi", Description = "Podešavanja organizacije timova" },
                new Feature() { Id = 18, Name = "Prikaz", Description = "Prikaz osnovnih podataka korisnika" },
                new Feature() { Id = 19, Name = "Izmena", Description = "Izmena osnovnih podataka korisnika" },
                new Feature() { Id = 20, Name = "Izmeni", Description = "Izmeni podatke u zaglavlju izabranog rasporeda" },
                new Feature() { Id = 21, Name = "Dodaj/promeni ulogu", Description = "Dodavanje / promena uloge u sklopu tima" },
                new Feature() { Id = 22, Name = "Prebaci u drugi tim", Description = "Prebacivanje zaposlenog u drugi tim" },
                new Feature() { Id = 23, Name = "Dodaj smenu", Description = "Dodavanje smene zaposlenom" },
                new Feature() { Id = 24, Name = "Promeni smenu", Description = "Promena tipa smene" },
                new Feature() { Id = 25, Name = "Obriši smenu", Description = "Brisanje smene sa rasporeda" },
                new Feature() { Id = 26, Name = "Dodeli smenu", Description = "Dodela smene za ceo tim" },
                new Feature() { Id = 27, Name = "Izmeni smenu", Description = "Izmena smene za ceo tim" },
                new Feature() { Id = 28, Name = "Obriši smenu", Description = "Brisanje smene za ceo tim" }
            );
            
            builder.Entity<RoleFeatureMapping>().HasData(
                new RoleFeatureMapping() { Id = 1, RoleId = zaposleni, FeatureTypeId = 1, FeatureId = 1 },
                new RoleFeatureMapping() { Id = 2, RoleId = zaposleni, FeatureTypeId = 1, FeatureId = 2 },
                new RoleFeatureMapping() { Id = 3, RoleId = zaposleni, FeatureTypeId = 1, FeatureId = 3 },
                new RoleFeatureMapping() { Id = 4, RoleId = zaposleni, FeatureTypeId = 1, FeatureId = 4 },
                new RoleFeatureMapping() { Id = 5, RoleId = admin, FeatureTypeId = 1, FeatureId = 1 },
                new RoleFeatureMapping() { Id = 6, RoleId = admin, FeatureTypeId = 1, FeatureId = 2 },
                new RoleFeatureMapping() { Id = 7, RoleId = admin, FeatureTypeId = 1, FeatureId = 3 },
                new RoleFeatureMapping() { Id = 8, RoleId = admin, FeatureTypeId = 1, FeatureId = 4 },
                new RoleFeatureMapping() { Id = 9, RoleId = admin, FeatureTypeId = 1, FeatureId = 5 },
                new RoleFeatureMapping() { Id = 10, RoleId = admin, FeatureTypeId = 2, FeatureId = 6 },
                new RoleFeatureMapping() { Id = 11, RoleId = admin, FeatureTypeId = 2, FeatureId = 7 },
                new RoleFeatureMapping() { Id = 12, RoleId = admin, FeatureTypeId = 2, FeatureId = 8 },
                new RoleFeatureMapping() { Id = 13, RoleId = admin, FeatureTypeId = 2, FeatureId = 9 },
                new RoleFeatureMapping() { Id = 14, RoleId = admin, FeatureTypeId = 3, FeatureId = 10 },
                new RoleFeatureMapping() { Id = 15, RoleId = admin, FeatureTypeId = 3, FeatureId = 11 },
                new RoleFeatureMapping() { Id = 16, RoleId = admin, FeatureTypeId = 3, FeatureId = 12 },
                new RoleFeatureMapping() { Id = 17, RoleId = admin, FeatureTypeId = 3, FeatureId = 13 },
                new RoleFeatureMapping() { Id = 18, RoleId = admin, FeatureTypeId = 3, FeatureId = 14 },
                new RoleFeatureMapping() { Id = 19, RoleId = zaposleni, FeatureTypeId = 4, FeatureId = 15 },
                new RoleFeatureMapping() { Id = 20, RoleId = admin, FeatureTypeId = 4, FeatureId = 15 },
                new RoleFeatureMapping() { Id = 21, RoleId = admin, FeatureTypeId = 4, FeatureId = 16 },
                new RoleFeatureMapping() { Id = 22, RoleId = admin, FeatureTypeId = 4, FeatureId = 17 },
                new RoleFeatureMapping() { Id = 23, RoleId = zaposleni, FeatureTypeId = 5, FeatureId = 18 },
                new RoleFeatureMapping() { Id = 24, RoleId = zaposleni, FeatureTypeId = 5, FeatureId = 19 },
                new RoleFeatureMapping() { Id = 25, RoleId = admin, FeatureTypeId = 5, FeatureId = 18 },
                new RoleFeatureMapping() { Id = 26, RoleId = admin, FeatureTypeId = 5, FeatureId = 19 },
                new RoleFeatureMapping() { Id = 27, RoleId = admin, FeatureTypeId = 6, FeatureId = 20 },
                new RoleFeatureMapping() { Id = 28, RoleId = admin, FeatureTypeId = 7, FeatureId = 21 },
                new RoleFeatureMapping() { Id = 29, RoleId = admin, FeatureTypeId = 7, FeatureId = 22 },
                new RoleFeatureMapping() { Id = 30, RoleId = admin, FeatureTypeId = 8, FeatureId = 23 },
                new RoleFeatureMapping() { Id = 31, RoleId = admin, FeatureTypeId = 8, FeatureId = 24 },
                new RoleFeatureMapping() { Id = 32, RoleId = admin, FeatureTypeId = 8, FeatureId = 25 },
                new RoleFeatureMapping() { Id = 33, RoleId = admin, FeatureTypeId = 9, FeatureId = 26 },
                new RoleFeatureMapping() { Id = 34, RoleId = admin, FeatureTypeId = 9, FeatureId = 27 },
                new RoleFeatureMapping() { Id = 35, RoleId = admin, FeatureTypeId = 9, FeatureId = 28 }
            );

[
    {
        "id": 1,
        "name": "Lični",
        "description": "Lični raspored za tekući mesec"
    },
    {
        "id": 2,
        "name": "Timski",
        "description": "Timski raspored za tekući mesec"
    },
    {
        "id": 3,
        "name": "Odeljenski",
        "description": "Pregled svih timskih rasporeda za tekući mesec"
    },
    {
        "id": 4,
        "name": "Smenski",
        "description": "Brzi pregled svih tehničara u timu po datumu i smeni"
    },
    {
        "id": 5,
        "name": "Kreiraj",
        "description": "Kreiranje rasporeda za naredni mesec za sve timove"
    },
    {
        "id": 6,
        "name": "Lista",
        "description": "Lista postojećih timova"
    },
    {
        "id": 7,
        "name": "Dodaj",
        "description": "Dodavanje novog tima"
    },
    {
        "id": 8,
        "name": "Izmeni",
        "description": "Izmena postojećeg tima"
    },
    {
        "id": 9,
        "name": "Obriši",
        "description": "Brisanje postojećeg tima"
    },
    {
        "id": 10,
        "name": "Lista",
        "description": "Spisak svih zaposlenih"
    },
    {
        "id": 11,
        "name": "Dodaj",
        "description": "Dodaj novog zaposlenog"
    },
    {
        "id": 12,
        "name": "Izmeni",
        "description": "Izmena podataka zaposlenih"
    },
    {
        "id": 13,
        "name": "Obriši",
        "description": "Obriši zaposlenog - podaci se arhiviraju!"
    },
    {
        "id": 14,
        "name": "Pretraga",
        "description": "Pretraga zaposlenih po različitim kriterijumima"
    },
    {
        "id": 15,
        "name": "Aplikacija",
        "description": "Podešavanja izgleda i funkcionalnosti aplikacije"
    },
    {
        "id": 16,
        "name": "Administracija",
        "description": "Administrativna podešavanja aplikacije i podataka"
    },
    {
        "id": 17,
        "name": "Timovi",
        "description": "Podešavanja organizacije timova"
    },
    {
        "id": 18,
        "name": "Prikaz",
        "description": "Prikaz osnovnih podataka korisnika"
    },
    {
        "id": 19,
        "name": "Izmena",
        "description": "Izmena osnovnih podataka korisnika"
    },
    "RCZaglavlje": [{
        "id": 20,
        "name": "Izmeni",
        "description": "Izmeni podatke u zaglavlju izabranog rasporeda"
    },],
    "RCImeClana": [{
        "id": 21,
        "name": "Dodaj/promeni ulogu",
        "description": "Dodavanje / promena uloge u sklopu tima"
    },
    {
        "id": 22,
        "name": "Prebaci u drugi tim",
        "description": "Prebacivanje zaposlenog u drugi tim"
    },],
    {
        "id": 23,
        "name": "Dodaj smenu",
        "description": "Dodavanje smene zaposlenom"
    },
    {
        "id": 24,
        "name": "Promeni smenu",
        "description": "Promena tipa smene"
    },
    {
        "id": 25,
        "name": "Obriši smenu",
        "description": "Brisanje smene sa rasporeda"
    },
    {
        "id": 26,
        "name": "Dodeli smenu",
        "description": "Dodela smene za ceo tim"
    },
    {
        "id": 27,
        "name": "Izmeni smenu",
        "description": "Izmena smene za ceo tim"
    },
    {
        "id": 28,
        "name": "Obriši smenu",
        "description": "Brisanje smene za ceo tim"
    }
]
{
    "Raspored": [
    {
        "id": 1,
        "name": "Lični",
        "description": "Lični raspored za tekući mesec"
    },
    {
        "id": 2,
        "name": "Timski",
        "description": "Timski raspored za tekući mesec"
    },
    {
        "id": 3,
        "name": "Odeljenski",
        "description": "Pregled svih timskih rasporeda za tekući mesec"
    },
    {
        "id": 4,
        "name": "Smenski",
        "description": "Brzi pregled svih tehničara u timu po datumu i smeni"
    },
    {
        "id": 5,
        "name": "Kreiraj",
        "description": "Kreiranje rasporeda za naredni mesec za sve timove"
    },],
    "Timovi": [{
        "id": 6,
        "name": "Lista",
        "description": "Lista postojećih timova"
    },
    {
        "id": 7,
        "name": "Dodaj",
        "description": "Dodavanje novog tima"
    },
    {
        "id": 8,
        "name": "Izmeni",
        "description": "Izmena postojećeg tima"
    },
    {
        "id": 9,
        "name": "Obriši",
        "description": "Brisanje postojećeg tima"
    },],
    "Zaposleni": [{
        "id": 10,
        "name": "Lista",
        "description": "Spisak svih zaposlenih"
    },
    {
        "id": 11,
        "name": "Dodaj",
        "description": "Dodaj novog zaposlenog"
    },
    {
        "id": 12,
        "name": "Izmeni",
        "description": "Izmena podataka zaposlenih"
    },
    {
        "id": 13,
        "name": "Obriši",
        "description": "Obriši zaposlenog - podaci se arhiviraju!"
    },
    {
        "id": 14,
        "name": "Pretraga",
        "description": "Pretraga zaposlenih po različitim kriterijumima"
    },],
    "Podesavanja": [{
        "id": 15,
        "name": "Aplikacija",
        "description": "Podešavanja izgleda i funkcionalnosti aplikacije"
    },
    {
        "id": 16,
        "name": "Administracija",
        "description": "Administrativna podešavanja aplikacije i podataka"
    },
    {
        "id": 17,
        "name": "Timovi",
        "description": "Podešavanja organizacije timova"
    },],
    "Profil": [{
        "id": 18,
        "name": "Prikaz",
        "description": "Prikaz osnovnih podataka korisnika"
    },
    {
        "id": 19,
        "name": "Izmena",
        "description": "Izmena osnovnih podataka korisnika"
    },],
    "RCZaglavlje": [{
        "id": 20,
        "name": "Izmeni",
        "description": "Izmeni podatke u zaglavlju izabranog rasporeda"
    },],
    "RCImeClana": [{
        "id": 21,
        "name": "Dodaj/promeni ulogu",
        "description": "Dodavanje / promena uloge u sklopu tima"
    },
    {
        "id": 22,
        "name": "Prebaci u drugi tim",
        "description": "Prebacivanje zaposlenog u drugi tim"
    },],
    "RCSmena": [{
        "id": 23,
        "name": "Dodaj smenu",
        "description": "Dodavanje smene zaposlenom"
    },
    {
        "id": 24,
        "name": "Promeni smenu",
        "description": "Promena tipa smene"
    },
    {
        "id": 25,
        "name": "Obriši smenu",
        "description": "Brisanje smene sa rasporeda"
    },],
    "RCDatumSmene": [{
        "id": 26,
        "name": "Dodeli smenu",
        "description": "Dodela smene za ceo tim"
    },
    {
        "id": 27,
        "name": "Izmeni smenu",
        "description": "Izmena smene za ceo tim"
    },
    {
        "id": 28,
        "name": "Obriši smenu",
        "description": "Brisanje smene za ceo tim"
    },],
  }
  */

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

    const getDayMonthFromDate = (dateStr) => {
      let dateArr = dateStr.split("-");
      let month = dateArr[1];
      let day = dateArr[2];
      return `${month}-${day}`;
    };

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
      religiousHoliday: getDayMonthFromDate(religiousHolidayRef.current.value), // It is in "yyyy-mm-dd" string format. use new Date(ref.current.value) otherwise
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
          <label htmlFor="dateOfBirth">Datum Rođenja</label>
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
          <button>Dodaj korisnika</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
