import { useApartmentContext } from "../../Contexts/ApartmentContext";


const ApartmentCardDetails = () => {

    const {apartmentsData} = useApartmentContext();
    console.log(apartmentsData[0]);
    const {id, estate_title, segment_name, description,price, status, area, location, facilities, image } = apartmentsData[0];
    return (
        <div className="w-[1170px] mx-auto flex flex-col md:flex md:flex-row lg:flex lg:flex-row ">
            <h1>this is ApartmentCardDetails</h1>
            <div className="h-screen "><img className="lg:h-screen " src={image} alt="" /></div>
            <div>
                <h1>{estate_title}</h1>
                <p>{segment_name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{status}</p>
                <p>{area}</p>
                <p>{location}</p>
                <h1>
                    {
                        facilities?.map((f, idx)=> <p key={idx}>{f}</p>)
                    }
                </h1>
            </div>
        </div>
    );
};

export default ApartmentCardDetails;