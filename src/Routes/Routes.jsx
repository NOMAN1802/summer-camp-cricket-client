import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"
import DashboardLayOut from "../layouts/DashboardLayOut";
import Instructor from "../Pages/Instructor/Instructor";


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
          path:'/instructors',
          element:<Instructor></Instructor>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
         path:'/register',
         element:<Register></Register>
        }
        
      ]
    },
      {
        path:'/dashboard',
        element:<DashboardLayOut/>
      }
  ]);