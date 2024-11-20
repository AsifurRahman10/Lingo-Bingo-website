import React, { useContext, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Login = () => {
  const { handleGoogleLogin, loginWithEmail, handleInputChange, emailValue } =
    useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLoginF = () => {
    handleGoogleLogin().then((res) => {
      if (location.state) {
        return navigate(location.state.from);
      }
      navigate("/");
    });
  };
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginWithEmail(email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        const message = err.message.split(":");
        setError(message[1]);
      });
  };
  return (
    <div className="bg-pastelYellow py-10">
      <HelmetProvider>
        <Helmet>
          <title>Login - Lingo Bingo</title>
        </Helmet>
      </HelmetProvider>
      <div className="w-11/12 lg:w-1/2 mx-auto flex gap-y-4 flex-col-reverse md:flex-row bg-lightBlue p-4 rounded-xl items-center">
        <div className="flex-1">
          <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://images.pexels.com/photos/27428446/pexels-photo-27428446/free-photo-of-a-sunset-over-the-ocean-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://images.pexels.com/photos/27829096/pexels-photo-27829096/free-photo-of-a-pink-and-white-flower-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://images.pexels.com/photos/16412582/pexels-photo-16412582/free-photo-of-portrait-of-a-black-and-white-domestic-cat-with-yellow-eyes-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://images.pexels.com/photos/15625303/pexels-photo-15625303/free-photo-of-east-o-blue.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 md:ml-10">
          <h1 className="text-4xl font-medium text-black">Login</h1>
          <p className="text-sm mt-4 text-gray-600 font-semibold">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline text-blue-500">
              Register Now
            </Link>
          </p>

          <form onSubmit={handleLoginWithEmail}>
            <div className="flex mt-6 md:mt-16 gap-4"></div>
            <input
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full md:w-11/12 border-none text-sm mt-4"
              required
            />
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full md:w-11/12 border-none text-sm mt-4"
                name="password"
                required
              />
              <MdOutlineRemoveRedEye
                onClick={() => setShow(!show)}
                className="absolute top-8 right-6 md:right-10 lg:right-14 text-lg"
              />
            </div>
            {error && <p className="font-bold text-red-500 mt-4">{error}</p>}
            <Link to={"/forgetPassword"}>
              <p className="mt-2 font-medium underline text-gray-800">
                Forget password?
              </p>
            </Link>
            <button className="btn bg-[#6e54b5] text-white rounded-md w-full md:w-11/12 mt-8">
              Sign in
            </button>
          </form>
          <div className="flex w-11/12 flex-col mt-4 ">
            <div className="divider divider-neutral text-gray-400 text-sm">
              Or log in with
            </div>
          </div>
          <div className="">
            <button
              onClick={handleGoogleLoginF}
              className="btn bg-transparent border-[1px] border-gray-400 font-semibold w-full md:w-11/12"
            >
              <img
                className="w-[30px]"
                src={
                  "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                }
                alt=""
              />{" "}
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
