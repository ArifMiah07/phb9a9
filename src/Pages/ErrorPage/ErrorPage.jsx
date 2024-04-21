import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" border border-red-500 flex flex-col w-full h-screen items-center mx-auto justify-center">
            <h1 className="text-red-700 text-6xl font-bold p-4 m-5">Oops!</h1>
            <p className="text-purple-400 font-semibold text-2xl mb-4">page not found</p>
            <p className="btn bg-blue-200 text-black font-bold text-xl rounded-full"><Link to={`/`}>Back to Home</Link></p>
        </div>
    );
};

export default ErrorPage;