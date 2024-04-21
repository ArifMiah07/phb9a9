import PropTypes from 'prop-types';

const TestimonialsCard = ({t}) => {
    const { id, name, role, testimonialText } = t;

    return (
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden m-4">
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600">{role}</p>
            </div>
            <div className="p-4">
                <p className="text-base text-gray-700">{testimonialText}</p>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-500">ID: {id}</p>
            </div>
        </div>
    );
};

TestimonialsCard.propTypes = {
    t: PropTypes.object
}

export default TestimonialsCard;