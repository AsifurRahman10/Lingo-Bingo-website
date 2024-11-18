import { MainLayout } from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { StartLearning } from "../Pages/StartLearning";
import { Tutorials } from "../Pages/Tutorials";
import { AboutUs } from "../Pages/AboutUs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/startLearning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
