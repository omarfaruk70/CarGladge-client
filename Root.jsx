import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import Footer from "./src/components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;