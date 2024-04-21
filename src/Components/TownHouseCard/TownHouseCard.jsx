import PropTypes from 'prop-types'

const TownHouseCard = ({card}) => {
    return (
        <>
             <div className="relative">
            <img src={card.imgUrl} alt="" className="w-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{card.Category}</h1>
                <p className="text-sm md:text-base lg:text-lg">{card.listing} listing</p>
            </div>
        </div>
        </>
    );
};

TownHouseCard.propTypes ={
    card: PropTypes.object
}

export default TownHouseCard;