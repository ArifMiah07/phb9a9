

const TownHouseCard = ({card}) => {
    return (
        <div>
            <h1>this is card</h1>
            <div>
                <div>
                    <img src={card.imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TownHouseCard;