import { useState } from "react";
import TownHouseCard from "../../Components/TownHouseCard/TownHouseCard";


const TownHouses = () => {

    const [tHouseData, setTHouseData] = useState([]);


    fetch(`town-house.json`)
    .then(res => res.json())
    .then(data => setTHouseData(data));
    return (
        <div className="p-5">
            <h1>Town Houses by Category</h1>
            <p>Highlight the best of your properties by using the List Category shortcode. <br /> You can list specific properties categories, types, cities, areas.</p>
            <div className="grid gap-2 grid-cols-1 lg:grid lg:grid-cols-3">
                {
                    tHouseData.map((card)=> <TownHouseCard key={card.id} card={card}></TownHouseCard>)
                }
            </div>    
        </div>
    );
};

export default TownHouses;