import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign in
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //log out

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('set user in the current state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
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
