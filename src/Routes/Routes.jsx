import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root/Root";
// import Error from "../Pages/Error/Error";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ApartmentCardDetails from "../Components/ApartmentCardDetails/ApartmentCardDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        
        children: [
            {
                path: '/',
                element: <Home></Home>
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
            {
                path: '/apartments-card-details/:id',
                element: <ApartmentCardDetails></ApartmentCardDetails>
            }
        ]
    }    
]);

export default router;