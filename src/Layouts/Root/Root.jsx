import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import { Helmet } from "react-helmet-async";


const Root = () => {
    return (
        <div className=" flex flex-col h-fit max-w-full mx-auto font-poppins ">
            <Helmet><title>Home | Root</title></Helmet>
            <div className=" h-fit ">
                <NavBar></NavBar>
            </div>
            <div className=" flex-grow">
                <Outlet></Outlet>     
            </div> 
            <div className=" h-fit "> 
                <Footer></Footer> 
            </div>   
        </div>
    );
};

export default Root;