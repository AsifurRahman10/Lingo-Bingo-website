import React from "react";
import { Title } from "./Title";
import { RiTeamLine } from "react-icons/ri";
import { GiFocusedLightning, GiPathDistance } from "react-icons/gi";

export const About = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10 lg:my-20">
      <Title
        heading={"Why Lingo-Bingo"}
        pera={
          "Our mission is to make learning German fun, interactive, and accessible to everyone, regardless of their experience level."
        }
      ></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        <div className="flex items-center bg-pastelYellow p-4 gap-4 rounded-lg">
          <RiTeamLine className="text-8xl" />
          <div>
            <p className="text-xl">Huge Support and Teaching Team</p>
            <p>
              We have a huge german speaking people team for your teaching and
              support
            </p>
          </div>
        </div>
        <div className="flex items-center bg-pastelYellow px-8 py-4 gap-4 rounded-lg">
          <GiFocusedLightning className="text-8xl" />
          <div>
            <p className="text-xl">Real-Life Usage Focus</p>
            <p>
              Our platform emphasizes learning vocabulary in real-life contexts,
              ensuring you're not just memorizing words but learning how to use
              them in everyday situations.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-pastelYellow p-4 gap-4 rounded-lg">
          <GiPathDistance className="text-8xl" />
          <div>
            <p className="text-xl">Personalized Learning Path</p>
            <p>
              Tailored lessons based on your progress and skill level, adapting
              to your individual learning pace for better retention and fluency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
