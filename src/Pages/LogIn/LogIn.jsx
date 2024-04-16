import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const LogIn = () => {
    const handleLogin = e =>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        console.log(email);
            }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-right">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Become a member</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form 
                        onSubmit={handleLogin}
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className=" flex flex-col gap-5 ">
                            <div className="flex px-5 pb-5 gap-2 flex-col ">
                                <button className="btn btn-outline">
                                <FcGoogle />
                                    Login with Google
                                </button>
                                <button className="btn btn-outline">
                                <FaGithub />
                                    Login with Github
                                </button>
                            </div>
                        </div>
                    <p className="text-center mb-4">Do not have a account? <Link to={'/register'}> <span className="underline font-bold px-4 py-0 bg-green-300">Register</span> </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;