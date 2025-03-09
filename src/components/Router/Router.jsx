import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Rot from "../Rot/Rot";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddCraft from "../AddCraft/AddCraft";
import MyArtCraft from "../MyArtCraft/MyArtCraft";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rot></Rot>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addCraft",
          element: <PrivetRoute><AddCraft></AddCraft></PrivetRoute>
        },
        {
          path: "/myArtCraft",
          element: <PrivetRoute><MyArtCraft></MyArtCraft></PrivetRoute>,
          loader: () => fetch('http://localhost:5000/craft')
        }
      ]
    },
  ]);

  export default router;