import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ShowallCategories = ({category}) => {
    const { brand_name, image_url } = category;
    return (
        <Link to={`/categories/${brand_name}`}>
        <div className="card mx-5 md:mx-auto  card-compact md:w-96 bg-base-100 shadow-xl cursor-pointer">
        <figure><img src={image_url} className='h-80' alt="Shoes"/></figure>
        <div className='btn'>
        <p className='text-center font-extrabold'>{brand_name}</p>
        </div>
        </div>
        </Link>
    );
};

export default ShowallCategories;
ShowallCategories.propTypes = {
    category : PropTypes.object
}