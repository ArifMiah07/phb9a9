import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import { useApartmentContext } from "../../Contexts/ApartmentContext";

const Apartments = () => {

    const {apartmentsData} = useApartmentContext();
    console.log(apartmentsData);

    return (
        <div className="max-w-[1170px] mx-auto my-12">
            <h1  className="text-center text-3xl tracking-wider text-[#222222] font-medium">Apartments Latest Properties</h1>
            <p className="text-[#5C727D] my-6 text-center leading-6 ">These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            
            <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    apartmentsData.map((apartment)=> <ApartmentCard key={apartment.id} apartment={apartment}></ApartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartments;