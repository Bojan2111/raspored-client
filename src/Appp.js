import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Blogin from "./features/auth/Blogin";
import Public from "./components/Public";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";

const Appp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Blogin />} />

        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Appp;
