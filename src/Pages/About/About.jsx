// import NavBar from "../Shared/NavBar/NavBar";

import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Helmet>
                <title>About | Root</title>
            </Helmet>
            <h1>hir is about</h1>
        </div>
    );
};

export default About;