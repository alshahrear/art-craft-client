import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Rot from "../Rot/Rot";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rot></Rot>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;