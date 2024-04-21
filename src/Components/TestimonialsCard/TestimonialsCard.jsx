

const TestimonialsCard = ({testimonial}) => {
    const { id, name, role, testimonialText } = testimonial;

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

export default TestimonialsCard;