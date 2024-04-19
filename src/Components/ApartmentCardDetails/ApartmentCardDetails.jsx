import { useLoaderData, useParams } from "react-router-dom";
import ApartmentCDPost from "../ApartmentCDPost/ApartmentCDPost";

const ApartmentCardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const intId = parseInt(id);
    
    // Use the find method to find the apartment by ID
    const cdData =  data.find(cd => cd.id === intId);

    // if (!apartment) {
    //     return <div>No apartment found with ID {id}</div>;
    // }

    // const { estate_title, segment_name, description, price, status, area, location, facilities, image } = apartment;

    return (
        <div className="lg:w-[1170px] mx-auto my-12 h-screen">
            <ApartmentCDPost key={cdData.id} cdData={cdData}></ApartmentCDPost>
        </div>
    );
};

export default ApartmentCardDetails;
