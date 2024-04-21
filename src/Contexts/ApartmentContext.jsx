import PropTypes from 'prop-types'
import { children, createContext, useContext, useEffect, useState } from "react";


export const ApartmentContext = createContext(null);

export const useApartmentContext = () => useContext(ApartmentContext)

export const ApartmentProvider = ({children}) =>{
    const [apartmentsData, setApartmentsData] = useState([]);

    useEffect(()=>{
        fetch(`/apartments.json`)
        .then(res => res.json())
        .then(data => setApartmentsData(data))
        .catch(error=> console.error('error: ',error))
    }, []);
    const contextApartmentData = {
        apartmentsData,
    }
    return (
        <ApartmentContext.Provider value={contextApartmentData}>
            {children}
        </ApartmentContext.Provider>
    )
};
ApartmentProvider.propTypes = {
    children: PropTypes.node
}