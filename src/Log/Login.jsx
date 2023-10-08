import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProveider";
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err.massage))
        // console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                            <button onClick={() => googleLogin()} className=" mt-2 btn btn-primary"><FcGoogle></FcGoogle>  Login With Google</button>
                            <p className="text-base font-poppins ">Do not have an account <Link to="/register" className="text-lg font-semibold text-blue-600">Register</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Login;