import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
// Create a new context
export const BannerContext = createContext(null);

// Create a custom hook to use the Banner context
export const useBannerContext = () => useContext(BannerContext);

// Banner data provider component
export const BannerProvider = ({ children }) => {
    const [bannerData, setBannerData] = useState([]);

    // Fetch banner data when component mounts
    useEffect(() => {
        fetch('/banner-slide.json')
            .then(res => res.json())
            .then(data => setBannerData(data))
            .catch(error => console.error('Error fetching banner data:', error));
    }, []);
    const contextBannerData = {
        bannerData,
    }

    return (
        <BannerContext.Provider value={contextBannerData}>
            {children}
        </BannerContext.Provider>
    );
};

BannerProvider.propTypes = {
    children: PropTypes.object
}
