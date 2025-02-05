import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const MyProfile = () => {
  const { user } = useContext(AuthContext);
  if (user)
    return (
      <div className=" bg-pastelYellow min-h-[calc(100vh-336px)] pb-20 md:pb-10 lg:pb-0">
        <HelmetProvider>
          <Helmet>
            <title>Welcome {user.displayName} - Lingo Bingo</title>
          </Helmet>
        </HelmetProvider>
        <div className="grid grid-cols-1 md:grid-cols-6 w-11/12 md:w-10/12 mx-auto">
          <div className="col-span-2">
            <img
              className="rounded-full h-40 w-40 mt-4 mx-auto"
              src={user.photoURL}
              alt=""
            />
            <div className="flex flex-col mt-4">
              <NavLink
                to="/myProfile"
                end
                className={({ isActive }) => (isActive ? "bg-lightBlue" : "")}
              >
                <button className="h-14 border-2 border-black w-full text-xl font-bold">
                  Profile
                </button>
              </NavLink>
              <NavLink
                to={"/myProfile/updateProfile"}
                className={({ isActive }) => (isActive ? "bg-lightBlue" : "")}
              >
                <button className="h-14 border-t-0 border-2 border-black w-full text-xl font-bold">
                  Update Profile
                </button>
              </NavLink>
            </div>
          </div>
          <div className="col-span-4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};
