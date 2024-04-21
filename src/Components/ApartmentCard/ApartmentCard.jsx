import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
    const { id, estate_title, description, price, image } = apartment;

    return (
        <div className="flex flex-col justify-between border border-gray-300 rounded-md overflow-hidden">
            <div>
                <img className="w-full h-56 object-cover" src={image} alt={estate_title} />
            </div>
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{estate_title}</h1>
                <p className="text-gray-600 mb-2">{description}</p>
                <p className="text-gray-700 font-bold">${price}</p>
            </div>
            <div className="p-4 bg-gray-100">
                <Link to={`/apartments-card-details/${id}`} className="btn btn-primary w-full">
                    View Property
                </Link>
            </div>
        </div>
    );
};

ApartmentCard.propTypes = {
    apartment: PropTypes.object
};

export default ApartmentCard;
