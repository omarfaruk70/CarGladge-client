import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Home from "./components/Home/Home";
import Addproduct from "./components/Addproduct/Addproduct";
import Mycart from "./components/Mycart/Mycart";
import Login from "./components/Authentications/Login";
import Register from "./components/Authentications/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CategoryDetails from "./components/CategoryDetails/CategoryDetails";
import CarDetails from "./components/CarDetails/CarDetails";

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
                path: '/categories/:brand_name',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/brandproducts/${params.brand_name}`)
            },
            {
                path: '/categories/:brand_name/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/brandproducts/${params.id}`)
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><Addproduct></Addproduct></PrivateRoute>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><Mycart></Mycart></PrivateRoute>
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