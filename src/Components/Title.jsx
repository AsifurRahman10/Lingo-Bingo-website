import React from "react";

export const Title = ({ heading, pera }) => {
  return (
    <div className="text-center text-black py-5 lg:py-10 lg:w-1/2 mx-auto">
      <h2 className="text-4xl font-bold">{heading}</h2>
      <p className="font-medium mt-4">{pera}</p>
    </div>
  );
};
