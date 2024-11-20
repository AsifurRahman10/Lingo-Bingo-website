import React from "react";
import { Title } from "../Components/Title";
import bannner1 from "../assets/banner-1.jpg";
import bannner2 from "../assets/banner-2.jpg";
import bannner3 from "../assets/banner-3.jpg";
import bannner4 from "../assets/banner-4.jpg";
import bannner5 from "../assets/banner-5.png";
import bannner6 from "../assets/banner-6.jpg";
import bannner7 from "../assets/banner-7.jpg";
import bannner8 from "../assets/banner-1.jpg";
import bannner9 from "../assets/banner-9.jpg";
import bannner10 from "../assets/banner-10.png";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const StartLearning = () => {
  return (
    <div className="bg-pastelYellow pb-0 lg:pb-20">
      <HelmetProvider>
        <Helmet>
          <title>Start learning - Lingo Bingo</title>
        </Helmet>
      </HelmetProvider>
      <div className="w-11/12 md:w-10/12 mx-auto pb-10">
        <Title heading={"Lets Start"}></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to={`/lesson/${1}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner1}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 1</h2>
              </div>
            </div>
          </Link>

          <Link to={`/lesson/${2}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner2}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 2</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${3}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner3}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 3</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${4}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner4}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 4</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${5}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner5}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 5</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${6}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner6}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 6</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${7}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner7}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 7</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${8}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner8}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 8</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${9}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner9}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 9</h2>
              </div>
            </div>
          </Link>
          <Link to={`/lesson/${10}`}>
            <div className="card bg-white shadow-xl">
              <figure>
                <img
                  className="w-full md:h-[250px]"
                  src={bannner10}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lesson : 10</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-9/12 mx-auto pb-20">
        <Title
          heading={"You can check our video tutorial"}
          pera={
            "You can start's by learning by this alphabet learning tutorial"
          }
        ></Title>

        <iframe
          width="100%"
          height="100%"
          className="h-[200px] md:h-[300px] lg:h-[600px]"
          src="https://www.youtube.com/embed/xYuPIQMvEsg?si=FWyVpf_iIiB7FT8j"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <Link to={"/tutorials"}>
          <button className="btn bg-lightBlue border-none px-8 mt-6 block mx-auto font-bold">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};
