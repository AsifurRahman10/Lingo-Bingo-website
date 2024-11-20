import React from "react";
import { Title } from "./Title";
import { FaQuoteLeft } from "react-icons/fa";

export const Feedback = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto pb-20 md:pb-32 pt-10">
      <Title
        heading={"FeedBack"}
        pera={
          "Hear from learners worldwide! Discover how our platform has helped them achieve their language goals and transform their skills."
        }
      ></Title>
      <div className="flex gap-6 md:flex-wrap lg:flex-nowrap md:justify-center mt-10 flex-col md:flex-row">
        <div className="border-2 border-black p-8 pt-12 md:w-[45%]">
          <div className="flex items-start gap-3">
            <FaQuoteLeft className="text-orange-500 text-6xl -translate-y-8" />
            <p>
              The lessons are incredibly engaging! I never thought learning
              German could be this fun and effective."
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="avatar">
              <div className="w-14 rounded-full mt-4">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <span>Sarah Müller</span>
          </div>
        </div>
        <div className="border-2 border-black p-8 pt-12 md:w-[45%]">
          <div className="flex items-start gap-3">
            <FaQuoteLeft className="text-orange-500 text-6xl -translate-y-8" />
            <p>
              Thanks to this platform, I can now confidently converse in German
              with my colleagues. Highly recommended!
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="avatar">
              <div className="w-14 rounded-full mt-10">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" />
              </div>
            </div>
            <span>Johannes Schmidt</span>
          </div>
        </div>
        <div className="border-2 border-black p-8 pt-12 md:w-[45%]">
          <div className="flex items-start gap-3">
            <FaQuoteLeft className="text-orange-500 text-6xl -translate-y-8" />
            <p>
              I love how easy it is to track my progress and improve my
              vocabulary daily. Such a game-changer!
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" />
              </div>
            </div>
            <span className="mt-4">Lisa Becker</span>
          </div>
        </div>
      </div>
    </div>
  );
};
