import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BrandCategories from "../BrandCategories/BrandCategories";
import Buyingsteps from "../Buyingsteps/Buyingsteps";
import SubscribeNewslater from "../SubscribeNewslater/SubscribeNewslater";

const Home = () => {
    return (
        <div>   
             <Helmet>
                <title>CarGladge | Home</title>
            </Helmet>
            <Banner></Banner>
            <BrandCategories></BrandCategories>
            <Buyingsteps></Buyingsteps>
            <SubscribeNewslater></SubscribeNewslater>
        </div>
    );
};

export default Home;