import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import WebLayout from "../layouts/Web"

const routes = createBrowserRouter([
    {
        path : "/",
        element : <WebLayout/>,
        children : [
            {
                index :true,
                element: <Home/>
            }
        ]
    }
])


export default routes