import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExtraCard from "../ExtraCard/ExtraCard";
import Faq from "../Faq/Faq";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const { loading } = useContext(AuthContext); 

   
    if (loading) {
        return (
            <div className="flex justify-center items-center ">
                <span className="loading loading-spinner text-5xl text-success"></span>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>Art & Craft | Home</title>
            </Helmet>
            <Banner></Banner>
            <ExtraCard></ExtraCard>
            <Faq></Faq>
        </div>
    );
};

export default Home;
