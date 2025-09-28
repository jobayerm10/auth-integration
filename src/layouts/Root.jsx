import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <div className="bg-[#808080]">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
