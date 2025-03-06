import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="bg-[#0f142b] ">
            <div className="flex items-center w-[1200px] mx-auto space-y-5">
            <div className="mr-32 mt-3">
                <img className="w-24" src={logo} alt="" />
            </div>
            <div className="text-white text-lg font-medium items-center space-x-20">
                <Link>Home</Link>
                <Link>All Art & craft Items</Link>
                <Link>Add Craft Item</Link>
                <Link>My Art&Craft List</Link>
                <Link className="ml-16">
                <button className="btn px-8 py-4 bg-[#b1f315] border-0">Login</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;