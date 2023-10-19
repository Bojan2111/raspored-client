import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const [jwtToken, setJwtToken] = useState("fdsfsf");
  const [username, setUsername] = useState("");
  const [features, setFeatures] = useState(["fasdf", "fsadf"]);

  // test auth: qwert = zap, asdf = adm

  async function sendLoginData(loginData) {
    const response = await fetch("https://localhost:44383/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setJwtToken(data.token);
    setUsername(data.username);
  }

  async function getFeatures(token) {
    const response = await fetch("https://localhost:44383/role-features", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("features:", data, JSON.parse(data));
    setFeatures(data);
  }

  return (
    <div className="app-container bg-light">
      {/* {jwtToken && features.length > 0 ? ( */}
      <Dashboard features={features} username={username} token={jwtToken} />
      {/* ) : (
        <Login onLoginSubmit={sendLoginData} />
      )} */}
    </div>
  );
};

export default App;
