import PropTypes from 'prop-types';
const ShowallCategories = ({category}) => {
    return (
        <div className="card mx-5 md:mx-auto  card-compact md:w-96 bg-base-100 shadow-xl cursor-pointer">
        <figure><img src={category.image_url} className='h-80' alt="Shoes"/></figure>
        <div className='btn'>
        <p className='text-center font-extrabold'>{category.brand_name}</p>
        </div>
        </div>
    );
};

export default ShowallCategories;
ShowallCategories.propTypes = {
    category : PropTypes.object
}