import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Teachers from "./pages/Teachers/Teachers";
import Subjects from "./pages/Subjects/Subjects";
import Groups from "./pages/Groups/Groups";
import Courses from "./pages/Courses/Courses";
import CoursesTwo from "./pages/Courses-1/CoursesTwo";
import { useState } from "react";
import Admin from "./pages/Admin/Admin";
import AdminPanelLayout from "./layout/adminPanelLayout/AdminPanelLayout";
import AdnHome from "./pages/AdminHome/AdnHome";
import AdminSchedule from "./pages/AdminSchedules/AdminSchedule";
import AdminTeacher from "./pages/AdminTeachers/AdminTeacher";
import AdminGroups from "./pages/AdminGroups/AdminGroups";
import AdminLibary from "./pages/AdminLibary/AdminLibary";
import Login from "./pages/Login/Login"

function App() {
  let [toggleBar, setToggleBar] = useState(false);
  const access = localStorage.getItem("access");

  if (!access) {
    return <Login />;
  }

  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout toggleBar={toggleBar} setToggleBar={setToggleBar} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "adn",
          element: <AdminPanelLayout />,
          children: [
            {
              path: "adminpanel",
              element: <Admin />,
              children: [
                {
                  path:'adnHome',
                  element:<AdnHome />
                },
                {
                  path:"adnSchedule",
                  element: <AdminSchedule />
                },
                {
                  path:'adnTeachers',
                  element:<AdminTeacher />
                },
                {
                  path:"adnGroups",
                  element: <AdminGroups />
                },
                {
                  path:"adnLibary",
                  element: <AdminLibary />
                },
              ]
            },
          ],
        },
        {
          path: "schedule",
          element: <Courses />,
          children: [
            {
              path: "courses-1",
              element: <Schedule />,
            },
            {
              path: "courses-2",
              element: <CoursesTwo />,
            },
          ],
        },
        {
          path: "teachers",
          element: <Teachers />,
        },
        {
          path: "groups",
          element: <Groups />,
        },
        {
          path: "subject",
          element: <Subjects />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
