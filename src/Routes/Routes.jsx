import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Home/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyPhysicalClass from "../Pages/Dashboard/MyPhysicalClass/MyPhysicalClass";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'instructors',
          element:<Instructors></Instructors>
        },
        {
          path: 'allinstructors',
          element:<AllInstructors></AllInstructors>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'SignUp',
          element:<SignUp></SignUp>
        }
      ]
    },
     {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'myphysicalclass',
          element:<MyPhysicalClass></MyPhysicalClass>
        }
      ]
     }
  ]);