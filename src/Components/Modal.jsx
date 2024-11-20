import React from "react";

export const Modal = ({ word, meaning, when_to_say, example, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 md:p-12 rounded-md shadow-lg">
        <h3 className="text-lg mb-4">
          Word: <span className="font-bold">{word}</span>
        </h3>
        <p className="mb-4">Meaning : {meaning}</p>
        <p className="mb-4">When to say : {when_to_say}</p>
        <p>Example : {example}</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="btn bg-lightBlue text-black font-bold px-4 py-2 rounded"
          >
            Back to Lesson
          </button>
        </div>
      </div>
    </div>
  );
};
