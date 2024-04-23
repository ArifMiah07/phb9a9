import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root/Root";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ApartmentCardDetails from "../Components/ApartmentCardDetails/ApartmentCardDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/apartments-card-details/:id',
                element: <ApartmentCardDetails></ApartmentCardDetails>,
                loader: ()=> fetch('/apartments.json')
            }
        ]
    }    
]);

export default router;