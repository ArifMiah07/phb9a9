import { useEffect } from "react";
import { useState } from "react";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";

const Apartments = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('apartmants.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApartments(data); // Update state with fetched data
            })
            .catch(error => console.error('Error fetching apartments:', error));
    }, []);

    return (
        <div className="max-w-[1170px] mx-auto border border-red-400">
            <h1>Apartments Latest Properties</h1>
            <p>These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    apartments.map((apartment)=> <ApartmentCard key={apartment.id} apartment={apartment}></ApartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartments;