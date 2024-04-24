import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {


    const {user, updateUserProfile} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user.displayName || "");
    const [photoUrl, setPhotoUrl] = useState(user.photoURL || "");
    const [email, setEmail] = useState(user.email || "");
    const [password, setPassword] = useState("");
    // const [updateProfile, setUpdateProfile] = useState('')

    const handleUpdateProfile = e =>{
        e.preventDefault();
        updateUserProfile({ displayName, photoUrl, email, password })
            .then(() => {
                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                toast.error("Error updating profile:", error);
            });
        
        // const formData = new FormData(e.target);
        // const email = formData.get('email');
        // const photoUrl = formData.get('photoUrl');
        // const displayName = formData.get('displayName');
        // const password = formData.get('password');
        console.log(displayName, photoUrl, email, password);
    }
    

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <ToastContainer />
        <h1 className="text-2xl font-bold my-4">Update Profile</h1>
        <form onSubmit={handleUpdateProfile} className="max-w-lg mx-auto">
            <div className="mb-4">
                <label htmlFor="displayName" className="block text-sm font-semibold">Full Name</label>
                <input
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full px-4 py-2 mt-1 rounded border focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="photoUrl" className="block text-sm font-semibold">PhotoUrl</label>
                <input
                    type="text"
                    id="photoUrl"
                    name="photoUrl"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="w-full px-4 py-2 mt-1 rounded border focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mt-1 rounded border focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-1 rounded border focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Update Profile
                </button>
            </div>
        </form>
    </div>
    );
};

export default UpdateProfile;