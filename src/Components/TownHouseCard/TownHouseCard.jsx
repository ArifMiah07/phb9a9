import PropTypes from 'prop-types'

const TownHouseCard = ({card}) => {
    return (
        <>
            <div>
                <img src={card.imgUrl} className='relative' alt="" />
                <h1 className='absolute top-10 text-[222px] text-white'>{card.category}</h1>
                <p>{card.listing} listing</p>
            </div>
        </>
    );
};

TownHouseCard.propTypes ={
    card: PropTypes.object
}

export default TownHouseCard;