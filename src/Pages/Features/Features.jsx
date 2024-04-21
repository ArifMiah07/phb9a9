import Apartments from "../Apartments/Apartments";
import RealEstateAgents from "../RealEstateAgents/RealEstateAgents";
import SeniorLivingCommunities from "../SeniorLivingCommunities/SeniorLivingCommunities";
import SingleFamilyHouse from "../SingleFamilyHouse/SingleFamilyHouse";
import StudentHousing from "../StudentHousing/StudentHousing";
import Testimonials from "../Testimonials/Testimonials";
import TownHouses from "../TownHouses/TownHouses";
import VacationRentals from "../VacationRentals/VacationRentals";


const Features = () => {
    return (
        <div>
            <h1>this is features section</h1>
            <SingleFamilyHouse></SingleFamilyHouse>
            <TownHouses></TownHouses>
            <Apartments></Apartments>
            <StudentHousing></StudentHousing>
            <SeniorLivingCommunities></SeniorLivingCommunities>
            <VacationRentals></VacationRentals>
            <RealEstateAgents></RealEstateAgents>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Features;