import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from "./Home";
import FoodDetail from "./FoodDetail";
import Guides from "./Guides";
import StartingSolid from "./Guides/StartingSolid";
import Snacks from "./Guides/Snacks";
function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/FoodDetail",
            element: <FoodDetail />
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

    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Router;
