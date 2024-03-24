import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Notfound from "../Pages/Notfound/Notfound";
import PopularInstructors from "../Pages/Home/PopularInstructors/PopularInstructors";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorsClass from "../Pages/InstructorsClass/InstructorsClass";
import StudentCart from "../Pages/Dashboard/StudentCart";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";





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
         path: 'instructorsclass',
         element:<InstructorsClass></InstructorsClass>
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: 'studentcart',
       element:<StudentCart></StudentCart>
      },
      {
        path: 'allusers',
       element:<Allusers></Allusers>,
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path: 'additem',
        element:<AddItem></AddItem>
      },
      {
        path: 'manageItems',
      element: <ManageItems></ManageItems>
      }
    ]
    }
  ])