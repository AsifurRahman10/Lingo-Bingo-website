import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const CurrentProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="md:ml-10">
      <h1 className="text-3xl font-bold pt-10 md:pt-20">
        Welcome, {user?.displayName || "User"}!
      </h1>
      <h2 className="mt-6 font-bold text-lg">Name : {user?.displayName}</h2>
      <p className="mt-3 font-bold text-lg">Email : {user?.email}</p>
    </div>
  );
};
