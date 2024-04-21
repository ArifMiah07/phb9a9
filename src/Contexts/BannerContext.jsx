import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
// Create a new context
export const BannerContext = createContext(null);

// Create a custom hook 
export const useBannerContext = () => useContext(BannerContext);

// Json data provider component
export const BannerProvider = ({ children }) => {
    const [bannerData, setBannerData] = useState([]);
    const [vacationData, setVacationData] = useState([]);
    const [realEstateAgents, setRealEstateAgents] = useState([]);
    const [testimonials, setTestimonials] = useState([]);


    // Fetch json data 
    useEffect(() => {
        fetch('/banner-slide.json')
            .then(res => res.json())
            .then(data => setBannerData(data))
            .catch(error => console.error('Error fetching banner data:', error));
    }, []);

    useEffect(()=>{
        fetch('/vacation-rentals.json')
        .then(res=> res.json())
        .then(data=> setVacationData(data))
        .catch(error => console.error('Error fetching vacation data:', error));
    }, []);


    useEffect(()=> {
        fetch('/real-estate-agents.json')
        .then(res=> res.json())
        .then(data => setRealEstateAgents(data))
        .catch(error => console.error(error));
    }, []);

    useEffect( ()=> {
        fetch('/testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data));
    }, [])

    const contextBannerData = {
        bannerData,
        vacationData,
        realEstateAgents,
        testimonials,
    }

    return (
        <BannerContext.Provider value={contextBannerData}>
            {children}
        </BannerContext.Provider>
    );
};

BannerProvider.propTypes = {
    children: PropTypes.node
}
