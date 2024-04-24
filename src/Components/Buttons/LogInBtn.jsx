import { Link } from "react-router-dom";


const LogInBtn = () => {
    return (
        <div>
            <Link to={'/sign-in'}>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse">
                    LogIn
            </button>
            </Link>
        </div>
    );
};

export default LogInBtn;