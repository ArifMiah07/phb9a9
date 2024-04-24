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
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";


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
                element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/apartments-card-details/:id',
                element: <PrivateRoute><ApartmentCardDetails></ApartmentCardDetails></PrivateRoute>,
                loader: ()=> fetch('/apartments.json')
            }
        ]
    }    
]);

export default router;