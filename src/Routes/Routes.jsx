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
import MyPortal from "../Pages/Dashboard/MyPortal/MyPortal";
import PrivateRoute from "./PrivateRoute";
import AdminPanel from "../Pages/Dashboard/AdminPanel/AdminPanel";
import AllUsers from "../Pages/Dashboard/AdminPanel/AllUsers";


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
        path:'dashboard',
        element: <PrivateRoute>
          <DashboardLayOut></DashboardLayOut>
        </PrivateRoute>,
        children:[
          {
            path:'myPortal',
            element: <MyPortal></MyPortal>
          },
          {
            path:'adminPanel',
            element:<AdminPanel></AdminPanel>
          },
          {
            path:'allUsers',
            element: <AllUsers></AllUsers>
          }
        ]
      }
  ]);


      
      