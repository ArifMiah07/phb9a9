// import NavBar from "../Shared/NavBar/NavBar";

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";



const Home = () => {
    return (
        <div className="h-full ">
            <Helmet>
                <title>Port-Land | Home</title>
            </Helmet>
            <div className="w-full mx-auto">
            <Banner></Banner>
            </div>
            <div>
                <Features></Features>
            </div>

        </div>
    );
};

export default Home;