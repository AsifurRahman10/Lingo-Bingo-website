import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../Components/Loading";

export const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to={"/login"}></Navigate>
    );
  }
  return <div>{children}</div>;
};
