import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProveider";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
const Login = () => {
    const location = useLocation()
    console.log(location)
    const { signIn, googleLogin } = useContext(AuthContext)
    const naviget = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Login successful',
                    'success'
                )
                if (location.state) {
                    naviget(location.state)
                    return;
                }
                naviget('/')
            })
            .catch(() => {
                Swal.fire(
                    'bad job',
                    'Please try again',
                    'error'
                )
            })
        // console.log(email, password);
    }

    return (
        <div className="h-[100vh] bg-[url('https://i.ibb.co/s3vCsQd/game1.jpg')]">
            <div className="hero min-h-screen   ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl ">
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white bg-gradient-to-r from-[#000000] to-[#434343]">Login</button>
                                <button onClick={() => googleLogin()} className=" mt-2 btn btn-primary glass text-white bg-gradient-to-r from-[#000000] to-[#434343]"><FcGoogle></FcGoogle>  Login With Google</button>
                                <p className="text-base font-poppins ">Do not have an account <Link to="/register" className="underline text-lg font-semibold text-gradient-to-r from-[#000000] to-[#434343]">Register</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;