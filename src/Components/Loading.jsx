import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-pastelYellow">
      <ClimbingBoxLoader size={50} />
    </div>
  );
};
