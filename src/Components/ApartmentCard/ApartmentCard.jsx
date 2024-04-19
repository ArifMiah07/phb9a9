import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ApartmentCard = ({apartment}) => {
        const {id, estate_title, description,price, image }  =  apartment

    return (
        <div className="flex flex-col justify-between">
            <h1>rgus us aoareh card</h1>
            <div>
                <img className="bg-cover bg-center " src={image} alt="" />
            </div>
            <div>
                <h1>{estate_title}</h1>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <div>
                <Link to={`/apartments-card-details/${id}`}><button className="btn btn-primary">View Property</button></Link>
            </div>
        </div>
    );
};

ApartmentCard.propTypes  = {
    apartment: PropTypes.object
}
export default ApartmentCard;