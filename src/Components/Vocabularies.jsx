import React from "react";
import english from "../assets/english.png";
import german from "../assets/german.png";

export const Vocabularies = ({ singleData }) => {
  const {
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    lesson_no,
    when_to_say,
    example,
  } = singleData;
  console.log(singleData);
  const bgColor =
    difficulty === "Easy"
      ? "bg-[#A8D5BA]"
      : difficulty === "Medium"
      ? "bg-[#F4D06F]"
      : difficulty === "Hard"
      ? "bg-[#E57373]"
      : "bg-default";
  return (
    <div class={`collapse collapse-arrow border-2 border-black p-4 ${bgColor}`}>
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={german} alt="" />
            <span className="text-3xl font-bold">{word}</span>
          </span>
          <span className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={english} alt="" />
            <span className="text-3xl font-bold">{meaning}</span>
          </span>
        </div>
      </div>
      <div class="collapse-content">
        <p className="font-medium">
          Pronunciation : <span className="font-bold">{pronunciation}</span>
        </p>
        <p className="font-medium">
          Part of speech : <span className="font-bold">{part_of_speech}</span>
        </p>
        <p className="font-medium">
          When to say : <span className="font-bold">{when_to_say}</span>
        </p>
        <p className="font-medium">
          Example : <span className="font-bold">{example}</span>
        </p>
      </div>
    </div>
  );
};
