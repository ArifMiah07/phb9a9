import { createBrowserRouter } from "react-router-dom";
// import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root/Root";
import About from "../Pages/About/About";
import More from "../Pages/More/More";
import ImgDetails from "../Components/ImgDetails/ImgDetails";
// import Banner from "../Pages/Banner/Banner";
// import Home from "../Pages/Home/Home";
// import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/more',
                element: <More></More>
            },
        ]
    }    
]);

export default router;