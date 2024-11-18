import React from "react";
import { Banner } from "../Components/Banner";
import { About } from "../Components/About";
import { Success } from "../Components/Success";
import { Feedback } from "../Components/Feedback";

export const Home = () => {
  return (
    <div className="bg-pastelYellow">
      <Banner></Banner>

      <About></About>
      <Success></Success>
      <Feedback></Feedback>
    </div>
  );
};
