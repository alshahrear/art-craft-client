import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Rot from "../Rot/Rot";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rot></Rot>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;