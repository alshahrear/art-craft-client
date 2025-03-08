import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <div className="bg-[#0f142b]">
            <div className="flex items-center space-x-20 w-[1200px] mx-auto py-3">
                <img className="w-24" src={logo} alt="Logo" />
                <div className="flex items-center space-x-12 text-white text-lg font-medium">
                    <Link>Home</Link>
                    <Link>All Art & craft Items</Link>
                    <Link to="/addCraft">Add Craft Item</Link>
                    <Link to="/myArtCraft">My Art & Craft List</Link>
                    {user && (
                        <div className="flex items-center space-x-8 cursor-pointer" onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
                            {showName ? <span className="text-white">{user.displayName}</span> : <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full object-cover mr-10" />}
                        </div>
                    )}

                    {
                        user ?
                            <>
                                <Link to="/">
                                    <button onClick={handleSignOut} className="btn px-6 py-2 bg-[#b1f315] border-0">Log out</button>
                                </Link>
                            </> :
                            <>
                                <Link to="/login">
                                    <button className="btn px-6 py-2 bg-[#b1f315] border-0">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn px-5 py-2 bg-[#b1f315] border-0">Register</button>
                                </Link>
                            </>
                    }


                    <input type="checkbox" value="synthwave" className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
