import GoogleLogin from "../GoogleLogin/GoogleLogin";
import loginImage from "../../assets/login.png";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[#343952] pt-10 pb-10 pr-12"
            style={{ backgroundImage: `url(${loginImage})` }}>
            <div>
                <GoogleLogin></GoogleLogin>
            </div>
            <div className="flex justify-end">
                <div className="card max-w-sm shrink-0 shadow-2xl w-[500px] ">
                    <div className="card-body">
                        <fieldset className="fieldset ">
                            <label className="fieldset-label text-sm font-medium text-white">Email</label>
                            <input type="email" className="input text-white bg-[#3f3f3f] border-white" placeholder="Email" />
                            <label className="fieldset-label text-white text-sm font-medium">Password</label>
                            <div>
                            <input type={showPassword? 'text' : 'password'} className="relative input text-white bg-[#3f3f3f] border-white" placeholder="Password" />
                            <span className="absolute mt-2 right-12 text-white text-xl" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> :
                                    <IoEye></IoEye>
                                }
                            </span>
                            </div>
                            <div className="mt-2"><a className="link link-hover text-white text-sm font-medium ">Forgot password?</a></div>
                            <button className="btn border-0 mt-4 bg-[#b1f315] text-lg font-semibold">Login</button>
                            <Link to="/register">
                            <p className="text-white mt-3 text-lg font-normal">Don't have an account? <span className="text-[#b1f315] link-hover">Register</span></p>
                            </Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;