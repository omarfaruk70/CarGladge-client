import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({ images }) => {
  const sliderSettings = {
    dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
  };

  return (
    <div className="container  mx-auto">
      <Slider {...sliderSettings}>
        {images?.map((image, index) => (
          <div key={index}>
            <img className="h-[450px] rounded-lg w-full" src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
Sliders.propTypes = {
    images: PropTypes.array.isRequired
}