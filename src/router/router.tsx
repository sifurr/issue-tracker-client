import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MainLayout from "../layout/MainLayout";
import ManageUsers from "../pages/ManageUsers/ManageUsers";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/manage-users",
          element: <ManageUsers/>
        },
        {
          path: "about",
          element: <About/>
        }
      ]
    }
  ])


export default router;