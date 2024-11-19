import { MainLayout } from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { StartLearning } from "../Pages/StartLearning";
import { Tutorials } from "../Pages/Tutorials";
import { AboutUs } from "../Pages/AboutUs";
import { LessonDetails } from "../Pages/LessonDetails";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { PrivateRouter } from "./PrivateRouter";
import { MyProfile } from "../Pages/MyProfile";
import { CurrentProfile } from "../Components/CurrentProfile";
import { UpdateProfile } from "../Components/UpdateProfile";
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
      {
        path: "lesson/:id",
        element: (
          <PrivateRouter>
            <LessonDetails></LessonDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/vocabulary.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
        children: [
          {
            path: "/myProfile/profile",
            element: <CurrentProfile></CurrentProfile>,
          },
          {
            path: "/myProfile/updateProfile",
            element: <UpdateProfile></UpdateProfile>,
          },
        ],
      },
    ],
  },
]);
