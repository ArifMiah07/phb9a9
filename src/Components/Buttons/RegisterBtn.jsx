import { Link } from "react-router-dom";


const RegisterBtn = () => {
    return (
        <div>
            <Link to={'/register'}>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse animate-bounce">
                    LogOut
            </button>
            </Link>
        </div>
    );
};

export default RegisterBtn;