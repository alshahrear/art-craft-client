import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Rot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Rot;