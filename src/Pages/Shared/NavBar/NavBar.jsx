import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    // const location = useLocation();
    

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log('error msg from:', error)
            })
    }

    return (
        <div className="navbar bg-[#D9ED92]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        {user && <li><NavLink to={`/update-profile`}>Update profile</NavLink></li>}
                        {user && <li><NavLink to={`/user-profile`}>User profile</NavLink></li>}
                        {user && <li><NavLink to={`/blog`}>Blog</NavLink></li>}
                        <li><NavLink to={`/about`}>About</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Port-Land</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={`/`}>Home</NavLink></li>
                    {user && <li><NavLink to={`/update-profile`}>Update profile</NavLink></li>}
                    {user && <li><NavLink to={`/user-profile`}>User profile</NavLink></li>}
                    {user && <li><NavLink to={`/blog`}>Blog</NavLink></li>}
                    <li><NavLink to={`/about`}>About</NavLink></li>
                </ul>
            </div>
            <div>
            </div>
            <div className="navbar-end">
                {user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user ? <img title={`${user.displayName}`} className={``} alt="User Avatar" src={user.photoURL} /> : <span>{user?.displayName}</span>}
                    </div>
                </div>}
                {user ? (
                    <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
                ) : (
                    <Link to={'/sign-in'}>
                        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse animate-bounce">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
