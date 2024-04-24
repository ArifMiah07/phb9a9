
// import { useAuth } from '../contexts/AuthContext'; // Import your Firebase authentication context

import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="flex justify-evenly m-4 p-3">
            <h1 className="text-2xl font-bold my-4">User Profile</h1>
            <Link to={'/update-profile'}><button className="btn py-3 px-5 btn-outline ">Edit</button></Link>
            </div>
            {user ? (
                <div className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-semibold">Profile Picture</label>
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="displayName" className="block text-sm font-semibold">Display Name</label>
                        <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={user.displayName}
                            readOnly
                            className="w-full px-4 py-2 mt-1 rounded border bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block text-sm font-semibold">Photo Url</label>
                        <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            value={user.photoURL}
                            readOnly
                            className="overflow-x-scroll w-full px-4 py-2 mt-1 rounded border bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            readOnly
                            className="w-full px-4 py-2 mt-1 rounded border bg-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
