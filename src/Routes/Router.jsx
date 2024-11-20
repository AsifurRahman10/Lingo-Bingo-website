import { MainLayout } from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { StartLearning } from "../Pages/StartLearning";
import { Tutorials } from "../Pages/Tutorials";
import { LessonDetails } from "../Pages/LessonDetails";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { PrivateRouter } from "./PrivateRouter";
import { MyProfile } from "../Pages/MyProfile";
import { CurrentProfile } from "../Components/CurrentProfile";
import { UpdateProfile } from "../Components/UpdateProfile";
import { ErrorPage } from "../Pages/ErrorPage";
import { ForgetPassword } from "../Pages/ForgetPassword";

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
        element: (
          <PrivateRouter>
            <Tutorials></Tutorials>
          </PrivateRouter>
        ),
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
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
        children: [
          {
            path: "/myProfile",
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
