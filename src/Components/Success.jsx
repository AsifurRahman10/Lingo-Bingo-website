import React from "react";
import { Title } from "./Title";
import CountUp from "react-countup";
import { TbUsersGroup, TbVocabulary } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

export const Success = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10 lg:my-20">
      <Title
        heading={"Learning Achievements"}
        pera={
          "Discover how far we’ve come together! Our platform has empowered countless users with engaging lessons, an ever-growing vocabulary library, and interactive tutorials designed for effective learning."
        }
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-center mt-10">
        <div
          className="flex items-center bg-mutedRose px-12 py-6 gap-4 w-full md:w-auto md:h-[150px]"
          data-aos="fade-up"
        >
          <TbUsersGroup className="text-8xl text-white" />
          <div>
            <CountUp
              className="text-4xl font-bold text-white"
              end={1380}
              duration={2}
            ></CountUp>
            <p className="text-xl font-medium text-gray-200">Users</p>
          </div>
        </div>
        <div
          className="flex items-center bg-mutedRose px-12 py-6 gap-6 w-full md:w-auto md:h-[200px]"
          data-aos="fade-up"
        >
          <FaBookOpen className="text-8xl text-white" />
          <div>
            <CountUp
              className="text-4xl font-bold text-white"
              end={10}
              duration={2}
            ></CountUp>
            <p className="text-xl font-medium text-gray-200">Lesson</p>
          </div>
        </div>
        <div
          className="flex items-center bg-mutedRose px-12 py-6 gap-4 w-full md:w-auto md:h-[200px]"
          data-aos="fade-up"
        >
          <TbVocabulary className="text-8xl text-white" />
          <div>
            <CountUp
              className="text-4xl font-bold text-white"
              end={2000000}
              duration={2}
            ></CountUp>
            <p className="text-xl font-medium text-gray-200">Vocabulary</p>
          </div>
        </div>
        <div
          className="flex items-center bg-mutedRose px-12 py-6 gap-4 w-full md:w-auto md:h-[150px]"
          data-aos="fade-up"
        >
          <IoVideocam className="text-8xl text-white" />
          <div>
            <CountUp
              className="text-4xl font-bold text-white"
              end={200}
              duration={2}
            ></CountUp>
            <p className="text-xl font-medium text-gray-200">Tutorial</p>
          </div>
        </div>
      </div>
    </div>
  );
};
