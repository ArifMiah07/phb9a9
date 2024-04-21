// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext'; // Import your Firebase authentication context

const UserProfile = () => {
    // const { currentUser } = useAuth(); // Use Firebase Auth hook
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     if (currentUser) {
    //         // Set user data when component mounts
    //         setUserData({
    //             displayName: currentUser.displayName || '',
    //             email: currentUser.email || '',
    //             photoURL: currentUser.photoURL || '',
    //         });
    //     }
    // }, [currentUser]);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">User Profile</h1>
            {userData ? (
                <div className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="displayName" className="block text-sm font-semibold">Display Name</label>
                        <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={userData.displayName}
                            readOnly
                            className="w-full px-4 py-2 mt-1 rounded border bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            readOnly
                            className="w-full px-4 py-2 mt-1 rounded border bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-semibold">Profile Picture</label>
                        <img
                            src={userData.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                    </div>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
};

export default UserProfile;
