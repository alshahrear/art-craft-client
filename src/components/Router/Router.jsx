import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Rot from "../Rot/Rot";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
        }
      ]
    },
  ]);

  export default router;