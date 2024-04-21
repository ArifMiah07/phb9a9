import PropTypes from 'prop-types' ;


const SHSection = ({data}) => {
    const { url, title, price, description } = data;

    return (
        <div className="flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={url} alt={title} className="w-full h-64 object-cover" />
            <div className="flex flex-col justify-between p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-lg font-medium mb-2">{price}</p>
                <p className="text-sm mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
                </div>
            </div>
        </div>
    );
};

SHSection.propTypes = {
    data: PropTypes.object
}

export default SHSection;