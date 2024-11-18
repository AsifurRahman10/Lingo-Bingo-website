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

export const StartLearning = () => {
  return (
    <div className="bg-pastelYellow">
      <div className="w-11/12 md:w-10/12 mx-auto py-20">
        <Title heading={"Lets Start"}></Title>
        <div className="grid grid-cols-4 gap-6">
          <Link to={"/lesson/:id"}>
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

          <Link>
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
          <Link>
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
          <Link>
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
          <Link>
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
          <Link>
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
          <Link>
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
          <Link>
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
          <Link>
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
          <Link>
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
    </div>
  );
};
