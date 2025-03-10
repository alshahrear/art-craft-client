import { useContext, useState } from "react";
import registerImage from "../../assets/register.png";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get("email");
        const photoUrl = form.get("photoUrl");
        const password = form.get("password");

        console.log(name, email, photoUrl, password);

        // Password Validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase and one lowercase letter!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success',
                    text: 'User created successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                // update profile
                // updateProfile(result.user, {
                //     displayName: name,
                //     photoURL: "https://example.com/jane-q-user/profile.jpg"
                // })
                // .then( () => console.log('Profile Updated'))
                // .catch()

                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
                toast.error("Registration Failed! Please try again.", {
                    position: "top-right",
                    autoClose: 2000,
                });
            });
    }

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[#343952] pt-10 pb-10 pr-12"
            style={{ backgroundImage: `url(${registerImage})` }}>
            <Helmet >
                <title>Register</title>
            </Helmet>
            <div>
                <GoogleLogin></GoogleLogin>
            </div>
            <div className="flex justify-end">
                <div className="card max-w-sm shrink-0 shadow-2xl w-[500px] ">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset ">
                            <label className="fieldset-label text-sm font-medium text-white">Name</label>
                            <input type="text" name="name" className="input text-white bg-[#3f3f3f] border-white" placeholder="Your Name" required />
                            <label className="fieldset-label text-sm font-medium text-white">Email</label>
                            <input type="email" name="email" className="input text-white bg-[#3f3f3f] border-white" placeholder="Email" required />
                            <label className="fieldset-label text-sm font-medium text-white">PhotoURL</label>
                            <input type="text" name="photoUrl" className="input text-white bg-[#3f3f3f] border-white" placeholder="Photo URL" />
                            <label className="fieldset-label text-white text-sm font-medium">Password</label>
                            <div>
                                <input type={showPassword ? 'text' : 'password'} name="password" className="relative input text-white bg-[#3f3f3f] border-white" placeholder="Password" required />
                                <span className="absolute mt-2 right-12 text-white text-xl" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> :
                                            <IoEye></IoEye>
                                    }
                                </span>
                            </div>
                            <div className="mt-2 flex">
                                <input type="checkbox" name="" id="" required />
                                <p className="ml-3 text-white text-sm font-medium" >I agree to all term and privacy policy</p>
                            </div>
                            <button type="submit" className="btn border-0 mt-4 bg-[#b1f315] hover:bg-[#c5ff33] text-lg font-semibold">Register</button>
                            <Link to="/login">
                                <p className="text-white mt-3 text-lg font-normal">Already have an account? <span className="text-[#b1f315] link-hover">Login</span></p>
                            </Link>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;