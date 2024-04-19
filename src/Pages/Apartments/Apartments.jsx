// import { useEffect } from "react";
// import { useState } from "react";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import { useApartmentContext } from "../../Contexts/ApartmentContext";

const Apartments = () => {
    // const [apartments, setApartments] = useState([]);

    const {apartmentsData} = useApartmentContext();
    console.log(apartmentsData);

    // useEffect(() => {
    //     fetch('apartments.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setApartments(data); // Update state with fetched data
    //         })
    //         .catch(error => console.error('Error fetching apartments:', error));
    // }, []);

    return (
        <div className="max-w-[1170px] mx-auto border border-red-400">
            <h1>Apartments Latest Properties</h1>
            <p>These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    apartmentsData.map((apartment)=> <ApartmentCard key={apartment.id} apartment={apartment}></ApartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartments;