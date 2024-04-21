import { useState } from "react";


const UpdateProfile = () => {
    // const { currentUser, updateProfile } = useAuth(); // Use Firebase Auth hook

    // const [userData, setUserData] = useState({
    //     fullName: currentUser.displayName || '',
    //     email: currentUser.email || '',
    //     password: '',
    //     confirmPassword: '',
    //     bio: '',
    //     avatar: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Update display name if changed
    //     if (userData.fullName !== currentUser.displayName) {
    //         try {
    //             await updateProfile({ displayName: userData.fullName });
    //         } catch (error) {
    //             console.error('Error updating display name:', error.message);
    //             // Handle error (e.g., display error message to user)
    //         }
    //     }

    //     // Reset form after submission
    //     setUserData({
    //         ...userData,
    //         password: '',
    //         confirmPassword: '',
    //     });
    // };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Update Profile</h1>
            {/* onSubmit={handleSubmit} */}
            <form  className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-semibold">Full Name</label>
                    {/* value={userData.fullName}
                        onChange={handleChange} */}
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        
                        className="w-full px-4 py-2 mt-1 rounded border focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                {/* Add similar input fields for email, password, confirmPassword, bio, and avatar */}
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