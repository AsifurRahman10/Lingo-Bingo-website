import React, { useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

export const MainLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
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
