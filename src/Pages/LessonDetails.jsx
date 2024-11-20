import { useLoaderData, useParams } from "react-router-dom";
import { Vocabularies } from "../Components/Vocabularies";

import { Helmet, HelmetProvider } from "react-helmet-async";

export const LessonDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const lessonData = data.filter((lesson) => lesson.lesson_no === parseInt(id));
  return (
    <div className="bg-pastelYellow pb-20">
      <HelmetProvider>
        <Helmet>
          <title>Lesson {id} - Lingo Bingo</title>
        </Helmet>
      </HelmetProvider>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-3xl font-bold py-10">Lesson {id}</h2>
        <div className="my-10 flex gap-6">
          <h2 className="flex items-center gap-2">
            <span className="font-bold text-2xl">Easy</span>{" "}
            <p className="w-16 h-10 bg-[#A8D5BA]"></p>
          </h2>
          <h2 className="flex items-center gap-2">
            <span className="font-bold text-2xl">Medium</span>{" "}
            <p className="w-16 h-10 bg-[#F4D06F]"></p>
          </h2>
          <h2 className="flex items-center gap-2">
            <span className="font-bold text-2xl">Hard</span>{" "}
            <p className="w-16 h-10 bg-[#E57373]"></p>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {lessonData.map((singleData) => (
            <Vocabularies
              key={singleData.id}
              singleData={singleData}
            ></Vocabularies>
          ))}
        </div>
      </div>
    </div>
  );
};
