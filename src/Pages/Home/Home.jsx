// import NavBar from "../Shared/NavBar/NavBar";

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

// import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className="h-ful ">
        <Helmet>
            <title>Portfolio | Home</title>
        </Helmet>
            <div>
            <Banner></Banner>
            </div>
            <div>
                <Features></Features>
            </div>

        </div>
    );
};

export default Home;