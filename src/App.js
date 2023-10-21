import React, { lazy, Suspense } from "react";
import Login from "./components/auth/Login";
import { useSelector } from "react-redux";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));

const App = () => {
  const userAuthenticated = useSelector((store) => store.auth.token) !== null;

  return (
    <div className="app-container bg-light">
      {userAuthenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
