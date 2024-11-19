import React from "react";
import { Link } from "react-router-dom";

export const Tutorials = () => {
  return (
    <div className="bg-pastelYellow pb-20">
      <div className="w-11/12 md:w-9/12 mx-auto pb-10 space-y-6">
        <div data-aos="fade-left">
          <h1 className="text-2xl py-4 font-bold">
            LEARN GERMAN FOR BEGINNERS LESSONS - 1
          </h1>
          <iframe
            className="mx-auto"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/MOtqMNKs0Jw?si=7I0nn9HFb7ZAl-4g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-2xl py-4 font-bold">
            LEARN GERMAN FOR BEGINNERS LESSONS - 2
          </h1>
          <iframe
            className="mx-auto"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/iB_sassbnOw?si=hOU7QCQSYnfd0Rl5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-2xl py-4 font-bold">
            LEARN GERMAN FOR BEGINNERS LESSONS - 3
          </h1>
          <iframe
            className="mx-auto"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/5aNdCmSruYA?si=5tD9M-ze769EhGLQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-2xl py-4 font-bold">
            LEARN GERMAN FOR BEGINNERS LESSONS - 4
          </h1>
          <iframe
            className="mx-auto"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/-WHUtw33SQU?si=6spoIR1_0B7nj5WN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-2xl py-4 font-bold">
            LEARN GERMAN FOR BEGINNERS LESSONS - 5
          </h1>
          <iframe
            className="mx-auto"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/-WHUtw33SQU?si=PYTw5T3KfbCiqNdI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-2xl py-4 font-bold">
            LEARN GERMAN FOR BEGINNERS LESSONS - 6
          </h1>
          <iframe
            className="mx-auto"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/y51_ftySlQo?si=1shG6xbjqVCGclk_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="pt-4">
          <Link to="/startLearning">
            <button className="btn px-8 bg-lightBlue border-none  block mx-auto">
              Learn Vocabularies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
