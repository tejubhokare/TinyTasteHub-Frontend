import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from "./Home";;
function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        },

    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Router;
