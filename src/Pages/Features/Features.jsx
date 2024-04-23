import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Apartments from "../Apartments/Apartments";
import RealEstateAgents from "../RealEstateAgents/RealEstateAgents";
import SeniorLivingCommunities from "../SeniorLivingCommunities/SeniorLivingCommunities";
import SingleFamilyHouse from "../SingleFamilyHouse/SingleFamilyHouse";
import StudentHousing from "../StudentHousing/StudentHousing";
import Testimonials from "../Testimonials/Testimonials";
import TownHouses from "../TownHouses/TownHouses";
import VacationRentals from "../VacationRentals/VacationRentals";

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-up">
                <SingleFamilyHouse />
            </div>
            <div data-aos="fade-up">
                <TownHouses />
            </div>
            <div data-aos="fade-up">
                <Apartments />
            </div>
            <div data-aos="fade-up">
                <StudentHousing />
            </div>
            <div data-aos="fade-up">
                <SeniorLivingCommunities />
            </div>
            <div data-aos="fade-up">
                <VacationRentals />
            </div>
            <div data-aos="fade-up">
                <RealEstateAgents />
            </div>
            <div data-aos="fade-up">
                <Testimonials />
            </div>
        </div>
    );
};

export default Features;
