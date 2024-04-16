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
        path: "/welcome",
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
        path: "/",
        element: <Home />,



        children: [
            {
                path: "/",
                element: <Navigate to="/posts" />,
            },
            {
                index: true,   
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/comments",
                element: <Comments />
            },
            {
                path: "/images",
                element: <Images />
            }
        ]
    }
    ]
)