import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const Navbar = () => {
  const { user, handleSignout } = useContext(AuthContext);
  return (
    <div className="navbar md:w-10/12 mx-auto py-4 lg:py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-4 shadow"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `font-medium ${isActive ? "underline" : ""}`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/startLearning"}
              className={({ isActive }) =>
                `font-medium ${isActive ? "underline" : ""}`
              }
            >
              <li>Start-learning</li>
            </NavLink>
            <NavLink
              to={"/tutorials"}
              className={({ isActive }) =>
                `font-medium ${isActive ? "underline" : ""}`
              }
            >
              <li>Tutorials</li>
            </NavLink>
            <NavLink
              to={"/aboutUs"}
              className={({ isActive }) =>
                `font-medium ${isActive ? "underline" : ""}`
              }
            >
              <li>about-us</li>
            </NavLink>
            {user && (
              <NavLink
                to={"/myProfile"}
                className={({ isActive }) =>
                  `text-lg font-medium ${isActive ? "underline" : ""}`
                }
              >
                <li>My Profile</li>
              </NavLink>
            )}
          </ul>
        </div>
        <Link className="flex items-center">
          <img className="w-14 hidden md:block" src={logo} alt="" />
          <span className="md:text-2xl text-sm font-bold">Lingo Bingo</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "underline" : ""}`
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/startLearning"}
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "underline" : ""}`
            }
          >
            <li>Start-learning</li>
          </NavLink>
          <NavLink
            to={"/tutorials"}
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "underline" : ""}`
            }
          >
            <li>Tutorials</li>
          </NavLink>
          <NavLink
            to={"/aboutUs"}
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "underline" : ""}`
            }
          >
            <li>about-us</li>
          </NavLink>
          {user && (
            <NavLink
              to={"/myProfile"}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              <li>My Profile</li>
            </NavLink>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <p className="text-center text-sm font-semibold mr-4 hidden md:block">
            Welcome <br /> {user?.displayName}
          </p>
        )}
        {user && (
          <img
            className="rounded-full w-14 h-14 mr-4"
            src={user?.photoURL}
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleSignout}
            className="btn bg-pastelYellow border-none px-8"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn bg-pastelYellow border-none px-8">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
