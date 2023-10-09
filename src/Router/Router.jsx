import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Login from "../Log/Login";
import Register from "../Res/Register";
import PrivateRoute from "../Components/Private/PrivateRoute";
import Details from "../Components/Details/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/Game.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/Game.json')
            }
        ],
    },
]);

export default router;