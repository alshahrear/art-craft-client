import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import error404 from "../../assets/error-404.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="flex items-center h-full p-8 bg-[#3e4359] text-white">
                <div>
                    <img className="w-3xl" src={error404} alt="" />
                </div>
                <div className="container flex flex-col  items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link>
                            <button className="btn border-0 px-8 py-3 font-bold rounded bg-[#b1f315] text-gray-800">
                                Back to homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;