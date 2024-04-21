import { useLoaderData, useParams } from "react-router-dom";
import ApartmentCDPost from "../ApartmentCDPost/ApartmentCDPost";

const ApartmentCardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const intId = parseInt(id);
    
    const cdData =  data.find(cd => cd.id === intId);

    return (
        <div className="lg:w-[1170px] p-6 mx-auto my-12 h-fit">
            <ApartmentCDPost key={cdData.id} cdData={cdData}></ApartmentCDPost>
        </div>
    );
};

export default ApartmentCardDetails;
