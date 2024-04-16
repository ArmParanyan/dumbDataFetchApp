import {createBrowserRouter, Navigate} from "react-router-dom";


import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Posts from "../pages/posts/Posts";
import Welcome from "../pages/welcome/Welcome";
import Comments from "../pages/comments/Comments";
import Images from "../pages/images/Images";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,



        children: [
            {
                path: "/home",
                element: <Navigate to="/home/posts" />,
            },
            {
                index: true,   
                path: "/home/posts",
                element: <Posts />,
            },
            {
                path: "/home/comments",
                element: <Comments />
            },
            {
                path: "/home/images",
                element: <Images />
            }
        ]
    }
    ]
)