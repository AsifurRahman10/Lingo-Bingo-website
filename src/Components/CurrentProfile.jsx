import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Loading } from "./Loading";

export const CurrentProfile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="ml-10">
      <h1 className="text-3xl font-bold pt-20">
        Welcome, {user?.displayName || "User"}!
      </h1>
      <h2 className="mt-6 font-bold text-lg">Name : {user?.displayName}</h2>
      <p className="mt-3 font-bold text-lg">Email : {user?.email}</p>
    </div>
  );
};
