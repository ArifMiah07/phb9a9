import Apartments from "../Apartments/Apartments";
import SeniorLivingCommunities from "../SeniorLivingCommunities/SeniorLivingCommunities";
import SingleFamilyHouse from "../SingleFamilyHouse/SingleFamilyHouse";
import StudentHousing from "../StudentHousing/StudentHousing";
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
        </div>
    );
};

export default Features;