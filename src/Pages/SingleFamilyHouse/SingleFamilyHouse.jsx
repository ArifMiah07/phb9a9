import { useEffect } from "react";
import { useState } from "react";
import SingleFamilyHouseCard from "../../Components/SingleFamilyHouseCard/SingleFamilyHouseCard";


const SingleFamilyHouse = () => {
    const [sfhData, setSfhData] = useState([]);

    useEffect( ()=>{
        fetch(`single-family-house.json`)
        .then(res => res.json())
        .then(data =>setSfhData(data));
    }, []);
    return (
        <div className="lg:w-[1170px] mx-auto my-12 p-6 rounded-lg flex flex-col bg-red-50">
            <h1 className=" text-center text-[32px] font-semibold text-[#222] tracking-tighter ">Single Family House Properties by Area</h1>
            <p className="my-6 text-center text-[#5c727d] leading-6 ">Explore our premier single-family homes in diverse areas. From urban oases  to suburban retreats, find your perfect <br /> property with our List Category shortcode.</p>
            <div className="grid grid-cols-1 items-center mx-auto md:grid-cols-3 md:justify-evenly lg:grid-cols-4 rounded-lg lg:justify-between gap-4 bg-[#aaccee31] text-white p-6">
                {
                    sfhData.map((card)=> <SingleFamilyHouseCard key={card.id} card={card}></SingleFamilyHouseCard>)
                }
            </div>
        </div>
    );
};

export default SingleFamilyHouse;