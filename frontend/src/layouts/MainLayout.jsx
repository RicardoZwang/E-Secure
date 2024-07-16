import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Fab from "../components/Fab.jsx";

const MainLayout = ({ showNav }) => {
  return (
    <>
      {showNav && <Navbar />}

      <Fab />

      <Outlet />
    </>
  );
};

export default MainLayout;
