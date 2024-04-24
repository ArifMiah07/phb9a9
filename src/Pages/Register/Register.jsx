import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; 
const Register = () => {
    const { createUser, user } = useContext(AuthContext);
    // const [errorMsg, setErrorMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const displayName = formData.get('name');
        const photoUrl = formData.get('photoUrl');
        const email = formData.get('email');
        const password = formData.get('password');

        // Validate password
        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            toast.error('Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.');
            return;
        }
        // Create user
        try {
            await createUser(email, password, displayName, photoUrl);
            toast.success('Registration successful!'); // Show success toast
        } catch (error) {
            console.error(error);
            // setErrorMsg(error.code);
            toast.error('Registration failed. Please try again.'); // Show error toast
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); // Toggle password visibility state
    };

    if (user) {
        return <Link to={'/'}></Link>
    }


    return (
        <div>
             <ToastContainer />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">To create an account</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form 
                        onSubmit={handleRegister}
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"} // Toggle password 
                                name="password"
                                placeholder="password"
                                className="input input-bordered w-full"
                                required
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />} {/* Toggle icons*/}
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-4">Already have an account? <Link to={'/sign-in'}> <span className="underline font-bold px-4 py-0 bg-green-300">Log In</span> </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;