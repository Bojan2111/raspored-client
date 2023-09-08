import React, { useState } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const [jwtToken, setJwtToken] = useState("");
  const [username, setUsername] = useState("");

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

  return (
    <div className="app-container bg-light">
      {jwtToken != "" ? (
        <Dashboard username={username} token={jwtToken} />
      ) : (
        <Login onLoginSubmit={sendLoginData} />
      )}
    </div>
  );
};

export default App;
