import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const ForgetPassword = () => {
  const { emailValue, forgetPassword } = useContext(AuthContext);
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailValue
      ? emailValue.trim()
      : e.target.elements.email.value.trim();
    forgetPassword(email).then((res) => {
      window.location.href = "https://mail.google.com/mail/u/0/";
    });
  };
  return (
    <div className="bg-pastelYellow py-10">
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
          <h1 className="text-4xl font-medium text-black">Reset password</h1>
          <p className="text-sm mt-4 text-gray-600 font-semibold">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline text-blue-500">
              Register Now
            </Link>
          </p>

          <form onSubmit={handleForgetPassword}>
            <input
              type="email"
              placeholder={emailValue || "Enter your email"}
              name="email"
              className={`input input-bordered w-full md:w-11/12 border-none text-sm mt-4 ${
                emailValue ? "placeholder:text-black" : ""
              }`}
              //   required
            />
            <button className="btn mt-6 bg-[#6e54b5] text-white border-none block w-11/12">
              Reset password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
