import React from "react";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import banner4 from "../assets/banner-4.jpg";

export const Banner = () => {
  return (
    <div className="carousel w-full max-h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner2} className="w-full " />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute left-10 right-10 top-1/2 transform -translate-y-1/2 md:px-6">
          <h2
            className="text-white text-xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
          >
            Learn German with Ease
          </h2>
          <p
            className="text-white text-base lg:text-lg mb-3 md:mb-6"
            data-aos="fade-down"
          >
            Expand your vocabulary and improve your communication skills.
          </p>
          <div className="flex justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute left-10 right-10 top-1/2 transform -translate-y-1/2 md:px-6">
          <h2 className="text-white text-xl md:text-4xl font-bold mb-4">
            Master German Vocabulary
          </h2>
          <p className="text-white text-base lg:text-lg mb-3 md:mb-6">
            Learn and retain vocabulary easily with interactive lessons.
          </p>
          <div className="flex justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute left-10 right-10 top-1/2 transform -translate-y-1/2 md:px-6">
          <h2 className="text-white text-xl md:text-4xl font-bold mb-4">
            Interactive German Lessons
          </h2>
          <p className="text-white text-base lg:text-lg  mb-3 md:mb-6">
            Improve your speaking and comprehension skills in German.
          </p>
          <div className="flex justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute left-10 right-10 top-1/2 transform -translate-y-1/2 md:px-6">
          <h2 className="text-white text-xl md:text-4xl font-bold mb-4">
            Become Fluent in German
          </h2>
          <p className="text-white text-base lg:text-lg mb-3 md:mb-6">
            Start your journey to mastering the German language with us.
          </p>
          <div className="flex justify-between">
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
  );
};
