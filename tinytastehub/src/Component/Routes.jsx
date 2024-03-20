import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from "./Home";
import FoodDetail from "./FoodDetail/FoodDetail";
import Guides from "./Guides";
import StartingSolid from "./Guides/StartingSolid";
import Snacks from "./Guides/Snacks";
import LoginUser from "./Login";
import Register from "./Signup";
import Sauces from "./Guides/Sauces";
import Cabbage from "./FoodDetail/Cabbage";
function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/login",
            element: <LoginUser />
        },
        {
            path: "/register",
            element: <Register />
        },

        {
            path: "/FoodDetail",
            element: <FoodDetail />
        },
        {
            path: "/Cabbage",
            element: <Cabbage />
        },
        {
            path: "/guides",
            element: <Guides />
        },
        {
            path: "/StartingSolid",
            element: <StartingSolid />
        },
        {
            path: "/SnacksGuide",
            element: <Snacks />
        },
        {
            path: "/SaucesGuide",
            element: <Sauces />
        },

    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Router;
