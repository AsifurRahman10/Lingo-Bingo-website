import React from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
  return (
    <div>
      <header className="bg-lightBlue">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-336px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-base-200">
        <Footer></Footer>
      </footer>
    </div>
  );
};
