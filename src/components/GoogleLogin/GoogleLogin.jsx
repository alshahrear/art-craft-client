import { IoLogoGoogle } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";



const GoogleLogin = () => {

    const location = useLocation();
    const isRegister = location.pathname === "/register";

    return (
        <div className="flex justify-end ">
            <div className="text-center text-white pr-10 space-y-3">
                <div className="">
                    <h3 className="text-3xl font-semibold mb-2">
                        {
                            isRegister ? "Register Now" : "Login Now"
                        }
                    </h3>
                    <p className="font-medium ">Choose on following
                        <span> {isRegister ? "register" : "login"} </span> method</p>
                </div>
                <div className="flex justify-end space-x-3 mb-5">
                    <button className="btn text-white border-0 items-center bg-[#ea4335]">
                        <span><IoLogoGoogle></IoLogoGoogle></span> Google</button>
                    <button className="btn text-white border-0 bg-[#2b57b4]"> <span><RiTwitterXLine></RiTwitterXLine></span> Twitter</button>
                    <button className="btn text-white border-0 bg-[#139af0]"> <span><RiFacebookCircleFill></RiFacebookCircleFill></span>Facebook</button>
                </div>
                <div className="border-white border-t pt-5">
                    <p className="font-medium">Or <span>{isRegister ? "register" : "login"} </span> in using your email address</p>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;