import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Schedule from './pages/Schedule/Schedule'
import Teachers from './pages/Teachers/Teachers'
import Subjects from './pages/Subjects/Subjects'
import Groups from './pages/Groups/Groups'

function App() {
  const routes = createBrowserRouter([
    {
      path:'',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "schedule",
          element: <Schedule />
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
