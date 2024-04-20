import { Helmet } from "react-helmet-async";


const ApartmentCDPost = ({cdData}) => {
    console.log(cdData)
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = cdData;
    return (
        <div>
            <Helmet>
                <title>Apartment Card Details Post </title>
            </Helmet>
            f{price}
            <img className="w-2/6" src={image} alt="" />
        </div>
    );
};

export default ApartmentCDPost;