import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Home from "./components/Home/Home";
import Addproduct from "./components/Addproduct/Addproduct";
import Mycart from "./components/Mycart/Mycart";
import Login from "./components/Authentications/Login";
import Register from "./components/Authentications/Register";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <Addproduct></Addproduct>
            },
            {
                path: '/mycart',
                element: <Mycart></Mycart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Routes;