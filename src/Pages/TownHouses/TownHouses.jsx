import TownHouseCard from "../../Components/TownHouseCard/TownHouseCard";
import { useBannerContext } from "../../Contexts/BannerContext";


const TownHouses = () => {
    const {tHouseData} = useBannerContext();
    
    console.log(tHouseData);
    
    return (
        <div className="lg:w-[1170px] p-6 mx-auto my-12 ">
            <h1  className="text-center text-3xl tracking-wider text-[#222222] font-medium">Town Houses by Category</h1>
            <p  className="text-[#5C727D] my-6 text-center leading-6 ">Highlight the best of your properties by using the List Category shortcode. <br /> You can list specific properties categories, types, cities, areas.</p>
            <div className="grid gap-2 grid-cols-1 lg:grid lg:grid-cols-3">
                {
                    tHouseData.map((card)=> <TownHouseCard key={card.id} card={card}></TownHouseCard>)
                }
            </div>    
        </div>
    );
};

export default TownHouses;