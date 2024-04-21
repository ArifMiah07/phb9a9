import RealEstateAgentsCard from "../../Components/RealEstateAgentsCard/RealEstateAgentsCard";
import { useBannerContext } from "../../Contexts/BannerContext";


const RealEstateAgents = () => {


    const {realEstateAgents} = useBannerContext();
    console.log(realEstateAgents);
    return (
        <div className="lg:w-[1170px] p-6 mx-auto my-12">
            <div>
                <h1  className="text-center text-3xl tracking-wider text-[#222222] font-medium">Real Estate Agents</h1>
                <p className="text-[#5C727D] my-6 text-center leading-6 ">With the “list agents shortcode” you can show your agents in any page, alognside with their contact details and link to their agent profile.</p>
            </div>
            <div  className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    realEstateAgents.map((data)=> <RealEstateAgentsCard key={data.id} data={data}></RealEstateAgentsCard>)
                }
            </div>
        </div>
    );
};

export default RealEstateAgents;