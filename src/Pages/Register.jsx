import React, { useContext, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Register = () => {
  const {
    handleGoogleLogin,
    emailRegistration,
    updateProfileNamePhoto,
    setUser,
    user,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleGoogleLoginF = () => {
    handleGoogleLogin().then((res) => {
      navigate("/");
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const firstName = e.target.fName.value;
    const lastName = e.target.lName.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setError("password error");
      return;
    }
    const name = firstName + " " + lastName;
    emailRegistration(email, password, name, photo)
      .then((res) => {
        updateProfileNamePhoto(name, photo).then((res) => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });
          navigate("/");
        });
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
          <title>Register - Lingo Bingo</title>
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
        <div className="flex-1 ml-2 md:ml-10">
          <h1 className="text-3xl md:text-4xl font-medium text-black">
            Create an account
          </h1>
          <p className="text-sm mt-4 text-gray-600 font-semibold">
            Already have an account?{" "}
            <Link to={"/login"} className="underline text-blue-500">
              Log in
            </Link>
          </p>
          <form onSubmit={handleRegister}>
            <div className="flex mt-16 gap-2 flex-col md:flex-row">
              <div>
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  className="input input-bordered bg-white border-none text-sm w-full lg:mr-6"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  className="input input-bordered bg-white border-none text-sm w-full"
                  required
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full bg-white border-none text-sm mt-4"
              required
            />
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered w-full bg-white border-none text-sm mt-4"
              required
            />
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full bg-white border-none text-sm mt-4"
                name="password"
                required
              />
              <MdOutlineRemoveRedEye
                onClick={() => setShow(!show)}
                className="absolute top-8 right-7 text-lg"
              />
            </div>
            {error && <p className="font-bold text-red-500 mt-4">{error}</p>}
            <button className="btn bg-[#6e54b5] text-white rounded-md mt-6 w-full">
              Create Account
            </button>
          </form>
          <div className="flex w-full flex-col mt-4">
            <div className="divider divider-neutral text-gray-400 text-sm">
              Or register with
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={handleGoogleLoginF}
              className="btn bg-transparent border-[1px] border-gray-400 font-semibold w-full"
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
