import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log out

    const logOut = ()=>{
        return signOut(auth);

    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('suer us th corernt state chanfe', currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user, 
        createUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;
