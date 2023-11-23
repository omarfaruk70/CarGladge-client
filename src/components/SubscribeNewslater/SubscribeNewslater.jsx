import { Link } from "react-router-dom";

const SubscribeNewslater = () => {
  return (
    <div>
      <div>
        <h2 className="text-center footer-title text-2xl">
          Connect with us to know the featured offer
        </h2>
        <div className="hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,69.3C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        </div>
          <form>
          <fieldset className="form-control w-80 mx-auto mt-5 md:-mt-20 lg:mb-12 my-20">
            <label className="label">
              <span className="label-text italic text-lg font-semibold">Provide your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Youremail@site.com"
                className="input input-bordered join-item"
              />
              <Link className="btn btn-primary join-item">Subscribe</Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SubscribeNewslater;
