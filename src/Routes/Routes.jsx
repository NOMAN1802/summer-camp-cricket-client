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
import InstructorPanel from "../Pages/Dashboard/InstructorPanel/InstructorPanel";
import AddClass from "../Pages/Dashboard/InstructorPanel/AddClass";
import MyClass from "../Pages/Dashboard/InstructorPanel/MyClass";
import ManageClasses from "../Pages/Dashboard/AdminPanel/ManageClasses";
import Payment from "../Pages/Dashboard/MyPortal/Payment";


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
            element: <PrivateRoute><MyPortal></MyPortal></PrivateRoute>
          },
          {
            path:'payment',
            element:<Payment></Payment>
          },
          {
            path:'adminPanel',
            element:<PrivateRoute><AdminPanel></AdminPanel></PrivateRoute>
          },
          {
            path:'allUsers',
            element: <AllUsers></AllUsers>
          },
          {
            path:'manageClasses',
            element:<ManageClasses></ManageClasses>
          },
          {
            path:'instructorPanel',
            element:<PrivateRoute><InstructorPanel></InstructorPanel></PrivateRoute>
          },{
            path:'addClass',
            element:<AddClass></AddClass>
          },
          {
            path:'myClass',
            element:<MyClass></MyClass>
          }
        ]
      }
  ]);


      
      