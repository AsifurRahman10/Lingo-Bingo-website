import React, { useState } from "react";
import english from "../assets/english.png";
import german from "../assets/german.png";
import { GiSpeaker } from "react-icons/gi";
import { Modal } from "./Modal";

export const Vocabularies = ({ singleData }) => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const bgColor =
    difficulty === "Easy"
      ? "bg-[#A8D5BA]"
      : difficulty === "Medium"
      ? "bg-[#F4D06F]"
      : difficulty === "Hard"
      ? "bg-[#E57373]"
      : "bg-default";

  const pronounceWord = (pronunciation) => {
    const utterance = new SpeechSynthesisUtterance(pronunciation);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
  };

  const handleModal = () => {
    setModalData({ word, meaning, when_to_say, example });
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setModalData(null);
    setIsModalOpen(false);
  };
  return (
    <div
      className={`collapse collapse-arrow border-2 border-black p-4 ${bgColor}`}
    >
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
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
      <div className="collapse-content">
        <p className="font-medium flex items-center">
          Pronunciation : <span className="font-bold">{pronunciation}</span>
          <GiSpeaker
            onClick={() => pronounceWord(pronunciation)}
            className="ml-2 text-2xl"
          />
        </p>
        <p className="font-medium">
          Part of speech : <span className="font-bold">{part_of_speech}</span>
        </p>
        {/* <p className="font-medium">
          When to say : <span className="font-bold">{when_to_say}</span>
        </p>
        <p className="font-medium">
          Example : <span className="font-bold">{example}</span>
        </p> */}
        <button
          onClick={handleModal}
          className="btn mt-2 bg-transparent border-black"
        >
          When to say
        </button>
      </div>
      {isModalOpen && (
        <Modal
          word={modalData?.word}
          meaning={modalData?.meaning}
          when_to_say={modalData?.when_to_say}
          example={modalData?.example}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};
