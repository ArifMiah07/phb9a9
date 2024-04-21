import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ApartmentCDPost = ({ cdData }) => {
    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image
    } = cdData;

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-gray-300 rounded-md shadow-md">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <img src={image} alt={estate_title} className="w-full h-auto rounded-md" />
            </div>
            <div className="md:w-1/2 md:pl-8">
                <h1 className="text-2xl font-semibold mb-4">{estate_title}</h1>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex flex-wrap mb-4">
                    <p className="mr-4"><strong>Price:</strong> {price}</p>
                    <p className="mr-4"><strong>Status:</strong> {status}</p>
                    <p className="mr-4"><strong>Area:</strong> {area}</p>
                    <p className="mr-4"><strong>Segment Name:</strong> {segment_name}</p>
                    <p className="mr-4"><strong>Location:</strong> {location}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Facilities:</h2>
                    <ul className="list-disc pl-6">
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>
                <Link to="/" className="mt-4 text-blue-600 hover:text-blue-800">
                    &larr; Back to Listings
                </Link>
            </div>
        </div>
    );
};

ApartmentCDPost.propTypes = {
    cdData: PropTypes.object
};

export default ApartmentCDPost;
