import RealEstateAgentsCard from "../../Components/RealEstateAgentsCard/RealEstateAgentsCard";
import { useBannerContext } from "../../Contexts/BannerContext";


const RealEstateAgents = () => {


    const {realEstateAgents} = useBannerContext();
    console.log(realEstateAgents);
    return (
        <div  className="lg:w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                realEstateAgents.map((data)=> <RealEstateAgentsCard key={data.id} data={data}></RealEstateAgentsCard>)
            }
        </div>
    );
};

export default RealEstateAgents;