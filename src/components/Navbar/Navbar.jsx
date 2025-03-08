import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="bg-[#0f142b] ">
            <div className="flex items-center w-[1200px] mx-auto space-y-5">
                <div className="mr-24 mt-3">
                    <img className="w-24" src={logo} alt="" />
                </div>
                <div className="text-white text-lg font-medium items-center space-x-12">
                    <Link>Home</Link>
                    <Link>All Art & craft Items</Link>
                    <Link to="/addCraft">Add Craft Item</Link>
                    <Link to="/myArtCraft">My Art&Craft List</Link>
                    <Link to="/login" className="">
                        <button className="btn px-6 py-2 bg-[#b1f315] border-0">Login</button>
                    </Link>
                    <Link to="/register" className="-ml-3">
                        <button className="btn px-5 py-2 bg-[#b1f315] border-0">Register</button>
                    </Link>
                    {/* dark/light */}
                    <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;