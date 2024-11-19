import React, { useEffect } from "react";
import { Banner } from "../Components/Banner";
import { About } from "../Components/About";
import { Success } from "../Components/Success";
import { Feedback } from "../Components/Feedback";

export const Home = () => {
  return (
    <div className="bg-pastelYellow">
      <div data-aos="fade-left">
        <Banner></Banner>
      </div>
      <div data-aos="fade-left">
        <About></About>
      </div>
      <div data-aos="fade-left">
        <Success></Success>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Feedback></Feedback>
      </div>
    </div>
  );
};
