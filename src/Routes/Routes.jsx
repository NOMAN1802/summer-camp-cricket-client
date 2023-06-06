import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import DashboardLayOut from "../layouts/DashboardLayOut";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path: '/',
            element: <Home/>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        
      ]
    },
      {
        path:'/dashboard',
        element:<DashboardLayOut/>
      }
  ]);