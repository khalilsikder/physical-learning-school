import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import InstructorInfo from "../Pages/InstructorInfo/InstructorInfo";
import Dashboard from "../Layout/Dashboard";
import StudentCart from "../Pages/Dashboard/StudentCart";
import Notfound from "../Pages/Notfound/Notfound";
import PopularInstructors from "../Pages/Home/PopularInstructors/PopularInstructors";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
       {
        path:'/',
        element:<Home></Home>,
       },
        {
          path: 'popularinstructors',
          element:<PopularInstructors></PopularInstructors>
        },
        {
          path: 'instructors',
          element:<Instructors></Instructors>
        },
        {
         path: 'instructorInfo',
         element:<InstructorInfo></InstructorInfo>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'SignUp',
          element:<SignUp></SignUp>
        },
        {
          path:'*',
          element:<Notfound></Notfound>
         },
      ]
    },
    {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
       path: 'studentcart',
       element:<StudentCart></StudentCart>
      }
    ]
    }
  ])