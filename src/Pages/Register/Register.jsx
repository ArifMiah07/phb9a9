import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const photo = formData.get('photo');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(name, photo, email, password);
        //create user
        createUser(email, password)
        .then(result=> {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })

    }


    return (
        <div>
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
                        <input type="text" name="photo" placeholder="PhotoUrl" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name="password" placeholder="password" className="input input-bordered" required />
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