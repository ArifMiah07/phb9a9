import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root/Root";
import ImgDetails from "../Components/ImgDetails/ImgDetails";
import Error from "../Pages/Error/Error";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // children:[
                //     {
                //         path: '/bannerDetails/:id',
                //         element: <ImgDetails></ImgDetails> ,
                //         // loader: ()=> fetch(`banner.json`)
                //     }
                // ]
            },
            {
                path: '/bannerDetails/:id',
                element: <ImgDetails></ImgDetails> ,
                // loader: ()=> fetch(`banner.json`)
            },
            {
                path: '/sign-in',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/user-profile',
                element: <UserProfile></UserProfile>
            },
        ]
    }    
]);

export default router;