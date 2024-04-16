// import NavBar from "../Shared/NavBar/NavBar";

import { Helmet } from "react-helmet-async";


const More = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Helmet>
                <title>More | Root</title>
            </Helmet>
            <h1>This is more</h1>
        </div>
    );
};

export default More;