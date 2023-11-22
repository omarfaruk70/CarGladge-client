import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Home from "./components/Home/Home";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default Routes;