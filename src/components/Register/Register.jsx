import { useState } from "react";
import registerImage from "../../assets/register.png";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[#343952] pt-10 pb-10 pr-12"
            style={{ backgroundImage: `url(${registerImage})` }}>
            <div>
                <GoogleLogin></GoogleLogin>
            </div>
            <div className="flex justify-end">
                <div className="card max-w-sm shrink-0 shadow-2xl w-[500px] ">
                    <div className="card-body">
                        <fieldset className="fieldset ">
                            <label className="fieldset-label text-sm font-medium text-white">Name</label>
                            <input type="text" className="input text-white bg-[#3f3f3f] border-white" placeholder="Your Name" />
                            <label className="fieldset-label text-sm font-medium text-white">Email</label>
                            <input type="email" className="input text-white bg-[#3f3f3f] border-white" placeholder="Email" />
                            <label className="fieldset-label text-sm font-medium text-white">PhotoURL</label>
                            <input type="text" className="input text-white bg-[#3f3f3f] border-white" placeholder="Photo URL" />
                            <label className="fieldset-label text-white text-sm font-medium">Password</label>
                            <div>
                                <input type={showPassword ? 'text' : 'password'} className="relative input text-white bg-[#3f3f3f] border-white" placeholder="Password" />
                                <span className="absolute mt-2 right-12 text-white text-xl" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> :
                                            <IoEye></IoEye>
                                    }
                                </span>
                            </div>
                            <div className="mt-2 flex">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-3 text-white text-sm font-medium">I agree to all term and privacy policy</p>
                            </div>
                            <button className="btn border-0 mt-4 bg-[#b1f315] text-lg font-semibold">Register</button>
                            <Link to="/login">
                                <p className="text-white mt-3 text-lg font-normal">Already have an account? <span className="text-[#b1f315] link-hover">Login</span></p>
                            </Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;