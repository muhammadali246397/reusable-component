
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import About from "../pages/About";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]

    }
])