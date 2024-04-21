import PropTypes from 'prop-types';

const RealEstateAgentsCard = ({data}) => {
    console.log(data);
    const { name, email, phone, profileLink, image, role, title } = data;

  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{role}</p>
            <p className="text-gray-700 text-base">{title}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <a
            href={profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            >
            View Profile
            </a>
        </div>
        <div className="px-6 pb-4">
            <p className="text-gray-700 text-base">
            Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="text-gray-700 text-base">Phone: {phone}</p>
        </div>
        </div>
    );
};

RealEstateAgentsCard.propTypes ={
    data: PropTypes.object

}
export default RealEstateAgentsCard;