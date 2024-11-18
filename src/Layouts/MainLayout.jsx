import React from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <header className="bg-lightBlue">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
