import PropTypes from 'prop-types';
import { FcRating } from "react-icons/fc";

const TestimonialsCard = ({t}) => {
    const { id, image, name, role, testimonial } = t;

    return (
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden m-4">
            <div className="flex items-center gap-6 p-4">
                <div className='w-[50px] h-[50px] rounded-e-full '>
                    <img className='w-[50px] h-[50px] rounded-e-full ' src={image} alt="" />
                </div>
                <div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                </div>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-600">{role}</p>
                <p className="text-base text-gray-700">{testimonial}</p>
            </div>
            <div className="flex p-4">
                <p className="flex text-lg text-gray-500"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
            </div>
        </div>
    );
};

TestimonialsCard.propTypes = {
    t: PropTypes.object
}

export default TestimonialsCard;