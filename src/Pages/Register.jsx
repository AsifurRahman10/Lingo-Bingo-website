import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="bg-pastelYellow py-10">
      <div className="lg:w-1/2 mx-auto flex gap-y-4 flex-col-reverse lg:flex-row bg-lightBlue p-4 rounded-xl items-center">
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
          <form>
            <div className="flex mt-16 gap-2 flex-col md:flex-row">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered bg-[#3b364c] border-none text-sm w-full lg:mr-6"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered bg-[#3b364c] border-none text-sm"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full bg-[#3b364c] border-none text-sm mt-4"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-[#3b364c] border-none text-sm mt-4"
                name="password"
              />
              <MdOutlineRemoveRedEye
                onClick={() => setShow(!show)}
                className="absolute top-8 right-14 text-lg"
              />
            </div>
            <div className="mt-4 flex gap-4 items-center">
              <input
                // onChange={handleCheckBox}
                type="checkbox"
                className="checkbox"
              />
              <p>
                I agree with the{" "}
                <Link
                  to={"https://github.com/AsifurRahman10"}
                  className="text-blue-500 underline font-semibold"
                >
                  terms and condition
                </Link>
              </p>
            </div>
            <button className="btn bg-[#6e54b5] text-white rounded-md w-11/12 mt-8">
              Create Account
            </button>
          </form>
          <div className="flex w-full flex-col mt-4">
            <div className="divider divider-neutral text-gray-400 text-sm">
              Or register with
            </div>
          </div>
          <div className="flex gap-4">
            <button
              //   onClick={handleCreateAccountWithGoogle}
              className="btn bg-transparent border-[1px] border-gray-400 w-[45%] font-semibold"
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
            <button className="btn bg-transparent border-[1px] border-gray-400 w-[45%] font-semibold">
              <img
                className="w-[30px]"
                src={
                  "https://img.icons8.com/?size=100&id=30659&format=png&color=000000"
                }
                alt=""
              />{" "}
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
