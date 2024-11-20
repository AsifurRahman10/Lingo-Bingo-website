import React, { useEffect } from "react";
import { Banner } from "../Components/Banner";
import { About } from "../Components/About";
import { Success } from "../Components/Success";
import { Feedback } from "../Components/Feedback";

export const Home = () => {
  return (
    //
    <div className="bg-pastelYellow">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Success></Success>
      </div>
      <div>
        {" "}
        <Feedback></Feedback>
      </div>
    </div>
  );
};
