import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, updateProfile, GithubAuthProvider  } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //update profile
    const updateUserProfile = async ({ displayName, photoUrl, email, password }) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, { displayName, photoURL: photoUrl });
            setUser(auth.currentUser);
            setLoading(false);
            toast.success('Profile updated successfully!!');
            console.log("Profile updated successfully!");
        } catch (error) {
            toast.error("Error updating profile:", error);
            console.error("Error updating profile:", error);
            throw error;
        }
    };

    //github login
    const signInWithGithub = () =>{
        setLoading(true);
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        });
    }

    // Google login
    const signInWithGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const createUser = (email, password, displayName, photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                return updateProfile(result.user, {
                    displayName: displayName,
                    photoURL: photoUrl
                }).then(() => result.user);
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    };
    
    // Sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('set user in the current state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle, 
        signInWithGithub,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
