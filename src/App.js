import React from "react";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <div className="app-container bg-light">
      {useSelector((store) => store.auth.token) !== null ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
