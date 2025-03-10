import { Link, NavLink } from "react-router-dom";
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
            <div className="flex items-center space-x-10 w-[1200px] mx-auto py-3">
                <img className="w-24" src={logo} alt="Logo" />
                <div className="flex items-center space-x-11 text-lg font-medium">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 ${isActive ? 'text-[#b1f315]' : 'text-white'} hover:text-[#48be96]`
                        }
                    >
                        Home
                    </NavLink>

                    <Link className="px-3 py-2 text-white hover:text-[#48be96]">
                        All Art & craft Items
                    </Link>

                    <NavLink
                        to="/addCraft"
                        className={({ isActive }) =>
                            `px-3 py-2 ${isActive ? 'text-[#b1f315]' : 'text-white'} hover:text-[#48be96]`
                        }
                    >
                        Add Craft Item
                    </NavLink>

                    <NavLink
                        to="/myArtCraft"
                        className={({ isActive }) =>
                            `px-3 py-2 ${isActive ? 'text-[#b1f315]' : 'text-white'} hover:text-[#48be96]`
                        }
                    >
                        My Art & Craft List
                    </NavLink>

                    {user && (
                        <div
                            className="flex items-center space-x-3 cursor-pointer"
                            onMouseEnter={() => setShowName(true)}
                            onMouseLeave={() => setShowName(false)}
                        >
                            {showName ? (
                                <span className="text-white">{user.displayName}</span>
                            ) : (
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover mr-8"
                                />
                            )}
                        </div>
                    )}

                    {
                        user ? (
                            <NavLink to="/">
                                <button
                                    onClick={handleSignOut}
                                    className="btn px-4 py-2 bg-[#b1f315] border-0"
                                >
                                    Log out
                                </button>
                            </NavLink>
                        ) : (
                            <>
                                <NavLink to="/login">
                                    <button className="btn px-4 py-2 bg-[#b1f315] hover:bg-[#c5ff33] border-0">Login</button>
                                </NavLink>
                                <NavLink to="/register">
                                    <button className="btn px-4 py-2 bg-[#b1f315] hover:bg-[#c5ff33] border-0">Register</button>
                                </NavLink>
                            </>
                        )
                    }

                    <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
