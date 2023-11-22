import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[500px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="0.7"
          d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,192C672,213,768,203,864,186.7C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="max-w-7xl mx-auto md:h-full hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <img
            src="https://i.ibb.co/LJRnyN1/banner.jpg"
            className="shadow-2xl rounded-l-full rounded-b-full"
          />
        </div>
        <div className="">
          <h1 className="text-5xl md:font-bold">
            Rev up your style and performance
            <br /> with quality cars
          </h1>
          <p className="py-6">
            Explore the road to your next adventure with confidence. Your dream
            car awaits at CARGLADGE Where Every Drive is an Experience
          </p>
          <Link to={'/login'} className="btn btn-primary">
            Get Started
            <FaLocationArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
