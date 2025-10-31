import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Schedule from './pages/Schedule/Schedule'
import Teachers from './pages/Teachers/Teachers'
import Subjects from './pages/Subjects/Subjects'
import Groups from './pages/Groups/Groups'
import Courses from './pages/Courses/Courses'
import CoursesTwo from './pages/Courses-1/CoursesTwo'
import { useState } from "react";
import Admin from './pages/Admin/Admin'

function App() {
  let [toggleBar, setToggleBar] = useState(false);
  const routes = createBrowserRouter([
    {
      path:'',
      element: <Layout toggleBar={toggleBar} setToggleBar={setToggleBar} />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path:'adminPanel',
          element: <Admin />
        },
        {
          path: "schedule",
          element: <Courses />,
          children: [
            {
              path:'courses-1' ,
              element: <Schedule />
            },
            {
              path:'courses-2',
              element: <CoursesTwo />
            }
          ]
        },
        {
          path: "teachers",
          element: <Teachers />
        },
        {
          path: "groups",
          element: <Groups />
        },
        {
          path: "subject",
          element: <Subjects />
        },
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
