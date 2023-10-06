import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/abou",
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ],
    },
]);

export default router;