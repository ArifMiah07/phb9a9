

const ApartmentCard = ({apartment}) => {
        const {id, estate_title, segment_name, description,price, status, area, location, facilities, image }  =  apartment

    return (
        <div className="">
            <h1>rgus us aoareh card {apartment.length}</h1>
            <div>
                <img className="bg-cover h-1/2" src={image} alt="" />
            </div>
            <div>
                <h1>{estate_title}</h1>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ApartmentCard;