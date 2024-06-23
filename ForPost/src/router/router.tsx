import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { MainPage } from "../MainPage";
import { Login } from "../page/Login"; 
import { Post } from "../page/Post"; 
import { Register } from "../page/Register";
import { Admin } from "../page/Admin";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "auth",
                element: <Login/>
            },
            {
                path: "admin",
                element: <Admin/>
            },
            {
                path: "post",
                element: <Post/>
            },
            {
                path: "registration",
                element: <Register/>
            },

        ]
    }
])