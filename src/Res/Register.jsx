import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProveider";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';




const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => console.log(err))


        console.log(name, email, password);
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <button onClick={() => googleLogin()} className=" mt-2 btn btn-primary"><FcGoogle></FcGoogle>  Login With Google</button>
                            <p className="text-base font-poppins ">Already you have an account <Link to="/login" className="text-lg font-semibold text-blue-600">Please Login</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Register;