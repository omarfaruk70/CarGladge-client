import { Helmet } from "react-helmet-async";

const Errorpage = () => {
    return (
        <div>
            <Helmet>
                <title>CarGladge | Error</title>
            </Helmet>
             <div className="max-w-7xl h-[600px] text-center mx-auto flex flex-col justify-center items-center ">
            <h1 className="text-5xl">Page not found | 404 </h1>
            <h3 className="text-5xl mt-5"> ≡(▔﹏▔)≡</h3>
            </div>
        </div>
    );
};

export default Errorpage;